import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import FAQs from "@layouts/FAQs";
import OurStory from "@layouts/OurStory";
import Platform from "@layouts/Platform";
import PrivacyPolicy from "@layouts/PrivacyPolicy";
import SecurityPolicy from "@layouts/SecurityPolicy";
import SkyUDocs from "@layouts/SkyUDocs";
import SkyUTeam from "@layouts/SkyUTeam";
import UpcomingFeatures from "@layouts/UpcomingFeatures";
import { getRegularPage, getSanityData, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = ({ data , posts }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;
  const showHeader = layout !== "contact"; 
  
  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
      posts={posts}
      showHeader={showHeader}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "our-story" ? (
        <OurStory data={data} />
      )  : layout === "contact" ? (
        <Contact data={data} />
      ) : layout === "skyu-team" ? (
        <SkyUTeam data={data} />
      ) : layout === "upcoming-features" ? (
        <UpcomingFeatures data={data} />
      ) : layout === "platform" ? (
        <Platform data={data} posts={posts}/>
      ) : layout === "faqs" ? (
        <FAQs data={data} />
      ) : layout === "skyu-docs" ? (
        <SkyUDocs data={data} />
      ) : layout === "privacy-policy" ? (
        <PrivacyPolicy data={data} />
      ) : layout === "security-policy" ? (
        <SecurityPolicy data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getSinglePage("content");
  const paths = slugs.map((item) => ({
    params: {
      regular: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);
  const posts = await getSanityData();

  return {
    props: {
      slug: regular,
      data: allPages,
      posts: posts,
    },
  };
};
