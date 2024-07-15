import { ESkillpointsDificulty } from "../enums/skillpoints-dificulty";
import { LEVEL_TRESHHOLD_LATE, LEVEL_TRESHHOLD_MEDIUM, SKILLPOINTS_PER_LEVEL_DEFAULT, SKILLPOINTS_PER_LEVEL_DINAMYC_LATE, SKILLPOINTS_PER_LEVEL_DINAMYC_MEDIUM, SKILLPOINTS_PER_LEVEL_DINAMYC_START, SKILLPOINTS_PER_LEVEL_EASY, SKILLPOINTS_PER_LEVEL_HARD } from "./const";

export const getSkillPointsForLevels = (level: number, dificulty: ESkillpointsDificulty) => {
    switch (dificulty) {
        case ESkillpointsDificulty.Hard:
            return (level - 1) * SKILLPOINTS_PER_LEVEL_HARD + SKILLPOINTS_PER_LEVEL_DEFAULT
        case ESkillpointsDificulty.Easy:
            return (level - 1) * SKILLPOINTS_PER_LEVEL_EASY + SKILLPOINTS_PER_LEVEL_DEFAULT
        case ESkillpointsDificulty.Dynamic:
            const levelsWithStartSkillPoints = Math.min(level, LEVEL_TRESHHOLD_MEDIUM)
            const levelWithMediumSkilPoints = Math.min(level, LEVEL_TRESHHOLD_LATE) - levelsWithStartSkillPoints
            const levelWithLateSkillPoints = level - levelsWithStartSkillPoints - levelWithMediumSkilPoints
            return levelsWithStartSkillPoints * SKILLPOINTS_PER_LEVEL_DINAMYC_START + levelWithMediumSkilPoints * SKILLPOINTS_PER_LEVEL_DINAMYC_MEDIUM + levelWithLateSkillPoints * SKILLPOINTS_PER_LEVEL_DINAMYC_LATE
        default:
            return level * SKILLPOINTS_PER_LEVEL_DEFAULT
    }
}