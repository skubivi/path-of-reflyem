import { Box, FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { useTypedSelector } from "../../../../hooks/use-typed-selector"
import { useEffect, useState } from "react"
import { STARTING_LEVEL } from "../../../../services/utils/const"
import { useTypedDispatch } from "../../../../hooks/use-typed-dispatch"
import { setLevel } from "../../../../services/store/slices/main-stats-slice"
import LevelInputAdornment from "./components/level-input-adornment/level-input-adornment"

const LevelInput = () => {
    enum EErrorMessages {
        NoError = 'Уровень',
        NaN = 'Введите целое число',
        LowLevel = `Уровень не может быть меньше ${STARTING_LEVEL}`
    }
    const currentValueInStore = useTypedSelector((state) => state.mainStat.level)
    const dispatch = useTypedDispatch()
    const [currentValue, setCurrentValue] = useState<string>(currentValueInStore.toString())
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(EErrorMessages.NoError)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.isNaN(Number.parseInt(event.target.value))) {
            setIsError(true)
            setErrorMessage(EErrorMessages.NaN)
            setCurrentValue('')
        }
        else if (Number.parseInt(event.target.value) < STARTING_LEVEL) {
            setIsError(true)
            setErrorMessage(EErrorMessages.LowLevel)
            setCurrentValue(event.target.value)
        }
        else {
            setIsError(false)
            setErrorMessage(EErrorMessages.NoError)
            setCurrentValue(Number.parseInt(event.target.value).toString())
            dispatch(setLevel(Number.parseInt(event.target.value)))
        }
    }
    useEffect(() => {
        setCurrentValue(currentValueInStore.toString())
        setErrorMessage(EErrorMessages.NoError)
        setIsError(false)
    }, [currentValueInStore])
    return (
        <Box
            sx={{
                width: 260
            }}
        >
            <FormControl variant="outlined">
                <InputLabel htmlFor='level-input' error={isError}>{errorMessage}</InputLabel>
                <OutlinedInput
                    id="level-input"
                    label={errorMessage}
                    value={currentValue}
                    onChange={handleChange}
                    error={isError}
                    endAdornment={<LevelInputAdornment />}
                />
            </FormControl>
        </Box>
    )
}

export default LevelInput