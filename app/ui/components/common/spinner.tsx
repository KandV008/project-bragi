import { componentBorder } from "@/lib/tailwindClasses";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`"inline-block h-8 w-8 rounded-full 
                     animate-spin align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]
                     ${componentBorder} border-4 border-r-transparent "`}
        role="status"
      ></div>
    </div>
  );
}
