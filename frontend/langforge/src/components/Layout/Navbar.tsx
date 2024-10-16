import Link from 'next/link';
import { FaLanguage } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-3xl font-bold">
          <FaLanguage className="mr-2" />
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-lg hover:underline">
            Home
          </Link>
          <Link href="/translate" className="text-lg hover:underline">
            Translate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
