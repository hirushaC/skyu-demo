import React, { useState } from "react";
import SideNav from "./components/SideNav";
import Content from "pages/skyu-docs/Content";
import Button from "./shortcodes/Button";
import Link from "next/link";

const SkyUDocs = ({ data }) => {
  const { frontmatter } = data;
  const { intro, menu } = frontmatter;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuItemClick = (title) => {
    setSelectedItem(title);
  };

  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="relative flex columns-2">
          <div className="w-1/2">
            <h1></h1>
          </div>
          <div>
            {" "}
            <div className="right-0">
              <Button href="/" className="bg-black">Guides</Button>
              <Button href="/" className="bg-black">API References</Button>
              <Button href="/" className="bg-black">Release Notes</Button>
              <Button href="/" className="bg-black">Discussions</Button>
            </div>
          </div>
        </div>
        <div className="flex columns-2 px-5">
          <div className="w-fit">
            <SideNav menu={menu} onMenuItemClick={handleMenuItemClick} />
          </div>
          <div className="mx-7 w-full text-left">
            <Content selectedItem={selectedItem} data={intro} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkyUDocs;
