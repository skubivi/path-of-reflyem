import { EStandingStones } from "../../services/enums/standing-stones"
import { getBaseStats } from "../../services/utils/base-stats-for-race"
import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalHp = () => {
    const mainHp = useTypedSelector((state) => state.mainStat.health)
    const raceHp = getBaseStats(useTypedSelector((state) => state.mainStat.race)).health
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalHp = mainHp 
        + getStatsFromStandingStone(standingStone).health 
        + getStatsFromAedra(aedra1).health 
        + getStatsFromAedra(aedra2).health
        + getStatsFromDaedra(daedra1).health
        + getStatsFromDaedra(daedra2).health

    if (standingStone === EStandingStones.Lady) finalHp = ((finalHp - raceHp) * 0.15) + finalHp

    return finalHp
}