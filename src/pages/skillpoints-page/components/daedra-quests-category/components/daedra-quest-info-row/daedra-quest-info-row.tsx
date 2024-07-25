import { FC } from "react";
import { IDaedraArtifactForRighteousManInfo, IDaedraesQuestsInfo } from "../../../../../../services/data/daedraes-quests";
import { Box, Checkbox, Typography } from "@mui/material";
import { useTypedSelector } from "../../../../../../hooks/use-typed-selector";
import { useTypedDispatch } from "../../../../../../hooks/use-typed-dispatch";
import { addDaedraQuestToCompleted, removeDaedraQuestFromCompleted } from "../../../../../../services/store/slices/other-skillpoints-slice";
import { SKILLPOINTS_PER_DAEDRA_ARTIFACT, SKILLPOINTS_PER_DAEDRA_QUEST } from "../../../../../../services/utils/const";

interface IDaedraQuestInfoRow {
    daedraQuest: IDaedraesQuestsInfo
    daedraArtifact?: IDaedraArtifactForRighteousManInfo
}

const DaedraQuestInfoRow: FC<IDaedraQuestInfoRow> = ({
    daedraQuest,
    daedraArtifact
}) => {
    const isCollected = useTypedSelector((state) => state.otherSkillPoints.completedDaedraQuests.find(element => element === daedraQuest.id))
    const dispatch = useTypedDispatch()
    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (!checked) {
            dispatch(removeDaedraQuestFromCompleted(daedraQuest.id))
        }
        else {
            dispatch(addDaedraQuestToCompleted(daedraQuest.id))
        }
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                border: '1px solid #000',
                padding: 2,
                paddingX: 4,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    width: 320,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography
                    variant="h6"
                >
                    {daedraQuest.daedraName}
                </Typography>
                <Typography
                    variant="h6"
                >
                    {daedraArtifact?.artifactName}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 4,
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: 80,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Checkbox 
                        checked={isCollected !== undefined}
                        onChange={handleChange}
                    />
                </Box>
                <Box
                    sx={{
                        width: 50,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography>
                        {SKILLPOINTS_PER_DAEDRA_QUEST}
                    </Typography>
                    {daedraArtifact &&
                        <Typography>
                            {SKILLPOINTS_PER_DAEDRA_ARTIFACT}
                        </Typography>
                    }
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: 250
                    }}
                >
                    <Typography>
                        {daedraQuest.questName}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default DaedraQuestInfoRow