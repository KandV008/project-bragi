"use client";

import { accessoriesName } from "@/app/config/JSONnames";
import { useEffect, useState } from "react";
import CheckBoxInput, {
  CheckBoxInputSkeleton,
} from "@/app/ui/components/inputs/checkBoxInput/checkBoxInput";
import { getAccessoriesAvailableRoute } from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";

/**
 * Props for the CheckBoxInput component.
 */
interface AccessoriesInputProps {
  /** The pre-selected values (optional) */
  values?: string[];
}

/**
 * A checkbox input component that allows multiple selections.
 *
 * @param {AccessoriesInputProps} props - The properties for the checkbox component.
 * @returns {JSX.Element} The rendered checkbox component.
 */
export default function AccessoriesInput({
  values,
}: AccessoriesInputProps): JSX.Element {
  const [accessoriesAvailableLabel, setAccessoriesAvailableLabel] = useState<string[]>([]);
  const [accessoriesAvailableValue, setAccessoriesAvailableValue] = useState<string[]>([]);

  useEffect(() => {
    fetch(getAccessoriesAvailableRoute)
        .then(response => response.json())
        .then(data => {
            const currentLabels = data.map(((x: ProductEntity) => `${x.brand} - ${x.name}`))
            setAccessoriesAvailableLabel(currentLabels)
            const currentValues = data.map(((x: ProductEntity) => x.id))
            setAccessoriesAvailableValue(currentValues)
        })
        .catch(error => {throw Error(error)})
  }, [])

  return (
    <div className="flex flex-col w-full">
      <CheckBoxInput
        name={accessoriesName}
        label={"Accesorios del audífono"}
        optionLabels={accessoriesAvailableLabel}
        optionValues={accessoriesAvailableValue}
        values={values}
      />
    </div>
  );
}

/**
 * A skeleton placeholder for the AccessoriesInput component.
 *
 * @returns {JSX.Element} A skeleton structure to simulate loading state.
 */
export function AccessoriesInputSkeleton(): JSX.Element {
  return (
    <section className="flex flex-col w-full gap-1">
      <CheckBoxInputSkeleton />
    </section>
  );
}
