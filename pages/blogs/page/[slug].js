// pages/posts/page/[slug].js
import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import { getSanityData } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import Post from "@partials/Post";
import { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";

const postsPerPage = 3;

// blog pagination
const BlogPagination = ({ posts, currentPage, totalPages }) => {
  const postsRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(postsRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  // Calculate the range of posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  // Filter by dates
  const currentPosts = sortedPosts
    .filter(
      (post) =>
        selectedCategories.length === 0 ||
        post.categories.some((category) =>
          selectedCategories.includes(category.title)
        )
    )
    .slice(indexOfFirstPost, indexOfLastPost);

  // Filter by Category titles
  const categoryOptions = Array.from(
    new Set(
      posts.flatMap((post) => post.categories.map((category) => category.title))
    )
  ).map((category) => ({ value: category, label: category }));

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions.map((option) => option.value));
  };

  return (
    <Base>
      <section className="bg-white section">
        <div className="container">
          <div className="relative">
            {currentPosts.length > 0 ? (
              <>
                {" "}
                <div className={`row mx-3 w-fit bg-transparent`}>
                  <label className="mr-2">Filter by Category:</label>
                  <ReactSelect
                    isMulti
                    value={categoryOptions.filter((option) =>
                      selectedCategories.includes(option.value)
                    )}
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                    isSearchable={false}
                  />
                </div>
                <div
                  className="justify-left lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-10 opacity-0 grid lg:px-6"
                  ref={postsRef}
                >
                  {currentPosts.map((post, i) => (
                    <div key={`key-${i}`} className="m-4">
                      <Post post={post} />
                    </div>
                  ))}
                </div>
                <div className="mt-20 flex items-center justify-center">
                  <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                  />
                </div>
              </>
            ) : (
              <section className="pt-40">
                <div className="container">
                  <div className="relative">
                    <div className="grid grid-cols-1 items-center justify-center gap-y-5 text-center">
                      {" "}
                      <div className="mx-auto">
                        {" "}
                        <ImageFallback
                          src={"/images/just-logo.svg"}
                          width={400}
                          height={100}
                          alt="image"
                        />
                      </div>
                      <h4>
                        Stay <a className="text-primary">Tuned...</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-b from-theme-light to-white">
        {" "}
        <div className="container text-center">
          <div className="relative">
            <Cta />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default BlogPagination;

// get blog pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = await getSanityData();

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return {
    props: {
      pagination: pagination,
      posts: posts,
      currentPage: currentPage,
      totalPages: totalPages,
    },
  };
};

// get blog pagination slug
export const getStaticPaths = async () => {
  const getAllSlug = await getSanityData();
  const totalPages = Math.ceil(getAllSlug.length / postsPerPage);

  let paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      params: {
        slug: i.toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};
