import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <h1 className="text-6xl">Home page</h1>
      <p className="text-md pt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
        adipisci illum sapiente soluta molestiae laboriosam vel enim ducimus
        dolorem laudantium!
      </p>
      <Link href="/client" className="btn btn-accent mt-3 px-6 capitalize">
        get started
      </Link>
    </main>
  );
}
