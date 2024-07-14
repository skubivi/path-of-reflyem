import { Box, Button } from "@mui/material"
import StatsShower from "./components/stats-shower/stats-shower"

const SideBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 1.25,
                width: 300,
                borderRight: 'solid 1px #000',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 1,
                    borderBottom: 'solid 1px #000',
                    paddingBottom: 1.25,
                    marginBottom: 1.25
                }}
            >
                <Button
                    variant="contained"
                >
                    Импорт/Экспорт
                </Button>
                <Button
                    variant="contained"
                >
                    Навыки
                </Button>
                <Button
                    variant="contained"
                >
                    Вещи
                </Button>
                <Button
                    variant="contained"
                >
                    Бафы
                </Button>
            </Box>
            <StatsShower />
        </Box>
    )
}

export default SideBar