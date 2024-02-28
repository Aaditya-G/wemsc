import { Card, CardProps } from "./songCard";

interface CardListProps {
  cards: CardProps[];
  sectionTitle: string;
}

export const CardList = ({ cards, sectionTitle }: CardListProps) => {
  return (
    <div className="card-list mx-4">
      <h2>{sectionTitle}</h2>
      <div className="cards ">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
