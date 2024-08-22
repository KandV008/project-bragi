import { ProductEntity } from "../Product"

const TRUE_VALUE = "Sí"
const TRUE_NAME = "true"
const FALSE_VALUE = "No"
const FALSE_NAME = "false"

export const waterDustResistanceList = {
    TRUE_NAME, FALSE_NAME
}

export function valueOfWaterDustResistance(value: string){
    if (value === TRUE_VALUE){
        return TRUE_NAME
    }

    if (value === FALSE_VALUE){
        return FALSE_NAME
    }

    throw Error("Value not valid")
}

export function checkWaterAndDustResistanceType(products: ProductEntity[]) {
    const counts = {
      YES: { quantity: 0, type: "Sí" },
      NO: { quantity: 0, type: "No" },
    };
  
    products.forEach((product) => {
      if (product.waterDustResistance) counts.YES.quantity += 1;
      else counts.NO.quantity += 1;
    });
  
    return counts;
  }
