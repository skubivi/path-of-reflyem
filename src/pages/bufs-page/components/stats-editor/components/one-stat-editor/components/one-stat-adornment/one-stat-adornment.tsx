import { Box, Button, InputAdornment, Typography } from "@mui/material"
import { FC } from "react"

interface IOneStatAdornment {
    increase: () => void
    decrease: () => void
}

const OneStatAdornment: FC<IOneStatAdornment> = ({
    increase,
    decrease
}) => {
    const handleIncrease = () => {
        increase()
    }
    const handleDecrease = () => {
        decrease()
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

export default OneStatAdornment