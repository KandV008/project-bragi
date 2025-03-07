import { EarphoneLevelOfDiscretion } from "./EarphoneLevelOfDiscretion";
import { EarphoneLocation } from "./EarphoneLocation";

const BTE_NAME = "BTE"
const RIC_NAME = "RIC"
const ITC_NAME = "ITC"
const ITE_NAME = "ITE"
const CIC_NAME = "CIC"
const COFOSIS_NAME = "COFOSIS"

/**
 * Enum representing the possible shapes of an earphone.
 */
enum EarphoneShape {
    /**
     * Behind-the-ear (BTE) style.
     */
    BTE = BTE_NAME,
    /**
     * Receiver-in-canal (RIC) style.
     */
    RIC = RIC_NAME,
    /**
     * In-the-canal (ITC) style.
     */
    ITC = ITC_NAME,
    /**
     * In-the-ear (ITE) style.
     */
    ITE = ITE_NAME,
    /**
     * Completely-in-canal (CIC) style.
     */
    CIC = CIC_NAME,
    /**
     * COFOSIS style (Oído muerto).
     */
    COFOSIS = COFOSIS_NAME,
}

/**
 * List of available earphone shape names.
 */
const earphoneShapeList = [
    BTE_NAME,
    RIC_NAME, 
    ITC_NAME, 
    ITE_NAME, 
    CIC_NAME, 
    COFOSIS_NAME
]

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

export { EarphoneShape, EarphoneShapeDetails, earphoneShapeList };
