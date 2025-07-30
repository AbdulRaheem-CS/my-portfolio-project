import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-black p-4 sticky top-0 z-50 shadow-xl border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo on left */}
        <Link href="/" className="text-white font-bold text-xl md:text-2xl tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            ABDULRAHEEM
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-white">
          <li>
            <Link 
              href="#about" 
              className="hover:text-purple-400 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#projects" 
              className="hover:text-purple-400 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="#skills" 
              className="hover:text-purple-400 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="hover:text-purple-400 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side - Could add something like a theme switcher or CTA */}
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white p-2 focus:outline-none"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden animate-fade-in">
        <ul className="flex flex-col items-center space-y-3 text-white p-4 bg-gray-900 rounded-lg mt-2 border border-gray-800">
          <li>
            <Link 
              href="#about" 
              className="hover:text-purple-400 transition duration-300 w-full text-center py-2"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#projects" 
              className="hover:text-purple-400 transition duration-300 w-full text-center py-2"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="#skills" 
              className="hover:text-purple-400 transition duration-300 w-full text-center py-2"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="hover:text-purple-400 transition duration-300 w-full text-center py-2"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              Contact
            </Link>
          </li>
          <li className="w-full pt-2 mt-2 border-t border-gray-800">
            <Link 
              href="#contact" 
              className="block text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition duration-300 text-center"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;