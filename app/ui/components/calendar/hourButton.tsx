import { componentBorder, componentText, fillDefaultComponentBackground, hoverComponentText, hoverFillDefaultComponentBackground } from "../../tailwindClasses";

interface HourButtonProps{
    text: string;
    status: boolean;
}

export default function HourButton({ text, status }: HourButtonProps){
    return (
        <button className={`flex flex-col p-1 md:p-2 items-center
                ${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}
                ${componentText}
                ${componentBorder} rounded-xl
        `} >
            {/* Text */}
            <div className="text-lg md:text-xl font-semibold">{text}</div>
            {/* Status */}
            <div>{status ? "Disponible" : "Ocupado"}</div>
        </button>
    )
}