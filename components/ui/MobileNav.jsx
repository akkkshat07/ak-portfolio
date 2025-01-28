"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react"; // Add this import
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // Add state for sheet
  const pathname = usePathname();

  const links = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "about", path: "/About" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl"></div>
        <Link href="/assets/A.png">
          <h1 className="text-4xl font-semibold text-center">
            Akshat<span className="text-accent">.</span>
          </h1>
        </Link>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setIsOpen(false)} // Add onClick to close sheet
                className={`${
                  link.path === pathname && "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
