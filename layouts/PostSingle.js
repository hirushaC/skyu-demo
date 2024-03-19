import Base from "@layouts/Baseof";
import { urlFor } from "@lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Cta from "./components/Cta";
import Post from "./partials/Post";

const PostSingle = ({ recentPosts, post }) => {
  const myPortableTextComponents = {
    types: {
      image: ({ value, isInline }) => (
        <Image
          src={urlFor(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt || " "}
          width={900}
          height={900}
          className="rounded-md"
        />
      ),
    },
  };

  return (
    <Base title={post?.title} description={post?.title}>
      <section className="relative h-[450px] md:h-[350px] sm:h-[250px] overflow-hidden bg-theme-dark">
        <Image
          src={post?.mainImage}
          fill
          alt={post?.title}
          priority={true}
          className="h-auto w-full object-cover opacity-40 blur-lg"
        />
        <h1 className="h2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white">
          {post?.title}
        </h1>
      </section>

      <section className="section pt-0">
        <div className="container">
          <article>
            <div className="row justify-center">
              <div className="col-9">
                <div className={`content leading-7 sm:mb-16 mt-16 text-justify`}>
                  <PortableText
                    value={post?.content}
                    components={myPortableTextComponents}
                  />
                </div>
              </div>
            </div>
          </article>

          <div className="section sm:mt-16">
            <h2 className={`section-middle-title text-center`}>
              Recent Articles
            </h2>
            <div className="row grid-cols-3 justify-center lg:grid">
              {recentPosts.slice(0, 3).map((post, index) => (
                <div key={"post-" + index} className="animate mt-16">
                  <Post post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-theme-light">
        <div className="container">
          <div className="relative">
            <Cta />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
