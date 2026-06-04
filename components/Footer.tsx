import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <h2 className="text-xl font-bold mb-3">Graduation Ceremony</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Celebrating academic excellence and honoring the achievements of
              our graduating class.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/guests">Guests</Link>
              </li>
              <li>
                <Link href="/schedule">Schedule</Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3">Event Info</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Date: June 2026</li>
              <li>Venue: University Hall</li>
              <li>Time: 10:00 AM</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Email: info@university.edu</li>
              <li>Phone: +977-98XXXXXXXX</li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Graduation Ceremony. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
