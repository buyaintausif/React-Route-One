import Link from "../Link/Link";

export default function Navber() {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <div>
      <ul className="md:flex">
        {routes.map((route) => <Link key={route.id} route={route}></Link>)}
      </ul>
    </div>
  );
}
