import { Box, Button, Typography } from "@mui/material"
import SubClassSelect from "./components/sub-class-select/sub-class-select"
import RaceSelect from "./components/race-select/race-select"
import StandingStoneSelect from "./components/standing-stone-select/standing-stone-select"
import LevelInput from "./components/level-input/level-input"

const MainHeader = () => {
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
                <Button variant="contained">
                    Назад
                </Button>
                <Typography>
                    Текущий билд: пампарам
                </Typography>
                <Button variant="contained">
                    Сохранить
                </Button>
                <Button variant="contained">
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
                    Использовано скилпоинтов: 100
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