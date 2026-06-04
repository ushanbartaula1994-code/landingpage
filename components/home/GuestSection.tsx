import GuestCard from "@/components/Guest/GuestCard";
import { guests } from "@/lib/data";
const GuestsSection = () => {
  return (
    <section id="guests" className="w-full py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-3 mb-12">
          <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
           
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Honored Guests
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating the presence of distinguished personalities who inspire
            and guide our graduating class toward a brighter future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guests.map((guest) => (
            <GuestCard key={guest.name} guest={guest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestsSection;
