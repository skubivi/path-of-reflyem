import { Box, Checkbox, Typography } from "@mui/material"
import { FC } from "react"
import { IBlackBookInfo } from "../../../../../../services/data/black-books"
import { useTypedSelector } from "../../../../../../hooks/use-typed-selector"
import { useTypedDispatch } from "../../../../../../hooks/use-typed-dispatch"
import { addBlackBook, removeBlackBook } from "../../../../../../services/store/slices/other-skillpoints-slice"
import { SKILLPOINTS_FOR_BLACK_BOOK } from "../../../../../../services/utils/const"

interface IBlackBookInfoRow {
    blackBook: IBlackBookInfo
}

const BlackBookInfoRow: FC<IBlackBookInfoRow> = ({
    blackBook
}) => {
    const isCollected = useTypedSelector((state) => state.otherSkillPoints.blackBooks.find(element => element === blackBook.id))
    const dispatch = useTypedDispatch()
    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (!checked) {
            dispatch(removeBlackBook(blackBook.id))
        }
        else {
            dispatch(addBlackBook(blackBook.id))
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
                    {blackBook.name}
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
                        {SKILLPOINTS_FOR_BLACK_BOOK}
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
                        {blackBook.location}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default BlackBookInfoRow