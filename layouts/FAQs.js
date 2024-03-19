import React, { useState } from "react";
import Accordion from "./shortcodes/Accordion";
import { useTheme } from "./ThemeContext";
import Cta from "./components/Cta";
import SimpleAccordion from "./shortcodes/SimpleAccordion";
import { IoIosClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const FAQs = ({ data }) => {
  const { frontmatter } = data;
  const { main, faq } = frontmatter;
  const { darkTheme } = useTheme();
  const [clickedIndex, setClickedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const highlightKeywords = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) => {
      return index % 2 === 0 ? (
        part
      ) : (
        <span key={index} className="bg-[#B9DFFB]">
          {part}
        </span>
      );
    });
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const filteredFAQs = faq.filter(
    (faqn) =>
      faqn.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faqn.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className={`section bg-[#0368B1] flex items-center justify-center`}>
        <div className={"container"}>
          <div className="relative">
            <h1 className="sm:h1 h4 text-theme-light text-center">{main.title}</h1>
            <div className="my-5 flex w-full rounded sm:px-10">
              <input
                type="text"
                placeholder="Search FAQs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-black px-10 py-4 text-[#424B66]"
              />
              {searchTerm && (
                <button className="-ml-8" onClick={clearSearch}>
                  <IoClose />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-20 py-5">
        <div className="container">
          <div className={`relative grid-cols-1 lg:grid`}>
            {filteredFAQs.map((faqn, index) => (
              <div
                className={`my-2 w-full rounded-xl py-3 lg:px-10`}
                key={index}
              >
                <SimpleAccordion title={highlightKeywords(faqn.title)}>
                  {faqn.desc}
                </SimpleAccordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section bg-theme-light`}>
        <div className="container-xl text-center">
          <div className="relative">
            <Cta />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
