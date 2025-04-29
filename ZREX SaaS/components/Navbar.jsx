import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <img className="h-6.5 w-6.5 sm:h-8.5 sm:w-8.5 md:h-9.5 md:w-9.5 lg:h-10.5 lg:w-10.5 mr-2" src={logo} alt="Logo"/>

            <span className="text-2xl tracking-tight"></span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
  {navItems.map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(item.href).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="cursor-pointer hover:text-orange-500 transition-colors duration-800 ease-in-out"
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Connect
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full p-12 mt-3 flex flex-col justify-center items-center text-center lg:hidden 
    bg-neutral-900/75 backdrop-blur-xl">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
