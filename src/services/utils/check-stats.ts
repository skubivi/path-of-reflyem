type TCheckStatsWithLevel = (level: number, health: number, mana: number, stamina: number) => number 

export const checkStatsWithLevel: TCheckStatsWithLevel = (level, health, mana, stamina) => {
    return level - 1 - health - mana- stamina
}