import { Box, Typography } from "@mui/material"
import StatsEditor from "./components/stats-editor/stats-editor"

const BufsPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography variant="h4">
                Бафы:
            </Typography>
            <StatsEditor />
        </Box>
    )
}

export default BufsPage