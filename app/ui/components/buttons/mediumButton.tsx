import { componentBorder, hoverComponentBorder, negativeComponentBackground, negativeComponentText, negativeHoverComponentBackground } from "@/lib/tailwindClasses";

interface MediumButtonProps {
  text: string;
  onClick?: () => void;
}

export default function MediumButton({ text, onClick }: MediumButtonProps) {
  return (
    <button
      className={`flex flex-row gap-2 cursor-pointer w-64  py-1 px-4 h-16 place-content-center lg:text-left md:text-center 
                  ${componentBorder} ${hoverComponentBorder} rounded-2xl
                  ${negativeComponentText}
                  ${negativeComponentBackground} ${negativeHoverComponentBackground}`}
      onClick={onClick}
    >
      <div className="text-2xl font-bold text-center self-center">
        {text}
      </div>
    </button>
  );
}
