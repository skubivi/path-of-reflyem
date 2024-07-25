export interface IDaedraesQuestsInfo {
    id: number,
    daedraName: string,
    questName: string,
    availableForRighteousMan: boolean
    isArtifactForRighteousMan: boolean
}

export const daedraesQuestsInfoArray: IDaedraesQuestsInfo[] = [
    {
        id: 0,
        daedraName: 'Дагон',
        questName: 'Осколки былой славы',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: false
    },
    {
        id: 1,
        daedraName: 'Сангвин',
        questName: 'Незабываемая ночка',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 2,
        daedraName: 'Молаг бал',
        questName: 'Дом Ужасов',
        availableForRighteousMan: false,
        isArtifactForRighteousMan: false
    },
    {
        id: 3,
        daedraName: 'Шеогорат',
        questName: 'Безумный ум',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 4,
        daedraName: 'Клавикус Вайл',
        questName: 'Собака - друг даэдра',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 5,
        daedraName: 'Хирсин',
        questName: 'Зов луны',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 6,
        daedraName: 'Боэтия',
        questName: 'Зов Боэтии',
        availableForRighteousMan: false,
        isArtifactForRighteousMan: false
    },
    {
        id: 7,
        daedraName: 'Периайт',
        questName: 'Единственное лекарство',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 8,
        daedraName: 'Хермеус Мора',
        questName: 'За гранью обыденного',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 9,
        daedraName: 'Вермина',
        questName: 'Ходячий кошмар',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: false
    },
    {
        id: 10,
        daedraName: 'Азура',
        questName: 'Чёрная звезда',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 11,
        daedraName: 'Мефала',
        questName: 'Дверь которая шепчет',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 12,
        daedraName: 'Намира',
        questName: 'Вкус смерти',
        availableForRighteousMan: false,
        isArtifactForRighteousMan: false
    },
    {
        id: 13,
        daedraName: 'Меридия',
        questName: 'Рассветная заря',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    },
    {
        id: 14,
        daedraName: 'Малакат',
        questName: 'Проклятое племя',
        availableForRighteousMan: true,
        isArtifactForRighteousMan: true
    }
]

export interface IDaedraArtifactForRighteousManInfo {
    id: number,
    artifactName: string,
    idOfDaedraQuest: number
}

export const daedraArtifactForRighteousManInfoArray: IDaedraArtifactForRighteousManInfo[] = [
    {
        id: 0,
        artifactName: 'Роза Сангвина',
        idOfDaedraQuest: 1
    },
    {
        id: 1,
        artifactName: 'Ваббаджек',
        idOfDaedraQuest: 3
    },
    {
        id: 2,
        artifactName: 'Шкура спасителя',
        idOfDaedraQuest: 5
    },
    {
        id: 3,
        artifactName: 'Волендраг',
        idOfDaedraQuest: 14
    },
    {
        id: 4,
        artifactName: 'Разрушитель заклинаний',
        idOfDaedraQuest: 7
    },
    {
        id: 5,
        artifactName: 'Огма Инфиниум',
        idOfDaedraQuest: 8
    },
    {
        id: 6,
        artifactName: 'Звезда Азуры',
        idOfDaedraQuest: 10
    },
    {
        id: 7,
        artifactName: 'Эбонитовый клинок',
        idOfDaedraQuest: 11
    },
    {
        id: 8,
        artifactName: 'Сияние рассвета',
        idOfDaedraQuest: 13
    },
    {
        id: 9,
        artifactName: 'Маска Клавикуса Вайла',
        idOfDaedraQuest: 4
    }
]