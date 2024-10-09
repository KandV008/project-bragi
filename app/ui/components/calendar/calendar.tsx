import DayButton from "./dayButton";
import ArticleHeader from "../tags/articleHeader";
import HourButton from "./hourButton";

export default function Calendar() {
  return (
    <section className="flex flex-col items-center gap-5">
      {/* Day Selection */}
      <ArticleHeader text={"Seleccione el día"} />
      <article className="flex flex-row gap-5 overflow-x-auto max-w-full">
        <DayButton text={"Martes"} number={24} status={true} />
        <DayButton text={"Miércoles"} number={25} status={true} />
        <DayButton text={"Jueves"} number={26} status={false} />
        <DayButton text={"Viernes"} number={27} status={true} />
        <DayButton text={"Sábado"} number={28} status={false} />
      </article>
      {/* Hour Selection */}
      <ArticleHeader text={"Seleccione la hora"} />
      <article className="flex flex-row gap-5 overflow-x-auto max-w-full">
        <HourButton text={"12:30"} status={false} />
        <HourButton text={"13:30"} status={true} />
        <HourButton text={"17:30"} status={false} />
        <HourButton text={"18:30"} status={true} />
        <HourButton text={"19:30"} status={false} />
      </article>
    </section>
  );
}
