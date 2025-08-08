export interface ICard {
  review: string;
  name?: string;
  imgPath?: string;
  logoPath?: string;
  title?: string;
  date?: string;
  responsibilities?: string[];
}

export interface ICardExperience {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
}
