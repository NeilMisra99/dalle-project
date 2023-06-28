import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="p-5 flex justify-between  sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALLE 2, ChatGPT, and Microsoft Azure
          </h2>
        </div>
      </div>

      <div className="flex divide-x text-gray-500 items-center text-xs md:text-base">
        <Link
          href="https://github.com/NeilMisra99/dalle-project"
          className="px-2 font-light"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
