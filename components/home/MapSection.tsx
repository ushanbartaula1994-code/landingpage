export default function MapSection() {
  return (
    <section id="location" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Event Location
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Find Your Way to the Ceremony
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at the university main hall for the graduation ceremony.
          </p>
        </div>
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Kathmandu University&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-slate-50 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">Venue</h3>
            <p className="text-gray-600 mt-1">University Main Hall</p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">Time</h3>
            <p className="text-gray-600 mt-1">10:00 AM - 2:00 PM</p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <p className="text-gray-600 mt-1">+977-98XXXXXXXX</p>
          </div>
        </div>

        {/* Link */}
        <div className="text-center mt-8">
          <a
            href="https://maps.google.com"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
