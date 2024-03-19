const fs = require('fs');
const { createClient } = require('next-sanity');
const path = require('path');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'prgo10kp';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: '2023-12-08',
});

const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://verdant-bavarois-dedf67.netlify.app";

const STATIC_PAGES = [
  { path: '/pages/index.js', url: '/' },
  { path: '/layouts/Platform.js', url: '/platform' },
  { path: '/layouts/FAQs.js', url: '/faqs' },
  { path: '/layouts/SkyUTeam.js', url: '/skyu-team' },
  { path: '/layouts/UpcomingFeatures.js', url: '/upcoming-features' },
  { path: '/layouts/Contact.js', url: '/contact' },
  { path: '/pages/solutions/platform-teams.js', url: '/solutions/platform-teams' },
  { path: '/pages/solutions/developers.js', url: '/solutions/developers' },
  { path: '/pages/solutions/ops-teams.js', url: '/solutions/ops-teams' },
  { path: '/pages/solutions/c-suite.js', url: '/solutions/c-suite' },
  // Add more static pages as needed
];

async function fetchPosts() {
  const query = '*[_type == "post"]{ _id, title, "slug": slug.current, _createdAt }';
  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    return [];
  }
}

async function fetchLastModifiedDate(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString().split('T')[0];
}

async function generateSitemap() {

  // Fetch static paths with auto-generated lastmod dates
  const staticPaths = await Promise.all(
    STATIC_PAGES.map(async ({ path: filePath, url }) => ({
      loc: `${BASE_URL}${url}`,
      lastmod: await fetchLastModifiedDate(path.join(__dirname, '..', filePath)),
    }))
  );

  // Fetch posts
  const posts = await fetchPosts();
  const postPaths = posts.map(post => ({
    loc: `${BASE_URL}/blogs/${post.slug}`,
    lastmod: new Date(post._createdAt).toISOString().split('T')[0],
  }));

  const paths = [...staticPaths, ...postPaths];

  // Generate sitemap.xml content
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths
        .map(({ loc, lastmod }) => `
        <url>
          <loc>${loc}</loc>
          <lastmod>${lastmod}</lastmod>
        </url>
      `)
        .join('')}
    </urlset>
  `.trim();

  // Write sitemap to public directory
  fs.writeFileSync(SITEMAP_PATH, sitemap);
  console.log('Sitemap generated!');
}

generateSitemap().catch(console.error);
