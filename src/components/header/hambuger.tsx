import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../../routes";

export const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
  
    useClickAway(ref, () => setOpen(false));
  
    return (
      <div ref={ref} className="lg:hidden h-full max-w-full">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        {isOpen && (
          <div className="shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-[#2B2F30] max-w-full">
            <ul className="grid gap-2">
              {routes.map((route) => {  
                return (
                  <li
                    key={route.title}
                    className="p-[0.08rem] rounded-xl color"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      target={route.target}
                      className={
                        "flex items-center justify-between w-full"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg text-[#ACA7A7]">{route.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  };