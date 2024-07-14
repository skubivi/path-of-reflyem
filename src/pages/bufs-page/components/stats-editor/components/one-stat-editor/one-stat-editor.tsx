import { Box, FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { FC, useEffect, useState } from "react"
import OneStatAdornment from "./components/one-stat-adornment/one-stat-adornment"

interface IOneStatEditor {
    title: string
    currentValue: number
    increase: () => void
    decrease: () => void
    set: (n: number) => void
}

const OneStatEditor: FC<IOneStatEditor> = ({
    title,
    currentValue,
    increase,
    decrease,
    set
}) => {
    const eErrorMessages = {
        NoError: title,
        NaN: 'Введите целое число',
    }
    const [currentStateValue, setCurrentStateValue] = useState<string>(currentValue.toString())
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(eErrorMessages.NoError)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.isNaN(Number.parseInt(event.target.value))) {
            setIsError(true)
            setErrorMessage(eErrorMessages.NaN)
            setCurrentStateValue('')
        }
        else {
            setIsError(false)
            setErrorMessage(eErrorMessages.NoError)
            setCurrentStateValue(Number.parseInt(event.target.value).toString())
            set(Number.parseInt(event.target.value))
        }
    }
    useEffect(() => {
        setCurrentStateValue(currentValue.toString())
        setErrorMessage(eErrorMessages.NoError)
        setIsError(false)
    }, [currentValue])
    return (
        <Box
            sx={{
                width: 260
            }}
        >
            <FormControl variant="outlined">
                <InputLabel htmlFor='stat-input' error={isError}>{errorMessage}</InputLabel>
                <OutlinedInput
                    id="stat-input"
                    label={errorMessage}
                    value={currentStateValue}
                    onChange={handleChange}
                    error={isError}
                    endAdornment={<OneStatAdornment increase={increase} decrease={decrease}/>}
                />
            </FormControl>
        </Box>
    )
}

export default OneStatEditor