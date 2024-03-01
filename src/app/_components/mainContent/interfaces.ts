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

export interface SidebarState {
  isSidebarVisible: boolean;
  setSidebarVisibility: (visible: boolean) => void;
}