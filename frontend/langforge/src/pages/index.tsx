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
          <p className="text-lg mb-5">
            Translate text between multiple languages using our powerful translation engine
          </p>
        <Link
          href="/translate"
          className="inline-block px-2 py-5 bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Start Translating
        </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
