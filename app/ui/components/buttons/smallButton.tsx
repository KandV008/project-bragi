import Link from "next/link";

interface SmallButtonProps {
  text: string;
  href: string;
}

export default function SmallButton({ text, href }: SmallButtonProps) {
  return (
    <Link href={href}>
      <button
        className=" py-1 px-2 sm:h-10 lg:h-12  
                        min-w-8 sm:w-40 lg:w-48 rounded    
                    bg-white dark:bg-emerald-800
                      hover:bg-gray-300 border-emerald-900 border-2
                      hover:dark:bg-gray-700 dark:border-emerald-100"
      >
        <div className="text-md font-semibold text-center text-emerald-900 dark:text-emerald-100">
          {text}
        </div>
      </button>
    </Link>
  );
}
