import DownHeader from "./downHeader";
import HeaderBody from "./headerBody";


export default function Header(){
    return (
        <header className="flex flex-col justify-center items-center space-y-2">
                <HeaderBody />
                <DownHeader />
        </header>
    );
}