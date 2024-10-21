import routes from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Image
          src="/undraw_page_not_found_re_e9o6.svg"
          width={300}
          height={300}
          alt="Lost Astronaut"
          className="mx-auto"
          style={{ aspectRatio: "300/300" }}
        />
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Oops! You seem to have lost your way
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          It looks like you&apos;ve stumbled upon a 404 error. Don&apos;t worry,
          your intergalactic GPS must have malfunctioned. Let&apos;s get you
          back on track!
        </p>
        <div className="mt-6">
          <Link
            href={routes.LANDING}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}
