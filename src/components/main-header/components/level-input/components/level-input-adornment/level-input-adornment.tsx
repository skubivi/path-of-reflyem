import { Box, Button, InputAdornment, Typography } from "@mui/material"
import { useTypedDispatch } from "../../../../../../hooks/use-typed-dispatch"
import { decreaseLevel, increaseLevel } from "../../../../../../services/store/slices/main-stats-slice"

const LevelInputAdornment = () => {
    const dispatch = useTypedDispatch()
    const handleIncrease = () => {
        dispatch(increaseLevel())
    }
    const handleDecrease = () => {
        dispatch(decreaseLevel())
    }
    return (
        <InputAdornment position="end">
            <Box
                sx={{
                    display: 'flex',
                    gap: '2px',
                    flexDirection: 'row'
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        width: 30,
                        height: 30,
                        minWidth: 30,
                        padding: 0
                    }}
                    onClick={handleIncrease}
                >
                    <Typography>
                        +
                    </Typography>
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        width: 30,
                        height: 30,
                        minWidth: 30,
                        padding: 0
                    }}
                    onClick={handleDecrease}
                >
                    <Typography>
                        -
                    </Typography>
                </Button>
            </Box>
        </InputAdornment>
    )
}

export default LevelInputAdornment