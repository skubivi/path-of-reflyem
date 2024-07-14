import { EStandingStones } from "../../services/enums/standing-stones"
import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalHp = () => {
    const mainHp = useTypedSelector((state) => state.mainStat.health)
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

    if (standingStone === EStandingStones.Lady) finalHp = Math.round(finalHp * 1.15)

    return finalHp
}