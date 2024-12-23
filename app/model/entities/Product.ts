import { AdaptationRange } from "./enums/AdaptionRange";
import { Brand } from "./enums/Brand";
import { Category } from "./enums/Category";
import { Color, ColorDefinition } from "./enums/Color";
import { DegreeOfLoss } from "./enums/DegreeOfLoss";
import { EarLocation } from "./enums/EarLocation";
import { LevelOfDiscretion } from "./enums/LevelOfDiscretion";
import { UseDefinition, Uses } from "./enums/Uses";

export interface ProductEntity {
    id: string;
    name: string;
    category: Category;
    price: number;
    description: string;
    colors: ProductColor[];
    include: string[];
    adaptationRange: AdaptationRange;
    waterDustResistance: boolean;
    brand: Brand;
    location: EarLocation;
    levelOfDiscretion: LevelOfDiscretion;
    degreeOfLoss: DegreeOfLoss;
    uses: UseDefinition[];
}

export function mapDocumentToProduct(product: any): ProductEntity {
    return {
        id: product._id.toString(),
        name: product.name,
        category: Category[product.category as keyof typeof Category],
        price: product.price,
        description: product.description,
        colors: product.colors.map((color: any) => ({
            color: Color[color.color as keyof typeof Color],
            images: color.images,
        })),
        include: product.include,
        adaptationRange: AdaptationRange[product.adaptation_range as keyof typeof AdaptationRange],
        waterDustResistance: product.dust_water_resistance,
        brand: Brand[product.brand as keyof typeof Brand],
        location: EarLocation[product.location as keyof typeof EarLocation],
        levelOfDiscretion: LevelOfDiscretion[product.level_of_discretion as keyof typeof LevelOfDiscretion],
        degreeOfLoss: DegreeOfLoss[product.degree_of_loss as keyof typeof DegreeOfLoss],
        uses: product.uses.map((use: string) => Uses[use as keyof typeof Uses] as UseDefinition),
    };
}

export interface ProductColor {
    color: ColorDefinition;
    images: string[];
}
