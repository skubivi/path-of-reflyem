import { Box, Typography } from "@mui/material"

const BlackBookInfoHeader = () => {
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
                    Название
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
                        width: 80
                    }}
                >
                    Прочитана?
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
                    Локация
                </Box>
            </Box>
        </Box>
    )
}

export default BlackBookInfoHeader