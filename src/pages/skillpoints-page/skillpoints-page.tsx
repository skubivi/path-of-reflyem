import { Box } from "@mui/material"
import { bossesInfoArray, EBossCategory, headsInfoArray } from "../../services/data/bosses"
import SkillPointsCategory from "./components/skillpoints-category/skillpoints-category"

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
    )
}

export default SkillPointsPage