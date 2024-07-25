import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { FC } from "react";
import { IBossInfo, IHeadsInfo } from "../../../../services/data/bosses";
import HeadsInfoRow from "./components/heads-info-row/heads-info-row";
import BossInfoRow from "./components/boss-info-row/boss-info-row";
import BossInfoHeader from "./components/boss-info-header/boss-info-header";
import HeadsInfoHeader from "./components/heads-info-header/heads-info-header";

interface ISkillPointsCategory {
    name: string,
    bosses?: IBossInfo[],
    heads?: IHeadsInfo[]
}

const SkillPointsCategory: FC<ISkillPointsCategory> = ({
    name,
    bosses,
    heads
}) => {
    if (heads && heads.length > 0)
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography>
                        {name}
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
                        <HeadsInfoHeader />
                        {
                            heads.map(element => <HeadsInfoRow head={element} key={element.id}/>)
                        }
                    </Box>
                </AccordionDetails>
            </Accordion>
        )
    if (bosses && bosses.length > 0)
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography>
                        {name}
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
                        <BossInfoHeader />
                        {
                            bosses.map(element => <BossInfoRow boss={element} key={element.id}/>)
                        }
                    </Box>
                </AccordionDetails>
            </Accordion>
        )
    return <></>
}

export default SkillPointsCategory