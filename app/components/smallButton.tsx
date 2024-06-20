import Link from 'next/link';

export default function SmallButton({ text, href }) {
    return (
      <Link href={href}>
        <button className=" py-1 px-2 sm:h-10 lg:h-12  
                        min-w-8 sm:w-40 lg:w-48 rounded    
                    bg-white dark:bg-stone-700
                      hover:bg-gray-400 hover:border-primary2 hover:border-2
                      hover:dark:bg-gray-700 hover:dark:border-secondary0">
          <div className="text-md font-semibold text-center text-primary2 dark:text-secondary0">
              {text}
          </div>
        </button>
      </Link>
    );
  }