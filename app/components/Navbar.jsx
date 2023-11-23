import Link from "next/link";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/query", label: "react-query" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar mx-auto max-w-6xl flex-col  px-8 sm:flex-row">
        <li className="sm:mr-auto">
          <Link href="/" className="btn btn-outline btn-accent px-10">
            Next.js
          </Link>
        </li>
        <ul className="menu menu-horizontal sm:ml-8">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
