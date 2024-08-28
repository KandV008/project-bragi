
interface MediumButtonProps {
  text: string;
  onClick?: () => void;
}

export default function MediumButton({ text, onClick }: MediumButtonProps) {
  return (
    <button
      className={`flex flex-row gap-2 cursor-pointer w-64  py-1 px-4 h-16 place-content-center lg:text-left md:text-center 
                  border-emerald-900 dark:border-emerald-100 border-2 rounded-2xl
                  text-emerald-100 dark:text-emerald-900
                  bg-emerald-900 dark:bg-emerald-100 
                  hover:bg-emerald-500 hover:dark:bg-emerald-500`}
      onClick={onClick}
    >
      <div className="text-2xl font-bold text-center self-center">
        {text}
      </div>
    </button>
  );
}
