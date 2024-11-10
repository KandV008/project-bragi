import { componentBorder, componentText, fillDefaultComponentBackground, hoverComponentText, hoverFillDefaultComponentBackground } from "../../tailwindClasses";

interface DayButtonProps{
    text: string;
    number: number;
    status: boolean;
}

export default function DayButton({ text, number, status }: DayButtonProps){
    return (
        <button className={`flex flex-col p-1 md:p-2 items-center
                ${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}
                ${componentText}
                ${componentBorder} rounded-xl
        `} >
            {/* Text */}
            <div className="text-lg md:text-xl">{text}</div>
            {/* Number */}
            <div className="text-xl md:text-2xl font-semibold">{number}</div>
            {/* Status */}
            <div>{status ? "Disponible" : "Ocupado"}</div>
        </button>
    )
}