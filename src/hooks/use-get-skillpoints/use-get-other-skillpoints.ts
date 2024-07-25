import { daedraesQuestsInfoArray } from "../../services/data/daedraes-quests"
import { ESubClasses } from "../../services/enums/sub-classes"
import { SKILLPOINTS_FOR_BLACK_BOOK, SKILLPOINTS_FOR_OGMA_READ, SKILLPOINTS_PER_DAEDRA_ARTIFACT, SKILLPOINTS_PER_DAEDRA_QUEST } from "../../services/utils/const"
import { useTypedSelector } from "../use-typed-selector"

export const useGetOtherSkillpoints = () => {
    const subClass = useTypedSelector((state) => state.mainStat.subClass)
    const otherSkillPointsState = useTypedSelector(state => state.otherSkillPoints)
    if (subClass !== ESubClasses.RighteousMan) {
        const skillPointsForOgma = otherSkillPointsState.isOgmaReaded ? SKILLPOINTS_FOR_OGMA_READ : 0
        return (
            otherSkillPointsState.completedDaedraQuests.length * SKILLPOINTS_PER_DAEDRA_QUEST 
            + skillPointsForOgma 
            + otherSkillPointsState.blackBooks.length * SKILLPOINTS_FOR_BLACK_BOOK
        )
    }
    let completedQuests = 0
    let collectedArtifacts = 0
    for (let i = 0; i < otherSkillPointsState.completedDaedraQuests.length; i++) {
        const currentId = otherSkillPointsState.completedDaedraQuests[i]
        const currentQuest = daedraesQuestsInfoArray.find(element => element.id === currentId)
        if (currentQuest && currentQuest.availableForRighteousMan) {
            completedQuests += 1
            if (currentQuest.isArtifactForRighteousMan) collectedArtifacts += 1
        }
    }
    return (
        completedQuests * SKILLPOINTS_PER_DAEDRA_QUEST 
        + collectedArtifacts * SKILLPOINTS_PER_DAEDRA_ARTIFACT
        + otherSkillPointsState.blackBooks.length * SKILLPOINTS_FOR_BLACK_BOOK
    )
}