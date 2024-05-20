import { PiForkKnifeFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";

export interface IRestaurantDetailsProps {
  isOpen?: boolean;
  category?: string;
  openingHours?: string;
  phoneNumber?: string;
  address?: string;
  storeUrl?: string;
}

//TODO: make RestaurantDetails component dynamic
export const RestaurantDetails = ({
  isOpen,
  category,
  openingHours,
  phoneNumber,
  address,
  storeUrl,
}: IRestaurantDetailsProps) => {
  return (
    <div className="bg-white w-100 p-4">
      <div className="bg-emerald-400 text-white w-14 px-2 text-center text-sm rounded-full float-end">
        Open
      </div>

      <div className="my-8">
        <span className="flex gap-2 items-center mb-2">
          <PiForkKnifeFill />
          <p className="text-sm font-light text-gray-700">Meals</p>
        </span>
        <span className="flex gap-2 items-center mb-2">
          <FaClock />
          <p className="text-sm font-light text-gray-700">
            Open from 12:00 to 23:00
          </p>
        </span>
        <span className="flex gap-2 items-center mb-2">
          <FaPhone />
          <p className="text-sm font-light text-gray-700">+55 (11) 1234-5678</p>
        </span>
        <span className="flex gap-2 items-center mb-2">
          <FaLocationDot />
          <p className="text-sm font-light text-gray-700">
            Ocean Avenue, 1234 - Miami/FL
          </p>
        </span>
      </div>

      <span className="flex gap-2 items-center mb-2">
        <a
          href={storeUrl}
          className="text-sm font-light text-gray-700 underline"
        >
          View store
        </a>
        <RiArrowRightSLine />
      </span>
    </div>
  );
};
