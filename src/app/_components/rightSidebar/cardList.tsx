import { Card, CardProps } from "./songCard";

interface CardListProps {
  cards: CardProps[];
  sectionTitle: string;
}

export const CardList = ({ cards, sectionTitle }: CardListProps) => {
  return (
    <div className="card-list mx-4">
      <div>{sectionTitle}</div>
      <div className="cards ">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
