import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useTypedSelector } from "../../../../hooks/use-typed-selector"
import { useTypedDispatch } from "../../../../hooks/use-typed-dispatch"
import { selectStandingStone } from "../../../../services/store/slices/main-stats-slice"
import { EStandingStones } from "../../../../services/enums/standing-stones"

const StandingStoneSelect = () => {
    const stoneValue = useTypedSelector((state) => state.mainStat.standingStone)
    const stoneVariants = Object.values(EStandingStones)
    const dispatch = useTypedDispatch()
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(selectStandingStone(event.target.value as EStandingStones))
    }
    return (
        <FormControl>
            <InputLabel id="sub-class-select-label">Камень</InputLabel>
            <Select
                labelId="sub-class-select-label"
                value={stoneValue}
                onChange={handleChange}
                label='Камень'
            >
                {stoneVariants.map((value, index) => (
                    <MenuItem
                        value={value}
                        key={value}
                    >
                        {stoneVariants[index]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default StandingStoneSelect