import { Box, Typography } from "@mui/material"

const HeadsInfoHeader = () => {
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
    )
}

export default HeadsInfoHeader