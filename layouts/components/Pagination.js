import Link from "next/link";
import React from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const Pagination = ({ currentPage, totalPages }) => {
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  return (
    <>
        <nav
          className="mb-4 flex justify-center space-x-1"
          aria-label="Pagination"
        >
          {/* previous */}
          {hasPrevPage ? (
            <Link legacyBehavior={true}
              href={
                currentPage === 2
                  ? "/blogs/page/1"
                  : `/blogs/page/${currentPage - 1}`
              }
              passHref
            >
              <a className="inline-flex h-11 w-11 items-center justify-center rounded px-2 py-2 text-primary  hover:text-[#424B66]">
                <TfiAngleLeft />
              </a>
            </Link>
          ) : (
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded px-2 py-2 text-primary hover:text-[#424B66]`}
            >
              <TfiAngleLeft />
            </span>
          )}

          {/* page index */}
          {[...Array(totalPages)].map((_, i) => (
            <React.Fragment key={`page-${i + 1}`}>
              {i + 1 === currentPage ? (
                <span
                  aria-current="page"
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-white`}
                >
                  {i + 1}
                </span>
              ) : (
                <Link legacyBehavior={true}
                  href={
                    i === 0
                      ? "/blogs/page/1"
                      : `/blogs/page/${i + 1}`
                  }
                  passHref
                >
                  <a className={`inline-flex h-11 w-11 items-center justify-center rounded-md px-4 py-2 font-medium text-primary hover:bg-primary hover:text-white`}>
                    {i + 1}
                  </a>
                </Link>
              )}
            </React.Fragment>
          ))}

          {/* next page */}
          {hasNextPage ? (
            <Link legacyBehavior={true}
              href={`/blogs/page/${currentPage + 1}`}
              passHref
            >
              <a className="inline-flex h-11 w-11 items-center justify-center rounded px-2 py-2 text-primary hover:text-[#424B66]">
                <TfiAngleRight />
              </a>
            </Link>
          ) : (
            <span
              className={` inline-flex h-11 w-11 items-center justify-center rounded px-2 py-2 text-primary hover:text-[#424B66]`}
            >
              <TfiAngleRight />
            </span>
          )}
        </nav>
    </>
  );
};

export default Pagination;
