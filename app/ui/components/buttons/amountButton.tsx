"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/navigation";
import {
  negativeComponentBackground,
  componentBorder,
  negativeComponentText,
  negativeHoverComponentBackground,
  hoverComponentBorder,
} from "@/lib/tailwindClasses";

interface AmountButtonProps {
  symbol: IconDefinition;
  action: (formData: FormData) => void;
  productId: string;
  color: string;
  earSide: string;
  guarantee: boolean;
}

export default function AmountButton({
  symbol,
  action,
  productId,
  color,
  earSide,
  guarantee,
}: AmountButtonProps) {
  const router = useRouter();

  const formAction = (formData: FormData) => {
    action(formData);
    router.refresh();
  };

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={productId} />
      <input type="hidden" name="color" value={color} />
      <input type="hidden" name="earSide" value={earSide} />
      <input type="hidden" name="guarantee" value={guarantee.toString()} />
      <button
        type="submit"
        className={`flex flex-col p-2 rounded-xl 
          ${negativeComponentBackground} ${negativeHoverComponentBackground} 
          ${componentBorder} ${hoverComponentBorder} 
          ${negativeComponentText}
        `}
      >
        <div className=" self-center">
          <FontAwesomeIcon icon={symbol} className="mx-1" />
        </div>
      </button>
    </form>
  );
}
