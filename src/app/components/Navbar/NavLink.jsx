import Link from "next/link";

const NavLink = ({ href, title }) => {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        {title}
      </Link>
    );
  }

  return (
    <Link href={href}>
      <span className="text-white hover:text-gray-300">{title}</span>
    </Link>
  );
};

export default NavLink;