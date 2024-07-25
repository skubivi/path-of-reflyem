import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionSummary, Typography, AccordionDetails, Box } from "@mui/material"
import { FC } from "react"
import DaedraQuestInfoRow from "./components/daedra-quest-info-row/daedra-quest-info-row"
import { daedraArtifactForRighteousManInfoArray, daedraesQuestsInfoArray, IDaedraArtifactForRighteousManInfo } from "../../../../services/data/daedraes-quests"
import { useTypedSelector } from "../../../../hooks/use-typed-selector"
import { ESubClasses } from "../../../../services/enums/sub-classes"
import DaedraQuestInfoHeader from "./components/daedra-quest-info-header/daedra-quest-info-header"

const DaedraQuestCategory: FC = () => {
    const isRighteousMan = useTypedSelector((state) => state.mainStat.subClass === ESubClasses.RighteousMan)
    const filteredArray = daedraesQuestsInfoArray.filter(element => {
        if (!isRighteousMan) return element
        return element.availableForRighteousMan
    })
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                <Typography>
                    Квесты Даэдра
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        paddingX: 2
                    }}
                >
                    <DaedraQuestInfoHeader />
                    {
                        filteredArray.map(element => {
                            let daedraArtifact: undefined | IDaedraArtifactForRighteousManInfo = undefined
                            if (element.isArtifactForRighteousMan && isRighteousMan) {
                                daedraArtifact = daedraArtifactForRighteousManInfoArray.find(artifact => artifact.idOfDaedraQuest === element.id)
                            }
                            return <DaedraQuestInfoRow daedraQuest={element} daedraArtifact={daedraArtifact} key={element.id}/>
                        })
                    }
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default DaedraQuestCategory