import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalLightningRes = () => {
    const mainLightningRes = useTypedSelector((state) => state.mainStat.lightningRes)
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalLightningRes = mainLightningRes 
        + getStatsFromStandingStone(standingStone).lightningRes 
        + getStatsFromAedra(aedra1).lightningRes 
        + getStatsFromAedra(aedra2).lightningRes
        + getStatsFromDaedra(daedra1).lightningRes
        + getStatsFromDaedra(daedra2).lightningRes

    return finalLightningRes
}