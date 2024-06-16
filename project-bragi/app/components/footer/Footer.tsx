import DownFooter from "./downFooter";
import FooterBody from "./footerBody";

export default function Footer() {
  return (
    <footer className="bg-stone-900 flex flex-col p-5">
      <div className="sm:w-5/6 xl:w-4/6 place-self-center">
        <FooterBody />
        <div className="w-full border-t my-3 border-primary2 dark:border-secondary0"></div>
        <DownFooter />
      </div>
    </footer>
  );
}
