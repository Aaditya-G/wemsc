export interface ICard {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  isTrending: boolean;
}

export interface ICarouselProps {
  title: string;
  cards: ICard[];
}
