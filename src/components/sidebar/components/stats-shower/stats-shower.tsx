import { Box, Typography } from "@mui/material"
import { useGetFinalStats } from "../../../../hooks/use-get-stats/use-get-final-stats"

const StatsShower = () => {
    const finalStats = useGetFinalStats()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.25
            }}
        >
            <Typography
                variant="h6"
            >
                Характеристики:
            </Typography>
            <Typography>
                Здоровье: {finalStats.health}хп
            </Typography>
            <Typography>
                Магия: {finalStats.mana}мп
            </Typography>
            <Typography>
                Запас сил: {finalStats.stamina}ст
            </Typography>
            <Typography>
                Сопротивление огню: {finalStats.fireRes}%
            </Typography>
            <Typography>
                Сопротивление молнии: {finalStats.lightningRes}%
            </Typography>
            <Typography>
                Сопротивление холоду: {finalStats.coldRes}%
            </Typography>
            <Typography>
                Сопротивление тьме: {finalStats.darkRes}%
            </Typography>
            <Typography>
                Сопротивление яду: {finalStats.poisonRes}%
            </Typography>
            <Typography>
                Сопротивление болезни: {finalStats.diseaseRes}%
            </Typography>
            <Typography>
                Магический щит: {finalStats.manaShield}%
            </Typography>
        </Box>
    )
}

export default StatsShower