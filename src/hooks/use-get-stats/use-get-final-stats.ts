import { IBaseStats } from "../../services/types/main-stats"
import { BASE_STATS } from "../../services/utils/const"
import { useGetFinalColdRes } from "./use-get-final-cold-res"
import { useGetFinalDarkRes } from "./use-get-final-dark-res"
import { useGetFinalFireRes } from "./use-get-final-fire-res"
import { useGetFinalHp } from "./use-get-final-hp"
import { useGetFinalLightningRes } from "./use-get-final-lightning-res"
import { useGetFinalMana } from "./use-get-final-mana"
import { useGetFinalStamina } from "./use-get-final-stamina"

export const useGetFinalStats: () => IBaseStats = () => {
    const finalHp = useGetFinalHp()
    const finalMana = useGetFinalMana()
    const finalStamina = useGetFinalStamina()
    const finalFireRes = useGetFinalFireRes()
    const finalColdRes = useGetFinalColdRes()
    const finalLightningRes = useGetFinalLightningRes()
    const finalDarkRes = useGetFinalDarkRes()
    return {
        ...BASE_STATS,
        health: finalHp,
        mana: finalMana,
        stamina: finalStamina,
        fireRes: finalFireRes,
        coldRes: finalColdRes,
        lightningRes: finalLightningRes,
        darkRes: finalDarkRes
    }
}