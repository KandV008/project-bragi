import Link from "next/link";
import { hoverComponentEmptyBackground, hoverComponentBorder, componentText, hoverComponentText } from "../../tailwindClasses";

interface NavButtonProps {
  text: string;
  href: string;
}

export default function NavButton({ text, href }: NavButtonProps) {
  return (
    <Link href={href}>
      <button
        className={`py-1 px-2 h-10 w-28 min-h-4 min-w-4 hover:rounded                    
                    ${hoverComponentEmptyBackground}
                    ${hoverComponentBorder}
                    ${componentText} ${hoverComponentText}`}
      >
        <div className="text-md font-semibold text-center">{text}</div>
      </button>
    </Link>
  );
}
