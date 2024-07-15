import { Box, MenuItem, Select, Typography } from "@mui/material"
import { ESkillpointsDificulty } from "../../../../services/enums/skillpoints-dificulty"
import { useTypedSelector } from "../../../../hooks/use-typed-selector"
import { useTypedDispatch } from "../../../../hooks/use-typed-dispatch"
import { setSkillpointsDificulty } from "../../../../services/store/slices/configuration-slice"

const SkillpointsDificultySelect = () => {
    const currentValue = useTypedSelector((state) => state.configuration.skillpointsDificulty)
    const dispatch = useTypedDispatch()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 300
            }}
        >
            <Typography
                variant="h5"
            >
                Скилпоинты за уровень:
            </Typography>
            <Select
                value={currentValue}
                onChange={(event) => {
                    dispatch(setSkillpointsDificulty(event.target.value as ESkillpointsDificulty))
                }}
            >
                <MenuItem value={ESkillpointsDificulty.Default}>{ESkillpointsDificulty.Default}</MenuItem>
                <MenuItem value={ESkillpointsDificulty.Easy}>{ESkillpointsDificulty.Easy}</MenuItem>
                <MenuItem value={ESkillpointsDificulty.Hard}>{ESkillpointsDificulty.Hard}</MenuItem>
                <MenuItem value={ESkillpointsDificulty.Dynamic}>{ESkillpointsDificulty.Dynamic}</MenuItem>
            </Select>
        </Box>
    )
}

export default SkillpointsDificultySelect