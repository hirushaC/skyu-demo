import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { useTheme } from "@layouts/ThemeContext";
import ImageFallback from "@layouts/components/ImageFallback";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone,phone1, location, location1 } = config.contact_info;
  const { darkTheme } = useTheme();
  return (
    <footer className="bg-[#292E41]">
      <div className="container">
        <div className="grid grid-cols-1 gap-3 pb-6 pt-12 text-center sm:grid-cols-5 lg:text-left">
          {/* section 1 */}
          <div className="flex flex-col flex-wrap items-center justify-start sm:col-span-2 sm:items-start">
            <div className="rounded-xl bg-theme-light bg-opacity-5 p-8">
              <div className="grid place-items-center sm:place-items-start">
                <Link href="https://www.insighture.com/">
                  <ImageFallback
                    src="/images/logo_footer.svg"
                    width={200}
                    height={200}
                    alt="logo"
                  />
                </Link>
              </div>
              {markdownify(
                footer_content,
                "p",
                "my-3 sm:mr-11 text-[#E2E4EB] font-normal sm:text-base text-sm"
              )}
            </div>

            <div className="my-5 sm:mr-11">
              <div className="grid place-items-center sm:place-items-start">
                <p className="text-[14px] text-[#878B9E]">Powered by: </p>
                <Link href="https://www.insighture.com/">
                  <ImageFallback
                    src="/images/logo.png"
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            {/* <div className="mr-11 my-5 text-theme-light text-sm">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div> */}
          </div>

          {/* section 2 */}
          <div className="px-5">
            <h3 className={`h5 mb-5 text-theme-light`}>Contact</h3>
            <div className="flex flex-col flex-wrap text-[#E2E4EB]">
              <Link href={`tel:${phone}`}>{phone}</Link>
              <Link href={`tel:${phone1}`}>{phone1}</Link>
              <Link href={`mailto:${email}`}>{email}</Link>
            </div>
            <h3 className={`h5 mt-5 text-theme-light`}>Socials</h3>
            <div className="font-normal text-[#E2E4EB]">
              <Social source={social} className="social-icons mt-5" />
            </div>
          </div>

          {/* section 3 */}
          <div className="flex flex-col flex-wrap px-5">
            <h3 className={`h5 text-theme-light`}>Quick Links</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-8 text-[#E2E4EB]">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className=" hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* section 4 */}
          <div className="flex flex-col flex-wrap px-5">
            <h3 className={`h5 text-theme-light`}>Location</h3>
            <ul className="my-5 flex flex-col gap-4 leading-10 text-[#E2E4EB]">
              <div>
                <li className="font-medium">Australia</li>
                <li className="leading-6 text-sm">{markdownify(location)}</li>
              </div>
              <div>
                <li className="font-medium">Sri Lanka</li>
                <li className="leading-6 text-sm">{markdownify(location1)}</li>
              </div>
            </ul>
            
          </div>
        </div>
        {/* copyright */}
        <div className="pb-6 text-center text-[#E2E4EB]">
          {markdownify(copyright, "p", "footer-copy-write sm:text-sm text-xs")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
