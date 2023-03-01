import Link from "next/link";

function Header() {
  return (
    <header className="">
      <div className="max-w-7xl mx-auto p-5 flex gap-5 items-center">
        <div className="w-16 ">
          <Link href={"/"}>
            <img src="/abstract.png" alt="logo" />
          </Link>
        </div>

        <div>
          <ul className="flex gap-x-4">
            <li className="text-white">
              <Link href={"/posts"}>Posts</Link>
            </li>
            <li className="text-white">
              <Link href={"/blog"}>blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
