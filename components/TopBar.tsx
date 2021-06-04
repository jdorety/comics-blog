import Image from "next/image";

export default function TopBar() {
  return (
    <nav>
      <div className="w-screen pt-2 h-10 sm:h-16 md:h-20 bg-blue-200 shadow-md border-b border-gray-500">
        <div className="w-full flex justify-center sm:justify-start">
          <div className="flex space-x-2" id="title">
            <h1 className="sr-only">Oh Christ, Another X-Men Blog</h1>
            <span className="font-title text-xl sm:text-5xl md:text-6xl">Oh Christ, Another</span>
            <img className="w-16 sm:w-32 md:w-40 inline-block" src="/x-men-logo.png" />
            <span className="font-title text-xl sm:text-5xl md:text-6xl">Blog!</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
