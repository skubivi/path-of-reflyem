import { Box, Typography } from "@mui/material"
import { useTypedSelector } from "../../../../../../hooks/use-typed-selector"
import { ESubClasses } from "../../../../../../services/enums/sub-classes"

const DaedraQuestInfoHeader = () => {
    const isRighteousMan = useTypedSelector((state) => state.mainStat.subClass === ESubClasses.RighteousMan)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingX: 4,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 2
            }}
        >
            <Box
                sx={{
                    width: 320
                }}
            >
                <Typography
                    variant="h6"
                >
                    {isRighteousMan ? 'Имя даэдра/Название артефакта' : 'Имя даэдра'}
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
                        width: 80
                    }}
                >
                    Пройдено?
                </Box>
                <Box
                    sx={{
                        width: 50
                    }}
                >
                    Колво поинтов
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
                    Название квеста
                </Box>
            </Box>
        </Box>
    )
}

export default DaedraQuestInfoHeader