import { mockedGenericLocalizedApiResponse } from "~common";
import { ICvData, IFetchCvDataOutput } from "../../../../store/cv/interfaces";

export const mockedWorkCv: ICvData = {
  ...mockedGenericLocalizedApiResponse,
  type: "work",
  place: {
    city: "Lattes",
    country: "FR",
  },
  title: "Mediakeys",
  content:
    'En **CDI** chez [Mediakeys](https://www.mediakeys.com/) en tant que développeur web Front-End.\n\nJe travaille sur divers projets, les deux principaux étant une plateforme permettant aux entreprises / media trader de gérer leurs campagnes publicitaires, de partout dans le monde, sur divers media tel que Facebook, Instagram, divers sites internets, etc, et une application permettant de créer des banières publicitaires pour ces mêmes media.\nPour mener à bien la création de nouvelles applis et l\'évolution de ceux déjà existant, je fais:\n\n- Création de maquette dites "wire-frame"\n- Création de nouveaux composants et container\n- Rédaction de tests unitaires\n- Proposition de nouvelles fonctionalités\n- Rédaction de documentation\n- Cérémonies Agile\n\n**Librairies utilisées:** React, Redux, Redux Sagas, Moment, Moment JS, Material-UI, Jest, etc ...',
  startedAt: "2020-10-15",
};

export const mockedDiplomaCv: ICvData = {
  ...mockedGenericLocalizedApiResponse,
  type: "diploma",

  place: {
    city: "Monteux",
    country: "FR",
  },
  title: "Opquast : Bonnes pratiques du Web",
  content:
    "[Opquast](https://www.opquast.com/) est une certification professionnelle s'adressant à tout les intervenants d'un projet web. On y voit des points essentiels concernant le SEO, l'accessibilité, la sémantique HTML, le responsive et bien d'autres points très interessants. Au bout de cette formation en autonomie, on peut passer un certificat valable 5 ans attestant du niveau de notre connaissance du web.\n\nJ'ai obtenu un score de **885 / 1000** et ai ainsi décroché mon [certificat](https://directory.opquast.com/fr/certificat/PFE9IM/).\n\n> Ce score signifie : Excellente connaissance des bonnes pratiques qualité du Web et du vocabulaire associé.\nCompétences réelles et appréciables pour participer à des projets Web.\n",
  startedAt: "2017-12-17",
  endedAt: "2017-12-20",
};

export const mockedBirthCv: ICvData = {
  ...mockedGenericLocalizedApiResponse,
  type: "birth",

  place: {
    city: "Marignane",
    country: "FR",
  },
  title: "Naissance",
  content:
    "Je suis né le 24 Décembre 1996 Marignane.\n\n(Non ce n'est pas nul, c'est même super de fêter Noël et son anniversaire le même soir ! 🙄)",
  startedAt: "1996-12-24",
};

export const mockedFetchCvDataResponse: Array<ICvData> = [mockedWorkCv, mockedDiplomaCv, mockedBirthCv];

export const mockedFetchCvDataOutput: IFetchCvDataOutput = {
  data: mockedFetchCvDataResponse,
  cvTypeFilter: "work",
};
