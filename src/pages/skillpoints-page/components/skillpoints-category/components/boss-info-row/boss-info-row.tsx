import { Box, Checkbox, Typography } from "@mui/material";
import { FC } from "react";
import { IBossInfo } from "../../../../../../services/data/bosses";
import { useTypedSelector } from "../../../../../../hooks/use-typed-selector";
import { useTypedDispatch } from "../../../../../../hooks/use-typed-dispatch";
import { addBossToCollected, addSkillPoints, removeBossFromCollected, removeSkillPoints } from "../../../../../../services/store/slices/skillpoints-for-bosses-slice";

interface IBossInfoRow {
    boss: IBossInfo
}

const BossInfoRow: FC<IBossInfoRow> = ({
    boss
}) => {
    const isCollected = useTypedSelector((state) => state.skillPointsForBosses.collectedId.find(element => element === boss.id))
    const dispatch = useTypedDispatch()
    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (!checked) {
            dispatch(removeBossFromCollected(boss.id))
            dispatch(removeSkillPoints(boss.skillPoints))
        }
        else {
            dispatch(addBossToCollected(boss.id))
            dispatch(addSkillPoints(boss.skillPoints))
        }
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                border: '1px solid #000',
                padding: 2,
                paddingX: 4,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    width: 250
                }}
            >
                <Typography
                    variant="h6"
                >
                    {boss.name}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 4,
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: 50
                    }}
                >
                    <Checkbox 
                        checked={isCollected !== undefined}
                        onChange={handleChange}
                    />
                </Box>
                <Box
                    sx={{
                        width: 50
                    }}
                >
                    <Typography>
                        {boss.skillPoints}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: 250
                    }}
                >
                    <Typography>
                        {boss.quest}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: 250
                    }}
                >
                    <Typography>
                        {boss.location}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default BossInfoRow