export interface ProductEntity {
    id: string;
    name: string;
    category: Category;
    price: number;
    description: string;
    colors: ProductColor[];
    include: string[];
    adaptation_range: AdaptationRange;
    dust_water_resistance: number;
    brand: Brand;
    location: EarLocation;
    level_of_discretion: LevelOfDiscretion;
    degree_of_loss: DegreeOfLoss;
    uses: Uses[];
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
        adaptation_range: AdaptationRange[product.adaptation_range as keyof typeof AdaptationRange],
        dust_water_resistance: product.dust_water_resistance,
        brand: Brand[product.brand as keyof typeof Brand],
        location: EarLocation[product.location as keyof typeof EarLocation],
        level_of_discretion: LevelOfDiscretion[product.level_of_discretion as keyof typeof LevelOfDiscretion],
        degree_of_loss: DegreeOfLoss[product.degree_of_loss as keyof typeof DegreeOfLoss],
        uses: product.uses.map((use: string) => Uses[use as keyof typeof Uses]),
    };
}

interface ProductColor {
    color: Color;
    images: string[];
}

enum Color {
    P1 = "Beige Sand",
    P3 = "Sandalwood",
    P4 = "Brown",
    P5 = "Champagne",
    P6 = "Silver gray",
    P7 = "Graphite",
    P8 = "Velvety black",
    Q2 = "Electric green",
    Q3 = "Caribbean Pirate",
    T3 = "Precious Rose",
    H0 = "Beige",
}

enum Category {
    EARPHONE = "EARPHONE",
    ACCESSORY = "ACCESSORY",
}

enum AdaptationRange {
    MILD = "MILD",
    MODERATE = "MODERATE",
    SEVERE = "SEVERE",
    PROFOUND = "PROFOUND",
}

enum Brand {
    PHONAK = "PHONAK",
}

enum EarLocation {
    RETROAURICULAR = "RETROAURICULAR",
    INTRACANAL = "INTRACANAL",
    CIC = "CIC",
    RIC = "RIC",
}

enum LevelOfDiscretion {
    VISIBLE = "VISIBLE",
    DISCREET = "DISCREET",
    IMPERCEPTIBLE = "IMPERCEPTIBLE",
}

enum DegreeOfLoss {
    MILD = "MILD",
    MODERATE = "MODERATE",
    SEVERE = "SEVERE",
    PROFOUND = "PROFOUND",
}

enum Uses {
    CHAT = "CHAT",
    IN_GROUP = "IN_GROUP",
    LEISURE = "LEISURE",
    TELEPHONE = "TELEPHONE",
    TV = "TV",
}

