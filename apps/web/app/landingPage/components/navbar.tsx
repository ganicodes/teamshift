"use client";

import { Button } from "@repo/ui/components/ui/button";
export function Navbar() {
  const navbarItems = [
    { name: "Getting Started", id: "getting-started" },
    { name: "Features", id: "features" },
    { name: "How it works", id: "how-it-works" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
  ];

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md flex place-content-between content-center">
      <div className="flex">
        {navbarItems.map((item, index) => (
          <section
            key={index}
            className="p-4 sm:text-sm md:text-lg border-y-0 cursor-pointer"
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </section>
        ))}
      </div>
      <div>
        <Button className="sm:text-sm md:text-lg m-2">Login</Button>
        <Button className="sm:text-sm md:text-lg m-2">Sign Up</Button>
      </div>
    </nav>
  );
}
