import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { FC } from "react";
import { blackBookInfoArray } from "../../../../services/data/black-books";
import BlackBookInfoRow from "./components/black-book-info-row/black-book-info-row";
import BlackBookInfoHeader from "./components/black-book-info-header/black-book-info-header";

const BlackBooksCategory: FC = () => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                <Typography>
                    Чёрные книги
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        paddingX: 2
                    }}
                >
                    <BlackBookInfoHeader />
                    {
                        blackBookInfoArray.map(element => <BlackBookInfoRow blackBook={element} key={element.id}/>)
                    }
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default BlackBooksCategory