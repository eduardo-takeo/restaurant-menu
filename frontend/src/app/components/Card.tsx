import Image, { StaticImageData } from "next/image";

export interface ICardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: StaticImageData;
}

export const Card = ({ title, description, price, imageUrl }: ICardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <Image src={imageUrl} alt={title} className="h-52" />
        <div className="absolute bottom-3 left-3 bg-white py-2 px-6 rounded-full">
          <p className="font-bold">$ {price}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-2xl font-bold text-blue-700 mb-2">{title}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
