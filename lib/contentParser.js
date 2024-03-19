import parseMDX from "@lib/utils/mdxParser";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { createClient } from "@sanity/client";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-12-08',
})

// get list page data, ex: content/_index.md
export const getListPage = async (filePath) => {
  const pageData = fs.readFileSync(filePath, "utf-8");
  const pageDataParsed = matter(pageData);
  const notFoundPage = fs.readFileSync("content/404.md", "utf-8");
  const notFoundDataParsed = matter(notFoundPage);
  let frontmatter, content;

  if (pageDataParsed) {
    content = pageDataParsed.content;
    frontmatter = pageDataParsed.data;
  } else {
    content = notFoundDataParsed.content;
    frontmatter = notFoundDataParsed.data;
  }
  const mdxContent = await parseMDX(content);

  return {
    frontmatter,
    content,
    mdxContent,
  };
};

// get a regular page data from many pages, ex: about.md
export const getRegularPage = async (slug) => {
  const publishedPages = getSinglePage("content");
  const pageData = publishedPages.filter((data) => data.slug === slug);
  const notFoundPage = fs.readFileSync("content/404.md", "utf-8");
  const notFoundDataParsed = matter(notFoundPage);

  let frontmatter, content;
  if (pageData[0]) {
    content = pageData[0].content;
    frontmatter = pageData[0].frontmatter;
  } else {
    content = notFoundDataParsed.content;
    frontmatter = notFoundDataParsed.data;
  }
  const mdxContent = await parseMDX(content);

  return {
    frontmatter,
    content,
    mdxContent,
  };
};

function sanitizeFilename(filename) {
  return filename.replace(/[^a-zA-Z0-9-_\.]/g, '');
}

// get all single pages, ex: blog/post.md
export const getSinglePage = (folder) => {
  const filesPath = fs.readdirSync(folder);
  const sanitizeFiles = filesPath.filter((file) => file.includes(".md"));
  const filterSingleFiles = sanitizeFiles.filter((file) => file.match(/^(?!_)/));

  const singlePages = filterSingleFiles.map((filename) => {
    const sanitizedFilename = sanitizeFilename(filename);
    const fullPath = path.join(folder, sanitizedFilename);

    const normalizedPath = path.resolve(fullPath);
    if (!normalizedPath.startsWith(path.resolve(folder))) {
      throw new Error('Invalid file path detected');
    }

    const pageData = fs.readFileSync(normalizedPath, "utf-8");
    const pageDataParsed = matter(pageData);
    const frontmatterString = JSON.stringify(pageDataParsed.data);
    const frontmatter = JSON.parse(frontmatterString);
    const content = pageDataParsed.content;
    const slug = sanitizedFilename.replace(".md", "");
    const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;

    return { frontmatter: frontmatter, slug: url, content: content };
  });

  const publishedPages = singlePages.filter(
    (page) =>
      !page.frontmatter.draft && page.frontmatter.layout !== "404" && page
  );

  const filterByDate = publishedPages.filter(
    (page) => new Date(page.frontmatter.date || new Date()) <= new Date()
  );

  return filterByDate;
};

const postQuery = groq`
  *[_type == "post"]{
    title,
    slug,
    author->{name, image},
    mainImage,
    "categories": categories[]->{"title": title},
    publishedAt,
    content
  }
`;

export const getSanityData = async () => {
    const sanityData = await client.fetch(postQuery);

    const builder = imageUrlBuilder(client);
    sanityData.forEach((item) => {
      item.mainImage = builder.image(item.mainImage).url();
      item.author.image = builder.image(item.author.image).url();
    });
    
    return sanityData;
    
};
