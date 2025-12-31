"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  colorHexName,
  colorTextName,
  earSideName,
  priceName,
  productIdName,
} from "@/app/config/JSONnames";
import {
  negativeComponentBackground,
  negativeHoverComponentBackground,
  componentBorder,
  hoverComponentBorder,
  negativeComponentText,
  disableComponentBackground,
  disableComponentBorder,
} from "@/app/ui/tailwindClasses";

/**
 * Props for the AmountButton component.
 */
interface AmountButtonProps {
  /** FontAwesome icon to be displayed in the button */
  symbol: IconDefinition;
  /** Action to be executed when the form is submitted */
  action: (formData: FormData) => void;
  /** Unique identifier of the product */
  productId: string;
  /** Text representation of the product color */
  colorText: string;
  /** Hexadecimal representation of the product color */
  colorHex: string;
  /** Ear side specification (e.g., left, right, both) */
  earSide: string;
  /** Price specification */
  price: number;
  /** Update current quanity action*/
  updateQuantity: () => void;
}

/**
 * A button component that submits a form with hidden input values
 * related to a product and triggers an action.
 *
 * @param props - The properties for the AmountButton component.
 * @returns JSX element representing the button.
 */
export default function AmountButton({
  symbol,
  action,
  productId,
  colorText,
  colorHex,
  earSide,
  price,
  updateQuantity,
}: AmountButtonProps) {
  const isDisable = price === 0;
  const style = isDisable
    ? `${disableComponentBackground} ${disableComponentBorder}`
    : `${negativeComponentBackground} ${negativeHoverComponentBackground} ${componentBorder} ${hoverComponentBorder}`;

  /**
   * Handles form submission, executes the provided action,
   * and refreshes the page.
   *
   * @param formData - The form data to be submitted.
   */
  const formAction = async (formData: FormData) => {
    await action(formData);
    updateQuantity();
  };

  return (
    <form action={formAction}>
      <input type="hidden" name={productIdName} value={productId} />
      <input type="hidden" name={colorTextName} value={colorText} />
      <input type="hidden" name={colorHexName} value={colorHex} />
      <input type="hidden" name={earSideName} value={earSide} />
      <input type="hidden" name={priceName} value={price} />
      <button
        type="submit"
        className={`flex flex-col p-2 rounded-xl 
          ${style} 
           
          ${negativeComponentText}
        `}
        disabled={isDisable}
      >
        <div className="self-center">
          <FontAwesomeIcon icon={symbol} className="mx-1" />
        </div>
      </button>
    </form>
  );
}
