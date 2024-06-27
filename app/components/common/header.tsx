import DownHeader from "./header/downHeader";
import HeaderBody from "./header/headerBody";

export default function Header(){
    return (
        <header className="flex flex-col justify-center items-center place-self-center z-10 fixed bg-white top-0 
            space-y-2 sm:w-5/6  xl:w-4/6  ">
                <HeaderBody />
                <DownHeader />
        </header>
    );
}