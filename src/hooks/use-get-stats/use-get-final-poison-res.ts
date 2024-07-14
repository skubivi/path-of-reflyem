import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalPoisonRes = () => {
    const mainPoisonRes = useTypedSelector((state) => state.mainStat.poisonRes)
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalPoisonRes = mainPoisonRes 
        + getStatsFromStandingStone(standingStone).poisonRes 
        + getStatsFromAedra(aedra1).poisonRes 
        + getStatsFromAedra(aedra2).poisonRes
        + getStatsFromDaedra(daedra1).poisonRes
        + getStatsFromDaedra(daedra2).poisonRes

    return finalPoisonRes
}