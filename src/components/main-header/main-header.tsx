import { Box, Button, Typography } from "@mui/material"
import SubClassSelect from "./components/sub-class-select/sub-class-select"
import RaceSelect from "./components/race-select/race-select"
import StandingStoneSelect from "./components/standing-stone-select/standing-stone-select"
import LevelInput from "./components/level-input/level-input"
import { useGetRemainingSkillpoints } from "../../hooks/use-get-remaining-skillpoints"

const MainHeader = () => {
    const remainingSkillpoints = useGetRemainingSkillpoints()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 60,
                width: 'calc(100% - 20px)',
                padding: 1.25,
                borderBottom: 'solid 1px #000'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1.25,
                    alignItems: 'center'
                }}
            >
                <Button variant="contained" disabled>
                    Назад
                </Button>
                <Typography>
                    Текущий билд: пампарам
                </Typography>
                <Button variant="contained" disabled>
                    Сохранить
                </Button>
                <Button variant="contained" disabled>
                    Сохранить как
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1.25,
                    alignItems: 'center'
                }}
            >
                <Typography>
                    Осталось скилпоинтов: {remainingSkillpoints}
                </Typography>
                <LevelInput />
                <RaceSelect />
                <StandingStoneSelect />
                <SubClassSelect />
            </Box>
        </Box>
    )
}

export default MainHeader