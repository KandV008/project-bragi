interface NavButtonProps {
  text: string;
  onClick?: () => void;
}

export default function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <>
      <button
        className=" py-1 px-2 h-10 w-28 min-h-4 min-w-4 hover:rounded                    
                    hover:bg-gray-300 hover:border-emerald-900 hover:border-2
                    hover:dark:bg-gray-700 hover:dark:border-emerald-100"
        onClick={onClick}
      >
        <div className="text-md font-semibold text-center text-emerald-900 dark:text-emerald-100">
          {text}
        </div>
      </button>
    </>
  );
}
