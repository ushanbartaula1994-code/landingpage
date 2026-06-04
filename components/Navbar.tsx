"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname=usePathname()
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About Event", href: "/about" },
    { name: "Speakers", href: "/speakers" },
    { name: "Schedules", href: "/schedules" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="sticky top-0 z-50 bg-white border-b shadow-sm"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={60} height={60} priority />
          <h2 className="font-semibold text-lg text-black">Academic Event</h2>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navlinks.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1 rounded-full transition-all duration-200
    ${
      isActive
        ? "bg-black text-white"
        : "text-gray-600 hover:text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
    }
  `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Link
          href="/register"
          className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:scale-[1.03] active:scale-95
          transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Register Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
