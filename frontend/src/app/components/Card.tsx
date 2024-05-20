import Image, { StaticImageData } from "next/image";

export interface ICardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: StaticImageData;
}

export const Card = ({ title, description, price, imageUrl }: ICardProps) => {
  return (
    <div className="bg-white w-100 flex items-center p-2">
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="p-4">
        <p className="text-xl font-bold text-primary mb-2">{title}</p>
        <p className="text-sm text-gray-700 overflow-ellipsis">{description}</p>
        <div className="p-1 my-2 w-20 rounded-full bg-primary text-center">
          <p className="font-bold">$ {price}</p>
        </div>
      </div>
    </div>
  );
};
