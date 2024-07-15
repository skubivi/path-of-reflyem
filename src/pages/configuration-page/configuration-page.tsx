import { Box, Typography } from "@mui/material"
import SkillpointsDificultySelect from "./components/skillpoints-dificulty-select/skillpoints-dificulty-select"

const ConfigurationPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography variant="h4">
                Настройки:
            </Typography>
            <Box
                mt={4}
            >
                <SkillpointsDificultySelect />
            </Box>
        </Box>
    )
}

export default ConfigurationPage