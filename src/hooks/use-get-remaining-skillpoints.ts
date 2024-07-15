import { EStandingStones } from "../services/enums/standing-stones"
import { getSkillPointsForLevels } from "../services/utils/get-skillpoints-for-levels"
import { useTypedSelector } from "./use-typed-selector"

export const useGetRemainingSkillpoints = () => {
    const level = useTypedSelector((state) => state.mainStat.level)
    const skillpointsDificulty = useTypedSelector((state) => state.configuration.skillpointsDificulty)
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    let skillPointsForLevel = getSkillPointsForLevels(level, skillpointsDificulty)
    if (standingStone === EStandingStones.Apprentice) skillPointsForLevel += level - 1
    return skillPointsForLevel
}