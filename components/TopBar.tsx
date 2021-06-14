export default function TopBar() {
  return (
    <nav>
      <div className="w-screen h-8 sm:h-12 md:h-16 bg-blue-400 bg-screen-tone bg-40% bg-blend-overlay shadow-md border-b border-gray-500">
        <div className="w-full flex h-8 sm:h-12 md:h-16 justify-between items-center">
          <div className="flex space-x-2 items-center" id="title">
            <h1 className="sr-only">Oh Christ, Another X-Men Blog</h1>
            <span className="font-heading text-xl sm:text-4xl lg:text-6xl whitespace-nowrap">
              Oh Christ, Another
            </span>
            <img
              className="w-16 sm:w-24 md:w-32 inline-block relative top-1 md:top-2"
              src="/x-men-logo.png"
              alt="Uncanny X-Men Logo"
            />
            <span className="font-heading text-xl sm:text-4xl lg:text-6xl">
              Blog!
            </span>
          </div>
          <div>
            <a
              href="https://twitter.com/BroodKing293"
              target="_blank noopener noreferrer"
            >
              <img
                src="/broo.jpg"
                alt="Broo, the mutated Brood"
                className="w-6 sm:w-8 md:w-12 lg:w-14 mr-3 rounded-2xl"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
