import type { ICard } from "./interfaces";
import pic3 from "@/app/_assets/pic3.jpg";
import Image from "next/image";

const Card: React.FC<{ card: ICard }> = ({ card }) => {
  return (
    <div className="flex-shrink-0 w-[15vw] flex flex-col gap-2">
      {/* <img className="w-full" src={card.imageUrl} alt={card.title} /> */}
      <Image
        src={pic3}
        alt="pic3"
        width={300}
        height={300}
        className="aspect-square rounded-2xl"
      />
      <div className="font-bold text-xl -mb-2">{card.title}</div>
      <p className="text-gray-700 text-base">{card.artist}</p>
    </div>
  );
};

export default Card;
