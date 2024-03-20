import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import { useTheme } from "@layouts/ThemeContext";
import ImageFallback from "@layouts/components/ImageFallback";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const [direction, setDirection] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const { asPath } = useRouter();
  const [hoveredChild, setHoveredChild] = useState(null);
  const [loading, setLoading] = useState(true);

  //sticky header
  useEffect(() => {
    const header = headerRef.current;
    const headerHeight = header.clientHeight + 200;
    let prevScroll = 0;
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      scrollY > 0 ? setSticky(true) : setSticky(false);
      if (scrollY > headerHeight) {
        prevScroll > scrollY ? setDirection(-1) : setDirection(1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    });
  }, []);

  // Show content when images are loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`header-height-fix`}></div>
      <header
        className={`header ${
          sticky ? "header-sticky border-b-2 border-[#E2E4EB]" : ''
        } `}
        ref={headerRef}
      >
        <nav className="navbar container">
          {/* logo */}
          <div className="order-0 flex items-start">
            {sticky ? <Logo /> : <Logo src='/images/logo - white.svg'/>}
          </div>

          <ul
            id="nav-menu"
            className={`navbar-nav justify-left order-2 mr-14 w-full lg:order-1 md:w-auto md:space-x-2 lg:flex ${
              !showMenu && "hidden"
            } `}
          >
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.children ? (
                  <li
                    className={`nav-item nav-dropdown group relative ${
                      showDropdown === i && "active"
                    }`}
                    onMouseEnter={() => setShowDropdown(i)}
                    onMouseLeave={() => setShowDropdown(null)}
                    onClick={() =>
                      setShowDropdown(showDropdown === i ? null : i)
                    }
                  >
                    <span
                      className={`${sticky ? 'nav-link-sticky' : 'nav-link'} inline-flex items-center ${sticky ? 'text-[#424B66]' : 'text-white' } ${
                        showDropdown === i && "active"
                      }`}
                      onClick={() =>
                        setShowDropdown(showDropdown === i ? null : i)
                      }
                    >
                      {menu.name}
                      <svg
                        className={`h-4 w-4 fill-current transition-transform ${
                          showDropdown === i && "rotate-180"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    {showDropdown === i && (
                      <div className="nav-dropdown-overlay top-full mx-12 w-full items-center justify-center bg-transparent p-2 lg:absolute lg:left-0 lg:mx-0">
                        <div
                          className={`nav-dropdown-list divide-x-0 bg-white  ${sticky && 'border border-[#E8F4FE]'}`}
                        >
                          <ul className="flex-auto py-2">
                            {/* Column 01 */}
                            {menu.children.map((child, j) => (
                              <li key={`children-${j}`}>
                                <Link
                                  href={child.url}
                                  className={`nav-dropdown-link text-balance flex flex-row gap-3 sm:items-start items-center transition-all ${
                                    asPath === child.url && "active"
                                  }`}
                                  onMouseEnter={() => setHoveredChild(child)}
                                  onMouseLeave={() => setHoveredChild(null)}
                                  target={child.target}
                                >
                                  <div className="grid flex-none grid-flow-col">
                                    <div className="top-0 grid items-start justify-start">
                                      <ImageFallback
                                        className="object-contain"
                                        width={30}
                                        height={30}
                                        src={child.icon}
                                        alt={child.name}
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className={`grid grid-flow-row auto-rows-max hover:auto-rows-min`}
                                  >
                                    <h6 className="flex gap-2 overflow-hidden whitespace-nowrap font-medium">
                                      {child.name}
                                      {child.name === "Developer hub" && (
                                        <FaArrowUpRightFromSquare
                                          className={`${
                                            hoveredChild?.name ===
                                            "Developer hub"
                                              ? "text-primary"
                                              : "text-[#424B66]"
                                          } hover:text-primary`}
                                        />
                                      )}
                                    </h6>
                                    <p className="hidden whitespace-pre-line text-left text-xs font-light text-[#878B9E] lg:block">
                                      {child.desc}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      className={`block ${sticky ? 'text-[#424B66] nav-link-sticky' : 'text-white nav-link' } ${
                        asPath === menu.url && "active"
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            {config.nav_button.enable && (
              <li className="nav-item py-3 lg:hidden">
                <Link
                  className={`btn btn-primary ${sticky ? 'bg-primary btn-primary' : 'bg-white btn-primary-sticky'} opacity-100 lg:flex`}
                  href={config.nav_button.link}
                >
                  {config.nav_button.label}
                </Link>
              </li>
            )}
          </ul>

          <div className="order-1 flex items-center md:ml-0">
            {config.nav_button.enable && (
              <>
                {/* <div className="pr-5 cursor-pointer hidden lg:block text-[#0368B1]"><TfiSearch /></div> */}

                <Link
                  className={`btn hidden ${sticky ? 'bg-primary btn-primary' : 'bg-white btn-primary-sticky'} opacity-100 lg:flex`}
                  href={config.nav_button.link}
                >
                  {config.nav_button.label}
                </Link>
              </>
            )}

            {/* navbar toggler */}
            {showMenu ? (
              <button
                aria-label="Close menu"
                className={`h-8 w-8 text-3xl lg:hidden ${sticky ? 'text-[#424B66]' : 'text-white'}`}
                onClick={() => setShowMenu(!showMenu)}
              >
                <CgClose />
              </button>
            ) : (
              <button
                aria-label="Open menu"
                className="text-dark lg:hidden"
                onClick={() => setShowMenu(!showMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                >
                  <path
                    fill={`${sticky ? 'black' : 'white'}`}
                    d="M 5 5 L 5 11 L 11 11 L 11 5 L 5 5 z M 13 5 L 13 11 L 19 11 L 19 5 L 13 5 z M 21 5 L 21 11 L 27 11 L 27 5 L 21 5 z M 7 7 L 9 7 L 9 9 L 7 9 L 7 7 z M 15 7 L 17 7 L 17 9 L 15 9 L 15 7 z M 23 7 L 25 7 L 25 9 L 23 9 L 23 7 z M 5 13 L 5 19 L 11 19 L 11 13 L 5 13 z M 13 13 L 13 19 L 19 19 L 19 13 L 13 13 z M 21 13 L 21 19 L 27 19 L 27 13 L 21 13 z M 7 15 L 9 15 L 9 17 L 7 17 L 7 15 z M 15 15 L 17 15 L 17 17 L 15 17 L 15 15 z M 23 15 L 25 15 L 25 17 L 23 17 L 23 15 z M 5 21 L 5 27 L 11 27 L 11 21 L 5 21 z M 13 21 L 13 27 L 19 27 L 19 21 L 13 21 z M 21 21 L 21 27 L 27 27 L 27 21 L 21 21 z M 7 23 L 9 23 L 9 25 L 7 25 L 7 23 z M 15 23 L 17 23 L 17 25 L 15 25 L 15 23 z"
                  />
                </svg>
              </button>
            )}
            {/* /navbar toggler */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
