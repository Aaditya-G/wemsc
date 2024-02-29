import type { ICard } from "./interfaces";
import pic3 from "@/app/_assets/pic3.jpg";
import Image from "next/image";

const Card: React.FC<{ card: ICard }> = ({ card }) => {
  return (
    <div className="flex-shrink-0 w-[15vw] flex flex-col gap-2 cursor-pointer hover:text-blue-600 transition-all duration-300">
      {/* <img className="w-full" src={card.imageUrl} alt={card.title} /> */}
      <div className="relative overflow-hidden aspect-square rounded-2xl">
        <div className="transition-transform duration-300 hover:scale-105">
          <Image
            src={pic3}
            alt="pic3"
            className="aspect-square rounded-2xl hover:opacity-70 transition-all duration-300"
          />
        </div>
      </div>

      <div className="font-bold text-xl -mb-2">{card.title}</div>
      <p className="text-gray-700 text-base">{card.artist}</p>
    </div>
  );
};

export default Card;
