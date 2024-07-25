import { Box, Checkbox, Typography } from "@mui/material";
import { FC } from "react";
import { useTypedSelector } from "../../../../hooks/use-typed-selector";
import { ESubClasses } from "../../../../services/enums/sub-classes";
import { useTypedDispatch } from "../../../../hooks/use-typed-dispatch";
import { setIsOgmaReaded } from "../../../../services/store/slices/other-skillpoints-slice";
import { SKILLPOINTS_FOR_OGMA_READ } from "../../../../services/utils/const";

const OgmaRow: FC = () => {
    const isRighteousMan = useTypedSelector((state) => state.mainStat.subClass === ESubClasses.RighteousMan)
    const isReaded = useTypedSelector((state) => state.otherSkillPoints.isOgmaReaded)
    const dispatch = useTypedDispatch()
    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (!checked) {
            dispatch(setIsOgmaReaded(false))
        }
        else {
            dispatch(setIsOgmaReaded(true))
        }
    }

    if (isRighteousMan) return <></>
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingY: 1,
                paddingX: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
            }}
        >
            <Box
                sx={{
                    width: 250,
                }}
            >
                <Typography>
                    Огма Инфиниум
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
                        width: 80,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Checkbox 
                        checked={isReaded}
                        onChange={handleChange}
                    />
                </Box>
                <Box
                    sx={{
                        width: 50,
                    }}
                >
                    <Typography>
                        {SKILLPOINTS_FOR_OGMA_READ}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default OgmaRow