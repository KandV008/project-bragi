'use client';

import { ProductColor } from "@/app/model/entities/Product";
import { useState } from "react";

interface ColorButtonProps{
    colors: ProductColor[],
    action: (number: number) => void
}

export default function ColorButton({ colors, action }: ColorButtonProps){
    const [imgIndex, setImgIndex] = useState(0);
    
    const getColorButtonClasses = (buttonName: number) => {
      const baseClasses = "size-8 md:size-6 lg:size-8 border-2";
      return buttonName === imgIndex
        ? `${baseClasses} border-rose-600`
        : `${baseClasses} border-emerald-900 dark:border-emerald-100`;
    };

    const onClick = (index: number) => {
        setImgIndex(index)
        action(index)
    }
  
    return (
        <div className="flex flex-row flex-wrap gap-1">
        {colors.map((color, index) => (
          <button
            key={color.color.name + "-" + index}
            className={getColorButtonClasses(index)}
            style={{ backgroundColor: color.color.hex }}
            title={color.color.name}
            onClick={() => onClick(index)}
          ></button>
        ))}
      </div>
    );
}