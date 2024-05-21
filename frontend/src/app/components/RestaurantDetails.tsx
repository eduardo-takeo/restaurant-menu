import { PiForkKnifeFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";
import { numberToHour } from "../utils/utils";

export interface IRestaurantDetailsProps {
  isOpen?: boolean;
  category?: string;
  openingHour?: number; // measured in minutes -> 420 = 420 minutes = 7:00
  closingHour?: number;
  phoneNumber?: number; //TODO: create mask for phone number input
  address?: string; //TODO: address should be an object with street, number, city, state, and zip
  storeUrl?: string;
}

export const RestaurantDetails = ({
  isOpen = true,
  category,
  openingHour,
  closingHour,
  phoneNumber,
  address,
  storeUrl,
}: IRestaurantDetailsProps) => {
  return (
    <div className="bg-white w-100 p-4">
      <div
        className={`${
          isOpen ? "bg-emerald-400" : "bg-red-500"
        } text-white w-14 px-2 text-center text-sm rounded-full float-end`}
      >
        {isOpen ? "Open" : "Closed"}
      </div>

      <div className="my-8">
        {category && (
          <span className="flex gap-2 items-center mb-2">
            <PiForkKnifeFill />
            <p className="text-sm font-light text-gray-700">{category}</p>
          </span>
        )}

        {openingHour && closingHour && (
          <span className="flex gap-2 items-center mb-2">
            <FaClock />
            <p className="text-sm font-light text-gray-700">{`Open from ${numberToHour(
              openingHour
            )} to ${numberToHour(closingHour)}`}</p>
          </span>
        )}

        {phoneNumber && (
          <span className="flex gap-2 items-center mb-2">
            <FaPhone />
            <p className="text-sm font-light text-gray-700">
              +55 (11) 1234-5678
            </p>
          </span>
        )}

        {address && (
          <span className="flex gap-2 items-center mb-2">
            <FaLocationDot />
            <p className="text-sm font-light text-gray-700">{address}</p>
          </span>
        )}
      </div>

      {storeUrl && (
        <span className="flex gap-2 items-center mb-2">
          <a
            href={storeUrl}
            className="text-sm font-light text-gray-700 underline"
          >
            View store
          </a>
          <RiArrowRightSLine />
        </span>
      )}
    </div>
  );
};
