import { EarphoneColor } from "./enums/earphoneAttributes/EarphoneColor";
import { EarphoneDegreeOfLoss } from "./enums/earphoneAttributes/EarphoneDegreeOfLoss";
import { EarphoneShape } from "./enums/earphoneAttributes/EarphoneShape";
import { UseDefinition, Uses } from "./enums/earphoneAttributes/Uses";
import { MAP_DOCUMENT_TO_EARPHONE_ATTRIBUTES_ERROR_MESSAGE } from "./ProductConfiguration";

/**
 * Interface representing the attributes of an earphone.
 */
export interface EarphoneAttributes {
    /**
     * Available colors for the earphone.
     */
    colors: EarphoneColor[];

    /**
     * Indicates whether the earphone has water and dust resistance.
     */
    waterDustResistance: boolean;

    /**
     * The shape of the earphone.
     */
    earphoneShape: EarphoneShape;

    /**
     * The degree of hearing loss for which the earphone is designed.
     */
    degreeOfLoss: EarphoneDegreeOfLoss;

    /**
     * The intended uses or applications of the earphone.
     */
    uses: UseDefinition[];

    /**
     * List of ids of the accessories associated
     */
    accessories: string[]
}

/**
 * Maps a raw document object to the structured EarphoneAttributes interface.
 *
 * @param attributes - The raw document object containing earphone data.
 * @returns The mapped EarphoneAttributes object.
 * @throws Error if the attributes object is invalid or mapping fails.
 */
export function mapDocumentToEarphoneAttributes(attributes: any): EarphoneAttributes {
    try {
        if (!attributes || !attributes.colors || !attributes.degree_of_loss || !attributes.uses) {
            throw new Error(MAP_DOCUMENT_TO_EARPHONE_ATTRIBUTES_ERROR_MESSAGE);
        }

        return {
            colors: attributes.colors.map((color: { name: string; hex: string }) => ({
                name: color.name,
                hex: color.hex,
            })),
            waterDustResistance: Boolean(attributes.dust_water_resistance),
            earphoneShape: EarphoneShape[attributes.earphone_shape as keyof typeof EarphoneShape],
            degreeOfLoss: EarphoneDegreeOfLoss[attributes.degree_of_loss as keyof typeof EarphoneDegreeOfLoss],
            uses: attributes.uses.map((use: string) => Uses[use as keyof typeof Uses] as UseDefinition),
            accessories: Array.isArray(attributes.accessories) ? attributes.accessories : []
        };
    } catch (error) {
        throw new Error(MAP_DOCUMENT_TO_EARPHONE_ATTRIBUTES_ERROR_MESSAGE);
    }
}

