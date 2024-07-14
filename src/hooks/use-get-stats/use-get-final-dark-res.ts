import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalDarkRes = () => {
    const mainDarkRes = useTypedSelector((state) => state.mainStat.darkRes)
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalDarkRes = mainDarkRes 
        + getStatsFromStandingStone(standingStone).darkRes 
        + getStatsFromAedra(aedra1).darkRes 
        + getStatsFromAedra(aedra2).darkRes
        + getStatsFromDaedra(daedra1).darkRes
        + getStatsFromDaedra(daedra2).darkRes

    return finalDarkRes
}