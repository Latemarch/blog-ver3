import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center w-full h-20 fixed z-10">
      <Link href="/posts">Posts</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/shorts">shorts</Link>
    </div>
  );
}
