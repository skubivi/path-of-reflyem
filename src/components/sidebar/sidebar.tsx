import { Box, Button } from "@mui/material"
import StatsShower from "./components/stats-shower/stats-shower"
import { useNavigate } from "react-router-dom"

const SideBar = () => {
    const navigate = useNavigate()
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
                    disabled
                >
                    Импорт/Экспорт
                </Button>
                <Button
                    variant="contained"
                    disabled
                >
                    Навыки
                </Button>
                <Button
                    variant="contained"
                    disabled
                >
                    Вещи
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate('/bufs')}
                >
                    Бафы
                </Button>
                <Button
                    variant="contained"
                    disabled
                    onClick={() => navigate('/skillpoints')}
                >
                    Скилпоинты
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate('/configuration')}
                >
                    Настройки
                </Button>
            </Box>
            <StatsShower />
        </Box>
    )
}

export default SideBar