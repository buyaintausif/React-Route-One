import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Navber() {

    const[open,setOpen]=useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <div>

        <div className="text-4xl md:hidden" onClick={()=>setOpen(!open)}>

            {
                open === true ? <FiMenu className=""></FiMenu> : <IoMdClose></IoMdClose>
            }

        </div>
      
      <ul className="md:flex">
        {routes.map((route) => <Link key={route.id} route={route}></Link>)}
      </ul>
    </div>
  );
}
