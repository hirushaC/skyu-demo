import Link from "next/link";

const Button = ({ href, type, rel, className, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`${className} btn me-4 mb-4 ${
        type === "outline" ? "btn-outline-primary" : "btn-primary"
      } border-primary hover:text-white hover:no-underline`}
    >
      {children}
    </Link>
  );
};

export default Button;
