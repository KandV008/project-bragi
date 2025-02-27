import { EarphoneLevelOfDiscretion } from "./EarphoneLevelOfDiscretion";
import { EarphoneLocation } from "./EarphoneLocation";

/**
 * Enum representing the possible shapes of an earphone.
 */
enum EarphoneShape {
    /**
     * Behind-the-ear (BTE) style.
     */
    BTE = "BTE",
    /**
     * Receiver-in-canal (RIC) style.
     */
    RIC = "RIC",
    /**
     * In-the-canal (ITC) style.
     */
    ITC = "ITC",
    /**
     * In-the-ear (ITE) style.
     */
    ITE = "ITE",
    /**
     * Completely-in-canal (CIC) style.
     */
    CIC = "CIC",
    /**
     * COFOSIS style (Oído muerto).
     */
    COFOSIS = "COFOSIS",
}

/**
 * Details associated with each earphone shape, including its location and level of discretion.
 */
const EarphoneShapeDetails: Record<EarphoneShape, { location: EarphoneLocation; level_of_discretion: EarphoneLevelOfDiscretion }> = {
    [EarphoneShape.BTE]: {
        location: "RETROAURICULAR",
        level_of_discretion: "VISIBLE",
    },
    [EarphoneShape.RIC]: {
        location: "RETROAURICULAR",
        level_of_discretion: "DISCREET",
    },
    [EarphoneShape.ITC]: {
        location: "INTRACANAL",
        level_of_discretion: "IMPERCEPTIBLE",
    },
    [EarphoneShape.ITE]: {
        location: "INTRACANAL",
        level_of_discretion: "IMPERCEPTIBLE",
    },
    [EarphoneShape.CIC]: {
        location: "INTRACANAL",
        level_of_discretion: "IMPERCEPTIBLE",
    },
    [EarphoneShape.COFOSIS]: {
        location: "RETROAURICULAR",
        level_of_discretion: "VISIBLE",
    },
};

export { EarphoneShape, EarphoneShapeDetails };
