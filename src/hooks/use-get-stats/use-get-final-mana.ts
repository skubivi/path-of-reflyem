import { EStandingStones } from "../../services/enums/standing-stones"
import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalMana = () => {
    const mainMana = useTypedSelector((state) => state.mainStat.mana)
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalMana = mainMana 
        + getStatsFromStandingStone(standingStone).mana 
        + getStatsFromAedra(aedra1).mana 
        + getStatsFromAedra(aedra2).mana
        + getStatsFromDaedra(daedra1).mana
        + getStatsFromDaedra(daedra2).mana

    if (standingStone === EStandingStones.Lady) finalMana = Math.round(finalMana * 1.15)

    return finalMana
}