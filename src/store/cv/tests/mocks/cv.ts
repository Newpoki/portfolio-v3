import { ICvData, IFetchCvDataOutput } from "../../../../store/cv/interfaces";

export const mockedWorkCv: ICvData = {
  type: "work",
  localizations: [
    {
      _id: "6107a54c6f51dc2be752a2a4",
      id: "6107a54c6f51dc2be752a2a4",
      locale: "en-GB",
    },
  ],
  _id: "61025d1e6ba7673529eeee18",
  place: {
    city: "Lattes",
    country: "FR",
  },
  title: "Mediakeys",
  content:
    'En **CDI** chez [Mediakeys](https://www.mediakeys.com/) en tant que développeur web Front-End.\n\nJe travaille sur divers projets, les deux principaux étant une plateforme permettant aux entreprises / media trader de gérer leurs campagnes publicitaires, de partout dans le monde, sur divers media tel que Facebook, Instagram, divers sites internets, etc, et une application permettant de créer des banières publicitaires pour ces mêmes media.\nPour mener à bien la création de nouvelles applis et l\'évolution de ceux déjà existant, je fais:\n\n- Création de maquette dites "wire-frame"\n- Création de nouveaux composants et container\n- Rédaction de tests unitaires\n- Proposition de nouvelles fonctionalités\n- Rédaction de documentation\n- Cérémonies Agile\n\n**Librairies utilisées:** React, Redux, Redux Sagas, Moment, Moment JS, Material-UI, Jest, etc ...',
  startedAt: "2020-10-15",
  locale: "fr-FR",
  createdAt: "2021-07-29T07:47:42.766Z",
  updatedAt: "2021-08-02T07:57:00.375Z",
  __v: 0,
  id: "61025d1e6ba7673529eeee18",
};

export const mockedDiplomaCv: ICvData = {
  type: "diploma",
  localizations: [
    {
      _id: "610a47ed938e5fbddd722e20",
      id: "610a47ed938e5fbddd722e20",
      locale: "en-GB",
    },
  ],
  _id: "61025cf46ba7673529eeee17",
  place: {
    city: "Monteux",
    country: "FR",
  },
  title: "Opquast : Bonnes pratiques du Web",
  content:
    "[Opquast](https://www.opquast.com/) est une certification professionnelle s'adressant à tout les intervenants d'un projet web. On y voit des points essentiels concernant le SEO, l'accessibilité, la sémantique HTML, le responsive et bien d'autres points très interessants. Au bout de cette formation en autonomie, on peut passer un certificat valable 5 ans attestant du niveau de notre connaissance du web.\n\nJ'ai obtenu un score de **885 / 1000** et ai ainsi décroché mon [certificat](https://directory.opquast.com/fr/certificat/PFE9IM/).\n\n> Ce score signifie : Excellente connaissance des bonnes pratiques qualité du Web et du vocabulaire associé.\nCompétences réelles et appréciables pour participer à des projets Web.\n",
  startedAt: "2017-12-17",
  endedAt: "2017-12-20",
  locale: "fr-FR",
  createdAt: "2021-07-29T07:47:00.995Z",
  updatedAt: "2021-08-04T07:55:25.456Z",
  __v: 0,
  id: "61025cf46ba7673529eeee17",
};

export const mockedBirthCv: ICvData = {
  type: "birth",
  localizations: [
    {
      _id: "610a44f7938e5fbddd722e1e",
      id: "610a44f7938e5fbddd722e1e",
      locale: "en-GB",
    },
  ],
  _id: "61025b5c0ccdc23050f2f6ba",
  place: {
    city: "Marignane",
    country: "FR",
  },
  title: "Naissance",
  content:
    "Je suis né le 24 Décembre 1996 Marignane.\n\n(Non ce n'est pas nul, c'est même super de fêter Noël et son anniversaire le même soir ! 🙄)",
  startedAt: "1996-12-24",
  locale: "fr-FR",
  createdAt: "2021-07-29T07:40:12.968Z",
  updatedAt: "2021-08-04T07:42:47.642Z",
  __v: 0,
  id: "61025b5c0ccdc23050f2f6ba",
};

export const mockedFetchCvDataResponse: Array<ICvData> = [
  mockedWorkCv,
  mockedDiplomaCv,
  mockedBirthCv,
];

export const mockedFetchCvDataOutput: IFetchCvDataOutput = {
  data: mockedFetchCvDataResponse,
  cvTypeFilter: "work",
};
