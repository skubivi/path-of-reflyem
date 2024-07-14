import { Box, Typography } from "@mui/material"
import { useTypedSelector } from "../../../../hooks/use-typed-selector"
import { useTypedDispatch } from "../../../../hooks/use-typed-dispatch"
import { decreaseHealth, decreaseMana, decreaseStamina, increaseHealth, increaseMana, increaseStamina, setHealth, setMana, setStamina } from "../../../../services/store/slices/main-stats-slice"
import OneStatEditor from "./components/one-stat-editor/one-stat-editor"
import { checkStatsWithLevel } from "../../../../services/utils/check-stats"

const StatsEditor = () => {
    const dispatch = useTypedDispatch()

    const currentMana = useTypedSelector((state) => state.mainStat.pointsInMana)
    const handleIncreaseMana = () => {
        dispatch(increaseMana())
    }
    const handleDecreaseMana = () => {
        dispatch(decreaseMana())
    }
    const handleSetMana = (n: number) => {
        dispatch(setMana(n))
    }

    const currentHealth = useTypedSelector((state) => state.mainStat.pointsInHealth)
    const handleIncreaseHealth = () => {
        dispatch(increaseHealth())
    }
    const handleDecreaseHealth = () => {
        dispatch(decreaseHealth())
    }
    const handleSetHealth = (n: number) => {
        dispatch(setHealth(n))
    }

    const currentStamina = useTypedSelector((state) => state.mainStat.pointsInStamina)
    const handleIncreaseStamina = () => {
        dispatch(increaseStamina())
    }
    const handleDecreaseStamina = () => {
        dispatch(decreaseStamina())
    }
    const handleSetStamina = (n: number) => {
        dispatch(setStamina(n))
    }

    const currentLevel = useTypedSelector((state) => state.mainStat.level)
    const points = checkStatsWithLevel(currentLevel, currentHealth, currentMana, currentStamina)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.25,
                marginTop: 4
            }}
        >
            <Typography variant="h5">
                Статы за уровень: 
            </Typography>
            <Typography
                color={points < 0 ? 'red' : 'black'}
            >
                Кол-во непотраченных поинтов: {points}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <OneStatEditor 
                    title="Магия"
                    increase={handleIncreaseMana}
                    decrease={handleDecreaseMana}
                    set={handleSetMana}
                    currentValue={currentMana}
                />
                <OneStatEditor 
                    title="Здоровье"
                    increase={handleIncreaseHealth}
                    decrease={handleDecreaseHealth}
                    set={handleSetHealth}
                    currentValue={currentHealth}
                />
                <OneStatEditor 
                    title="Запас сил"
                    increase={handleIncreaseStamina}
                    decrease={handleDecreaseStamina}
                    set={handleSetStamina}
                    currentValue={currentStamina}
                />
            </Box>
        </Box>
    )
}

export default StatsEditor