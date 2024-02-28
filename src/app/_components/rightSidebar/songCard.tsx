import Image from "next/image";

export interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  time: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, image, time }) => {
  return (
    <div className="card flex flex-row items-center text-white my-2 text-xs">
      <Image
        src={image}
        alt={"alt"}
        className="rounded-lg break-words mr-4"
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
