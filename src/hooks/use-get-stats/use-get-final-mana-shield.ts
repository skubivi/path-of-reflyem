import { MANA_PER_MAX_MANA_SHIELD, MAX_MANA_SHIELD, STARTING_MAX_MANA_SHIELD } from "../../services/utils/const"
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

    let maxManaShield = STARTING_MAX_MANA_SHIELD
    const addedMana = useGetFinalMana() - 100
    if (addedMana > 0) {
        maxManaShield += Math.floor(addedMana / MANA_PER_MAX_MANA_SHIELD)
    }

    let finalManaShield = mainManaShield 
        + getStatsFromStandingStone(standingStone).manaShield 
        + getStatsFromAedra(aedra1).manaShield 
        + getStatsFromAedra(aedra2).manaShield
        + getStatsFromDaedra(daedra1).manaShield
        + getStatsFromDaedra(daedra2).manaShield

    return Math.min(finalManaShield, maxManaShield, MAX_MANA_SHIELD)
}