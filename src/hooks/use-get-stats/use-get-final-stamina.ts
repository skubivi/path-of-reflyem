import { EStandingStones } from "../../services/enums/standing-stones"
import { getBaseStats } from "../../services/utils/base-stats-for-race"
import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalStamina = () => {
    const mainStamina = useTypedSelector((state) => state.mainStat.stamina)
    const raceStamina = getBaseStats(useTypedSelector((state) => state.mainStat.race)).stamina
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalStamina = mainStamina 
        + getStatsFromStandingStone(standingStone).stamina 
        + getStatsFromAedra(aedra1).stamina 
        + getStatsFromAedra(aedra2).stamina
        + getStatsFromDaedra(daedra1).stamina
        + getStatsFromDaedra(daedra2).stamina

    if (standingStone === EStandingStones.Lady) finalStamina = ((finalStamina - raceStamina) * 0.15) + finalStamina

    return finalStamina
}