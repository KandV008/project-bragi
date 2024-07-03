import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6">
      <section
        className="flex flex-col place-self-center p-5 items-center gap-3"
      >
        <SignUp />
      </section>
    </main>
  );
}
