import ImageFallback from "@components/ImageFallback";
import config from "@config/config.json";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <Link href="/" className="navbar-brand block">
      {src || logo ? (
        <ImageFallback
          width={logo_width.replace("px", "") * 2}
          height={logo_height.replace("px", "") * 2}
          src={src ? src : logo}
          alt={title}
          priority
          style={{
            height: logo_height.replace("px", "") + "px",
            width: `${parseInt(logo_width.replace("px", "")) / 3 * 2}px`,
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
