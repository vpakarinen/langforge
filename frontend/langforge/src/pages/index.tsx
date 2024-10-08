import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="flex items-center justify-center mt-20">
      <div>
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white-800 mb-4">
            LangForge
          </h1>
          <p className="text-lg text-white-600 mb-7">
            Translate text between multiple languages using our powerful translation engine
          </p>
        <Link
          href="/translate"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Start Translating
        </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
