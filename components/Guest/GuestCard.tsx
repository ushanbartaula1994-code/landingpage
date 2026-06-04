import Image from "next/image";
import type { Guest } from "@/types/types";

interface Props {
  guest: Guest;
};

const GuestCard = ({ guest }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative w-full h-64 cursor-pointer">
        <Image
          src={guest.image}
          alt={guest.name}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="p-5 text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{guest.name}</h3>

        <p className="text-blue-600 font-medium">{guest.role}</p>
      </div>
    </div>
  );
};

export default GuestCard;
