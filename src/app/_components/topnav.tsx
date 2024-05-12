import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="">Gallery</Link>
      <Link href="">Sign In</Link>
    </nav>
  );
};

export default TopNav;
