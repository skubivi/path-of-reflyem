import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useTypedSelector } from "../../../../hooks/use-typed-selector"
import { useTypedDispatch } from "../../../../hooks/use-typed-dispatch"
import { selectRace } from "../../../../services/store/slices/main-stats-slice"
import { ERaces } from "../../../../services/enums/races"

const RaceSelect = () => {
    const raceValue = useTypedSelector((state) => state.mainStat.race)
    const racesVariants = Object.values(ERaces)
    const dispatch = useTypedDispatch()
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(selectRace(event.target.value as ERaces))
    }
    return (
        <FormControl>
            <InputLabel id="race-select-label">Раса</InputLabel>
            <Select
                labelId="race-select-label"
                value={raceValue}
                onChange={handleChange}
                label='Раса'
            >
                {racesVariants.map((value, index) => (
                    <MenuItem
                        value={value}
                        key={value}
                    >
                        {racesVariants[index]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default RaceSelect