import DownFooter from "./downFooter";
import FooterBody from "./footerBody";


export default function Footer(){
    return(
        <footer className="bg-stone-900 p-5 align-bottom ">
            <FooterBody />
            <div className="w-full border-t my-3 border-primary2 dark:border-secondary0"></div>
            <DownFooter />
        </footer> 
    );
}