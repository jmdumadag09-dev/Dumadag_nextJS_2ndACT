// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is Jian Marc Dumadag</h1>

      <p>I am a BSIT student. I created this website for educational purposes.</p>

      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}