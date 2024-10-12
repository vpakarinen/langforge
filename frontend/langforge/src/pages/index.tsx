/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="flex items-center justify-center mt-10">
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-2">
            LangForge
          </h1>
          <p className="text-lg mb-6">
            Translate text between multiple languages using local translation engine
          </p>
        <Link
          href="/translate"
          className="inline-block px-4 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Start Translating
        </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
