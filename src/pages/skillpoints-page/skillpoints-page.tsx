import { Box } from "@mui/material"
import { bossesInfoArray, EBossCategory, headsInfoArray } from "../../services/data/bosses"
import SkillPointsCategory from "./components/skillpoints-category/skillpoints-category"
import BlackBooksCategory from "./components/black-books-category/black-books-category"
import DaedraQuestCategory from "./components/daedra-quests-category/daedra-quests-category"
import OgmaRow from "./components/ogma-row/ogma-row"

const SkillPointsPage = () => {
    const categories = Object.values(EBossCategory)
    const getBossesAndHeadsForCategory = (category: EBossCategory) => {
        if (category === EBossCategory.Heads) return {
            heads: headsInfoArray,
            bosses: []
        }
        else return {
            heads: [],
            bosses: bossesInfoArray.filter(element => element.category === category)
        }
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {
                    categories.map((value, index) => {
                        const currentInfo = getBossesAndHeadsForCategory(value)
                        return <SkillPointsCategory
                            heads={currentInfo.heads}
                            bosses={currentInfo.bosses}
                            name={value}
                            key={index}
                        />
                    })
                }
            </Box>
            <BlackBooksCategory />
            <DaedraQuestCategory />
            <OgmaRow />
        </Box>
    )
}

export default SkillPointsPage