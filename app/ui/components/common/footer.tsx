import DownFooter from "./footer/downFooter";
import FooterBody from "./footer/footerBody";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 dark:bg-emerald-900 flex flex-col p-5">
      <div className="sm:w-5/6 xl:w-4/6 place-self-center">
        <FooterBody />
        <div className="w-full border-t my-3 border-emerald-300 dark:border-emerald-800"></div>
        <DownFooter />
      </div>
    </footer>
  );
}
