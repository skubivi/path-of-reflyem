import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useTypedSelector } from "../../../../hooks/use-typed-selector"
import { useTypedDispatch } from "../../../../hooks/use-typed-dispatch"
import { ESubClasses } from "../../../../services/enums/sub-classes"
import { selectSubClass } from "../../../../services/store/slices/main-stats-slice"

const SubClassSelect = () => {
    const subClassValue = useTypedSelector((state) => state.mainStat.subClass)
    const subClassVariants = Object.values(ESubClasses)
    const dispatch = useTypedDispatch()
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(selectSubClass(event.target.value as ESubClasses))
    }
    return (
        <FormControl>
            <InputLabel id="sub-class-select-label">Класс</InputLabel>
            <Select
                labelId="sub-class-select-label"
                value={subClassValue}
                onChange={handleChange}
                label='Класс'
            >
                {subClassVariants.map((value, index) => (
                    <MenuItem
                        value={value}
                        key={value}
                    >
                        {subClassVariants[index]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SubClassSelect