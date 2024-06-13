export default function NavButton({ text }) {
  return (
    <>
      <button className=" py-1 px-2 h-10 w-28 min-h-4 min-w-4 hover:rounded                    
                    hover:bg-gray-400 hover:border-primary2 hover:border-2
                    hover:dark:bg-gray-700 hover:dark:border-secondary0">
        <div className="text-md font-semibold text-center text-primary2 dark:text-secondary0">
            {text}
        </div>
      </button>
    </>
  );
}
