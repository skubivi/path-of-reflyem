import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { FC } from "react";
import { IBossInfo, IHeadsInfo } from "../../../../services/data/bosses";
import HeadsInfoRow from "./components/heads-info-row/heads-info-row";
import BossInfoRow from "./components/boss-info-row/boss-info-row";

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
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                paddingX: 4,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 2
                            }}
                        >
                            <Typography
                                variant="h6"
                            >
                                Категория
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 3
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 100
                                    }}
                                >
                                    <Typography>
                                        Получено:
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width: 100,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Typography>
                                        Всего:
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
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
                                    width: 250
                                }}
                            >
                                <Typography
                                    variant="h6"
                                >
                                    Имя босса
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
                                        width: 50
                                    }}
                                >
                                    Убит?
                                </Box>
                                <Box
                                    sx={{
                                        width: 50
                                    }}
                                >
                                    Колво поинтов
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
                                    Квест
                                </Box>
                                <Box
                                    sx={{
                                        width: 250
                                    }}
                                >
                                    Локация
                                </Box>
                            </Box>
                        </Box>
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