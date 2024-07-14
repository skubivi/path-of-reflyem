import { EStandingStones } from "../../services/enums/standing-stones"
import { getBaseStats } from "../../services/utils/base-stats-for-race"
import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalColdRes = () => {
    const mainColdRes = useTypedSelector((state) => state.mainStat.coldRes)
    const raceColdRes = getBaseStats(useTypedSelector((state) => state.mainStat.race)).coldRes
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalColdRes = mainColdRes 
        + getStatsFromStandingStone(standingStone).coldRes 
        + getStatsFromAedra(aedra1).coldRes 
        + getStatsFromAedra(aedra2).coldRes
        + getStatsFromDaedra(daedra1).coldRes
        + getStatsFromDaedra(daedra2).coldRes

    if (standingStone === EStandingStones.Lady) finalColdRes = ((finalColdRes - raceColdRes) * 0.15) + finalColdRes

    return finalColdRes
}