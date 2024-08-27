export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="inline-block h-8 w-8 rounded-full 
                     animate-spin align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]
                     border-emerald-900 dark:border-emerald-100 border-4 border-r-transparent "
        role="status"
      ></div>
    </div>
  );
}
