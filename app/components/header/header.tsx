import DownHeader from "./downHeader";
import HeaderBody from "./headerBody";


export default function Header(){
    return (
        <header className="flex flex-col justify-center items-center place-self-center
            space-y-2 sm:w-5/6  xl:w-4/6  ">
                <HeaderBody />
                <DownHeader />
        </header>
    );
}