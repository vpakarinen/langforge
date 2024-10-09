import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="flex items-center justify-center mt-20">
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white-800 mb-3">
            LangForge
          </h1>
          <p className="text-lg text-white-600 mb-7">
            Translate text between multiple languages using our powerful translation engine
          </p>
        <Link
          href="/translate"
          className="inline-block px-4 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Start Translating
        </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
