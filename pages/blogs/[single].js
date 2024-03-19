import PostSingle from "@layouts/PostSingle";
import parseMDX from "@lib/utils/mdxParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { getSanityData } from "@lib/contentParser";
import Platform from "@layouts/Platform";

// post single layout
const Article = ({ post, authors, slug, recentPosts }) => {
  return (
    <>
      <PostSingle
        authors={authors}
        slug={slug}
        recentPosts={recentPosts}
        post={post}
      />
    </>
  );
};

// get post single slug
export const getStaticPaths = async () => {
  const sanityData = await getSanityData();
  const paths = sanityData.map((item) => ({
    params: {
      single: item.slug.current,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// get post single content
export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const posts = await getSanityData();
  const post = posts.find((p) => p.slug.current == single);
  const recentPosts = sortByDate(posts).filter(
    (post) => post.slug.current !== single
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: post,
      slug: single,
      recentPosts: recentPosts,
    },
  };
};

export default Article;
