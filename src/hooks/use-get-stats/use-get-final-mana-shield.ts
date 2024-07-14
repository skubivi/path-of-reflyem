import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"
import { useGetFinalMana } from "./use-get-final-mana"

export const useGetFinalManaShield = () => {
    const mainManaShield = useTypedSelector((state) => state.mainStat.manaShield)
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let maxManaShield = 20
    const addedMana = useGetFinalMana() - 100
    if (addedMana > 0) {
        maxManaShield += Math.floor(addedMana / 30)
    }

    let finalManaShield = mainManaShield 
        + getStatsFromStandingStone(standingStone).manaShield 
        + getStatsFromAedra(aedra1).manaShield 
        + getStatsFromAedra(aedra2).manaShield
        + getStatsFromDaedra(daedra1).manaShield
        + getStatsFromDaedra(daedra2).manaShield

    return Math.min(finalManaShield, maxManaShield, 75)
}