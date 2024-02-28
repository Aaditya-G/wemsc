import imageData from "@/app/_assets/pic2.jpg";

import Image from "next/image";

export interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  time: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, image, time }) => {
  return (
    <div className="card flex flex-row items-center text-white my-2 text-xs  hover:text-blue-600 transition-all duration-300 hover:cursor-pointer">
      <Image
        src={imageData}
        alt={"alt"}
        className="break-words mr-4 aspect-square"
        width={25}
        height={25}
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className=" font-bold">{title}</div>
          <div className="text-primary">{subtitle}</div>
        </div>
      </div>
      <p className=" text-gray-400">{time}</p>
    </div>
  );
};
