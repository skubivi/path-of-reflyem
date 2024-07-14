import { EStandingStones } from "../../services/enums/standing-stones"
import { getBaseStats } from "../../services/utils/base-stats-for-race"
import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalFireRes = () => {
    const mainFireRes = useTypedSelector((state) => state.mainStat.fireRes)
    const raceFireRes = getBaseStats(useTypedSelector((state) => state.mainStat.race)).fireRes
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalFireRes = mainFireRes 
        + getStatsFromStandingStone(standingStone).fireRes 
        + getStatsFromAedra(aedra1).fireRes 
        + getStatsFromAedra(aedra2).fireRes
        + getStatsFromDaedra(daedra1).fireRes
        + getStatsFromDaedra(daedra2).fireRes

    if (standingStone === EStandingStones.Lady) finalFireRes = ((finalFireRes - raceFireRes) * 0.15) + finalFireRes

    return finalFireRes
}