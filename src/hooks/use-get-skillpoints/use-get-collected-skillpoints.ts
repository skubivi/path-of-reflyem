import { EStandingStones } from "../../services/enums/standing-stones"
import { getSkillPointsForLevels } from "../../services/utils/get-skillpoints-for-levels"
import { useTypedSelector } from "../use-typed-selector"

export const useGetCollectedSkillpoints = () => {
    const level = useTypedSelector((state) => state.mainStat.level)
    const skillpointsDificulty = useTypedSelector((state) => state.configuration.skillpointsDificulty)
    let skillPointsForLevel = getSkillPointsForLevels(level, skillpointsDificulty)

    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    if (standingStone === EStandingStones.Apprentice) skillPointsForLevel += level - 1

    const skillPointsForBosses = useTypedSelector((state) => 
        state.skillPointsForBosses.skillPoints 
        + state.skillPointsForBosses.skillPointsForBandits
        + state.skillPointsForBosses.skillPointsForExiles
        + state.skillPointsForBosses.skillPointsForMages
        + state.skillPointsForBosses.skillPointsForFalmers
        + state.skillPointsForBosses.skillPointsForDvemers
    )

    const result = skillPointsForLevel + skillPointsForBosses
    return result
}