import Image from "next/image"
import { easeInOut, motion } from "motion/react";
type HeroProps = {
    onRegister: () => void;
}
const HeroSection = ({ onRegister }: HeroProps) => {
  
  

  return (
    <section className="relative w-full min-h-[80vh] flex items-center">
      <Image
        src="/bgim.jpg"
        alt="Event Background"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 min-h-[80vh] items-center">
          <div className="space-y-6 max-w-xl text-center md:text-left mx-auto md:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Celebrate Academic Excellence at Graduation Ceremony
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 2 }}
              className="text-gray-200 text-sm sm:text-base "
            >
              Join students, faculty, and guests for a prestigious graduation
              ceremony celebrating academic achievements and milestones.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center md:justify-start"
            >
              <button
                type="button"
                onClick={onRegister}
                className="bg-white cursor-pointer text-black px-5 py-2 rounded-md font-medium hover:scale-105 active:scale-95 transition"
              >
                Register Now
              </button>

              <button
                type="button"
                className="border cursor-pointer border-white text-white px-5 py-2 rounded-md font-medium hover:bg-white hover:text-black active:scale-95 transition"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
