import Image from "next/image"
import Link from "next/link";
import { Check } from "lucide-react";
const AboutSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className=" relative w-full h-[350px] sm:h-[450px] md:h-[500px] ">
            <Image
              src="/bgim.jpg"
              alt="Acedemic Event"
              fill
              className="object-cover rounded-xl shadow-lg"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

          <div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Celebrating Academic Excellence and Achievement
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Join us as we honor the accomplishments of our graduating class
                in a memorable ceremony attended by faculty, families, and
                distinguished guests. Together, we celebrate years of
                dedication, perseverance, and success as students embark on the
                next chapter of their journey.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span>
                    <Check className="w-5 h-5  text-blue-600 flex-shrink:0" />
                  </span>
                  <span className="text-slate-700">
                    Degree Conferral Ceremony
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span>
                    <Check className="w-5 h-5   text-blue-600 flex-shrink:0" />
                  </span>
                  <span className="text-slate-700">
                    Inspirational Guest Speakers
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span>
                    <Check className="w-5 h-5   text-blue-600 flex-shrink:0" />
                  </span>
                  <span className="text-slate-700">
                    Student Awards & Recognition
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span>
                    <Check className="w-5 h-5 text-blue-600 flex-shrink:0" />
                  </span>
                  <span className="text-slate-700">
                    Graduation Photography Session
                  </span>
                </li>
              </ul>

              <Link
                href="/about"
                className="px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
