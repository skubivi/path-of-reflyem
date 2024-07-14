import { EStandingStones } from "../../services/enums/standing-stones"
import { getBaseStats } from "../../services/utils/base-stats-for-race"
import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalLightningRes = () => {
    const mainLightningRes = useTypedSelector((state) => state.mainStat.lightningRes)
    const raceLightningRes = getBaseStats(useTypedSelector((state) => state.mainStat.race)).lightningRes
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

    if (standingStone === EStandingStones.Lady) finalLightningRes = ((finalLightningRes - raceLightningRes) * 0.15) + finalLightningRes

    return finalLightningRes
}