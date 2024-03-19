import { useTheme } from "@layouts/ThemeContext";
import ImageFallback from "@layouts/components/ImageFallback";
import Loader from "@layouts/components/Loader";
import dateFormat from "@lib/utils/dateFormat";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

const Post = ({ post }) => {
  const { darkTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-lg shadow-[0_10px_35px_rgba(0,0,0,.05)] ${
        darkTheme && "border border-white"
      }`}
    >
      {/* {loading ? (
        <div className="p-5">
          <Loader />
        </div>
      ) : ( */}
      <React.Fragment>
        {post.mainImage && (
          <Link href={`/blogs/${post.slug.current}`}>
            <ImageFallback
              className="w-full object-cover"
              src={post.mainImage}
              alt="image"
              width={570}
              height={335}
              priority={true}
            />
          </Link>
        )}
      </React.Fragment>
      {/* )} */}
      <div className="p-8 text-center lg:text-left">
        <div className="lg:h-[100px]">
          <div className="h5 pb-5 font-medium">
            <Link
              href={`/blogs/${post.slug.current}`}
              className="block hover:text-primary"
            >
              {post.title}
            </Link>
          </div>
          {/* <div className="line-clamp-2 text-[16px]">
            <PortableText className="mt-4 line-clamp-2" value={post.content} />
          </div> */}
        </div>
        <div className="py-8">
          <hr />
        </div>

        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-4 overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary lg:mb-0 lg:mr-5">
            <ImageFallback
              src={post.author?.image}
              width={50}
              height={50}
              alt="author"
              className="rounded-full"
              priority={true}
            />
          </div>
          <div className="grid-cols-2 place-items-center lg:grid">
            <div className="pb-5 lg:pb-0">
              <p
                className={`font-medium leading-5 ${darkTheme && "text-dark"}`}
              >
                {post.author?.name}
              </p>
              <p className="text-sm">{dateFormat(post.publishedAt)}</p>
            </div>
            <div className="flex flex-col flew-wrap sm:items-end items-center">
              {post.categories.map((category) => (
                <span
                  key={category.title}
                  className="btn mx-2 my-1 rounded-md bg-slate-700 px-2 py-1 text-xs text-white"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
