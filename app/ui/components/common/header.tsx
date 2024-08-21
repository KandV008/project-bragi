import DownHeader from "./header/downHeader";
import HeaderBody from "./header/headerBody";

export default function Header(){
    return (
        <header className="flex flex-col justify-center items-center place-self-center z-10 fixed pt-2
            bg-white dark:bg-emerald-950
            top-0 
            space-y-2 w-full xl:w-4/6  ">
                <HeaderBody />
                <DownHeader />
        </header>
    );
}