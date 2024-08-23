interface SectionHeaderProps {
    text: string
}

export default function SectionHeader({ text }: SectionHeaderProps) {
  return (
    <h1
      className="text-emerald-900 dark:text-emerald-100
            text-xl md:text-2xl lg:text-3xl font-bold w-fit"
    >
      {text}
      <div className="w-full border-t mb-3 border-emerald-900 dark:border-emerald-100"></div>
    </h1>
  );
}
