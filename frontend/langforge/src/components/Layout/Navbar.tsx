import Link from 'next/link';
import { FaLanguage } from 'react-icons/fa';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-white text-xl font-bold"
        >
          <FaLanguage className="mr-2" />
          LangForge
        </Link>

        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/translate" className="text-white hover:underline">
            Translate
          </Link>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="text-white hover:underline">More</MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/features"
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Features
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      About
                    </Link>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
