import { Box, Typography } from "@mui/material"

const BossInfoHeader = () => {
    return (
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
    )
}

export default BossInfoHeader