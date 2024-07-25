import { Box, OutlinedInput, Typography } from "@mui/material";
import { FC } from "react";
import { EHeadNames, IHeadsInfo } from "../../../../../../services/data/bosses";
import { useTypedDispatch } from "../../../../../../hooks/use-typed-dispatch";
import { useTypedSelector } from "../../../../../../hooks/use-typed-selector";
import { setSkillPointsForBandits, setSkillPointsForDvemers, setSkillPointsForExiles, setSkillPointsForFalmers, setSkillPointsForMages } from "../../../../../../services/store/slices/skillpoints-for-bosses-slice";

interface IHeadsInfoRow {
    head: IHeadsInfo
}

const HeadsInfoRow: FC<IHeadsInfoRow> = ({
    head
}) => {
    const dispatch = useTypedDispatch()
    const currentValue = useTypedSelector((state) => {
        if (head.name === EHeadNames.Bandits) return state.skillPointsForBosses.skillPointsForBandits
        if (head.name === EHeadNames.Exiles) return state.skillPointsForBosses.skillPointsForExiles
        if (head.name === EHeadNames.Mages) return state.skillPointsForBosses.skillPointsForMages
        if (head.name === EHeadNames.Falmers) return state.skillPointsForBosses.skillPointsForFalmers
        if (head.name === EHeadNames.Dvemers) return state.skillPointsForBosses.skillPointsForDvemers
    })
    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        let numberValue = Number.parseInt(event.target.value)
        if (Number.isNaN(numberValue)) numberValue = 0

        if (head.name === EHeadNames.Bandits) return dispatch(setSkillPointsForBandits(numberValue))
        if (head.name === EHeadNames.Exiles) return dispatch(setSkillPointsForExiles(numberValue))
        if (head.name === EHeadNames.Mages) return dispatch(setSkillPointsForMages(numberValue))
        if (head.name === EHeadNames.Falmers) return dispatch(setSkillPointsForFalmers(numberValue))
        if (head.name === EHeadNames.Dvemers) return dispatch(setSkillPointsForDvemers(numberValue))
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                border: '1px solid #000',
                padding: 1,
                paddingX: 4,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Typography
                variant="h6"
            >
                {head.name}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 3
                }}
            >
                <Box
                    sx={{
                        width: 100
                    }}
                >
                    <OutlinedInput
                        value={currentValue}
                        onChange={handleChange}
                    />
                </Box>
                <Box
                    sx={{
                        width: 100,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Typography>
                        {head.count}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default HeadsInfoRow