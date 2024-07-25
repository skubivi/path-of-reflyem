import { BANDITS_BOSS_COUNT, DVEMERS_BOSS_COUNT, EXILES_BOSS_COUNT, FALMERS_BOSS_COUNT, MAGES_BOSS_COUNT } from "../utils/const"

export enum EBossCategory {
    Heads = 'Главари',
    OneLP = '1 ЛП мобы',
    Draugr = 'Драугры',
    MidGameBoss = 'Мид гейм боссы',
    DaedraQuestBoss = 'Боссы из даэдра квестов',
    DragonPriest = 'Драконьи жрецы',
    EndGameBoss = 'Эндгейм боссы',
}

export enum EHeadNames {
    Bandits = 'Бандиты',
    Exiles = 'Изгои',
    Mages = 'Маги',
    Falmers = 'Фалмеры',
    Dvemers = 'Двемеры'
}

export interface IHeadsInfo {
    id: number,
    count: number,
    category: EBossCategory.Heads,
    name: EHeadNames
}



export const headsInfoArray: IHeadsInfo[] = [
    {
        id: 0,
        name: EHeadNames.Bandits,
        count: BANDITS_BOSS_COUNT,
        category: EBossCategory.Heads
    },
    {
        id: 1,
        name: EHeadNames.Exiles,
        count: EXILES_BOSS_COUNT,
        category: EBossCategory.Heads
    },
    {
        id: 2,
        name: EHeadNames.Mages,
        count: MAGES_BOSS_COUNT,
        category: EBossCategory.Heads
    },
    {
        id: 3,
        name: EHeadNames.Falmers,
        count: FALMERS_BOSS_COUNT,
        category: EBossCategory.Heads
    },
    {
        id: 4,
        name: EHeadNames.Dvemers,
        count: DVEMERS_BOSS_COUNT,
        category: EBossCategory.Heads
    }
]

export interface IBossInfo {
    location?: string,
    quest?: string,
    name: string,
    skillPoints: number,
    category: EBossCategory,
    id: number
}

export const bossesInfoArray: IBossInfo[] = [
    {
        id: 0,
        location: 'Лабиринт Шалидора',
        name: 'Древний маг',
        skillPoints: 1,
        category: EBossCategory.OneLP
    },
    {
        id: 1,
        location: 'Обитель Ранвейг',
        name: 'Сильд Чернокнижник',
        skillPoints: 1,
        category: EBossCategory.OneLP
    },
    {
        id: 2,
        location: 'Гробница Хилрунда',
        name: 'Валс Веран',
        skillPoints: 1,
        category: EBossCategory.OneLP
    },
    {
        id: 3,
        location: 'Ингвильд',
        name: 'Арондил',
        skillPoints: 1,
        category: EBossCategory.OneLP
    },
    {
        id: 4,
        location: 'Картвастен',
        name: 'Атар',
        skillPoints: 1,
        category: EBossCategory.OneLP
    },
    {
        id: 5,
        location: 'Фростмир',
        name: 'Бледная Леди',
        skillPoints: 1,
        category: EBossCategory.OneLP
    },
    {
        id: 6,
        location: 'Саартал',
        name: 'Йурик Голдурсон',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 7,
        location: 'Фолгунтур',
        name: 'Микрул Голдурсон',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 8,
        location: 'Зал Гейрмунда',
        name: 'Сигдис Голдурсон',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 9,
        location: 'Озёрный утёс',
        quest: 'Запретная легенда',
        skillPoints: 15,
        name: 'Йурик, Микрул и Сигдис Голдурсоны',
        category: EBossCategory.Draugr
    },
    {
        id: 10,
        location: 'Курган Ингола',
        name: 'Ингол',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 11,
        location: 'Забытая пещера',
        name: 'Куралмир',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 12,
        location: 'Ветровая Дуга',
        name: 'Нура Железная Тетива',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 13,
        location: 'Рангвальд',
        name: 'Страж Сирек',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 14,
        location: 'Рангвальд',
        name: 'Страж Торстен',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 15,
        location: 'Каирн Холдира',
        name: 'Холдир',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 16,
        location: 'Волундруд',
        name: 'Квенел Язык',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 17,
        location: 'Каирн Мятежника',
        name: 'Красный Орёл',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 18,
        location: 'Упокоище',
        name: 'Олаф Одноглазый',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 20,
        location: 'Курган Железный',
        name: 'Веначальник Гатрик',
        skillPoints: 5,
        category: EBossCategory.Draugr
    },
    {
        id: 21,
        quest: 'Зов Боэтии',
        name: 'Воин Боэтии',
        skillPoints: 10,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 22,
        location: 'Двуглавый Пик',
        name: 'Кросис',
        skillPoints: 10,
        category: EBossCategory.DragonPriest
    },
    {
        id: 23,
        quest: 'Гражданская война',
        name: 'Генерал Тулий',
        skillPoints: 10,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 24,
        quest: 'Гражданская война',
        name: 'Ульфрик Буревестник',
        skillPoints: 10,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 25,
        location: 'Реликварий Хризамера',
        name: 'Драраму Хлоран',
        skillPoints: 15,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 26,
        location: 'Кузница Этерия',
        name: 'Мастер кузнец',
        skillPoints: 15,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 27,
        location: 'Ваалтум',
        name: 'Хевнорак',
        skillPoints: 15,
        category: EBossCategory.DragonPriest
    },
    {
        id: 28,
        location: 'Руины Высоких Врат',
        name: 'Вокун',
        skillPoints: 15,
        category: EBossCategory.DragonPriest
    },
    {
        id: 29,
        location: 'Рагнвальд',
        name: 'Отар',
        skillPoints: 20,
        category: EBossCategory.DragonPriest
    },
    {
        id: 30,
        location: 'Форелхост',
        name: 'Рагот',
        skillPoints: 20,
        category: EBossCategory.DragonPriest
    },
    {
        id: 31,
        location: 'Вольскигге',
        name: 'Вольсунг',
        skillPoints: 20,
        category: EBossCategory.DragonPriest
    },
    {
        id: 32,
        location: 'Шахта Вороньей Скалы',
        name: 'Закрисош',
        skillPoints: 20,
        category: EBossCategory.DragonPriest
    },
    {
        id: 33,
        location: 'Курган Колбьорн',
        name: 'Азидал',
        skillPoints: 20,
        category: EBossCategory.DragonPriest
    },
    {
        id: 34,
        quest: 'Дом Ужасов',
        name: 'Дозорный Туран',
        skillPoints: 20,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 35,
        location: 'Последний Пост',
        name: 'Эбонитовый воин',
        skillPoints: 20,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 36,
        quest: 'Вечный покой',
        name: 'Моварт Пикуин',
        skillPoints: 20,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 37,
        location: 'Кровавый Трон',
        name: 'Вигхар',
        skillPoints: 20,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 38,
        location: 'Святилище Мерунеса Дагона',
        name: 'Страж Святилища',
        skillPoints: 20,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 39,
        location: 'Забытая Долина',
        name: 'Викарий Виртур',
        skillPoints: 25,
        category: EBossCategory.MidGameBoss
    },
    {
        id: 40,
        location: 'Лабиринтиан',
        name: 'Морокеи',
        skillPoints: 30,
        category: EBossCategory.DragonPriest
    },
    {
        id: 41,
        location: 'Скулдафн',
        name: 'Накрин',
        skillPoints: 30,
        category: EBossCategory.DragonPriest
    },
    {
        id: 42,
        location: 'Курган Белого Хребта',
        name: 'Дукан',
        skillPoints: 30,
        category: EBossCategory.DragonPriest
    },
    {
        id: 43,
        location: 'Апокриф',
        name: 'Мирак',
        skillPoints: 50,
        category: EBossCategory.EndGameBoss
    },
    {
        id: 44,
        location: 'Гробница Валока',
        name: 'Валок',
        skillPoints: 50,
        category: EBossCategory.EndGameBoss
    },
    {
        id: 45,
        location: 'Совнгард',
        name: 'Алдуин',
        skillPoints: 50,
        category: EBossCategory.EndGameBoss
    },
    {
        id: 46,
        location: 'Собор замка Волхикар',
        name: 'Харкон',
        skillPoints: 50,
        category: EBossCategory.EndGameBoss
    },
    {
        id: 47,
        quest: 'Единственное лекарство',
        name: 'Оркендор',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 48,
        quest: 'Собака - друг даэдра',
        name: 'Себастьян Лорт',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 49,
        quest: 'Чёрная звезда',
        name: 'Нариса Верано',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 50,
        quest: 'Ходячий кошмар',
        name: 'Верен Дулери',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 51,
        quest: 'Чёрная звезда',
        name: 'Мейлин Варен',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 52,
        quest: 'Зов Луны',
        name: 'Синдинг',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 53,
        quest: 'Ходячий Кошмар',
        name: 'Торек',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 54,
        quest: 'Рассветная заря',
        name: 'Малкоран',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    },
    {
        id: 55,
        quest: 'Рассветная заря',
        name: 'Тень Малкорана',
        skillPoints: 1,
        category: EBossCategory.DaedraQuestBoss
    }
]