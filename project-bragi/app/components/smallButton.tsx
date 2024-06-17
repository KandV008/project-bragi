export default function SmallButton({ text }) {
    return (
      <>
        <button className=" py-1 px-2 2xl:h-12  
                        min-w-8 lg:w-28 xl:w-48 rounded    
                      bg-white dark:bg-stone-700
                      hover:bg-gray-400 hover:border-primary2 hover:border-2
                      hover:dark:bg-gray-700 hover:dark:border-secondary0">
          <div className="text-md font-semibold text-center text-primary2 dark:text-secondary0">
              {text}
          </div>
        </button>
      </>
    );
  }