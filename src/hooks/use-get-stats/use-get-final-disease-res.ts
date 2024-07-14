import { getStatsFromAedra } from "../../services/utils/get-stats-from-aedra"
import { getStatsFromDaedra } from "../../services/utils/get-stats-from-daedra"
import { getStatsFromStandingStone } from "../../services/utils/get-stats-from-standing-stone"
import { useTypedSelector } from "../use-typed-selector"

export const useGetFinalDiseaseRes = () => {
    const mainDiseaseRes = useTypedSelector((state) => state.mainStat.diseaseRes)
    const standingStone = useTypedSelector((state) => state.mainStat.standingStone)
    const aedra1 = useTypedSelector((state) => state.mainStat.aedra1)
    const aedra2 = useTypedSelector((state) => state.mainStat.aedra2)
    const daedra1 = useTypedSelector((state) => state.mainStat.daedra1)
    const daedra2 = useTypedSelector((state) => state.mainStat.daedra2)

    let finalDiseaseRes = mainDiseaseRes 
        + getStatsFromStandingStone(standingStone).diseaseRes 
        + getStatsFromAedra(aedra1).diseaseRes 
        + getStatsFromAedra(aedra2).diseaseRes
        + getStatsFromDaedra(daedra1).diseaseRes
        + getStatsFromDaedra(daedra2).diseaseRes

    return finalDiseaseRes
}