// react
import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  InfoCircledIcon,
  RocketIcon,
  ChatBubbleIcon,
  LaptopIcon,
} from "@radix-ui/react-icons";
// next
import Link from "next/link";
// component
import { ModeToggle } from "../theme/ModeToggle";
import { Button } from "../ui/button";
import { LanguageSwitcher } from "..";
// i18n
import { Locale } from "@/lib/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { headers } from "next/headers";
import { getScrollPercentage } from "@/lib/scrollPercentage";
import { useScrollPercentage } from "@/hooks/useScrollPercentage";

const Navbar1: React.FC<{ lang: Locale }> = async ({ lang }) => {
  const { header } = await getDictionary(lang);

  const navItemsData = [
    {
      name: `${header.home}`,
      link: "/#home",
      icon: <HomeIcon />,
    },
    {
      name: `${header.about}`,
      link: "/#about",
      icon: <InfoCircledIcon />,
    },
    {
      name: `${header.Skills}`,
      link: "/#skills",
      icon: <RocketIcon />,
    },
    {
      name: `${header.Project}`,
      link: "/#projects",
      icon: <LaptopIcon />,
    },
    {
      name: `${header.contact}`,
      link: "/#contact",
      icon: <ChatBubbleIcon />,
    },
  ];

  return (
    <>
      {/* Title */}
      <h2 className="font-alkatra text-base rtl:font-iranSans rtl:font-bold md:text-lg">
        {header.name}
      </h2>
      {/* Items */}
      <nav className="hidden translate-x-6 items-center gap-6 md:flex">
        {navItemsData.map((item) => (
          <Link
            href={`/${lang}${item.link}`}
            key={item.name}
            className={`flex items-center gap-1 rounded-lg px-2 py-1 font-medium capitalize hover:border-b  hover:bg-blue-400 ltr:font-ubuntu rtl:font-vazir dark:hover:bg-blue-800`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {/* Buttons */}
      <div className="flex items-center gap-2 font-kanit">
        {/* Resume */}
        <Link href="/resume">
          <Button size="icon" className="rounded-full bg-blue-600 text-xs text-white  md:text-base">
            CV
          </Button>
        </Link>
        {/* Bilingual */}
        <LanguageSwitcher />
        {/* DarkMode */}
        <ModeToggle />
      </div>
    </>
  );
};

export default Navbar1;
// // react
// import React, { useState, useEffect } from "react";
// import {
//   HomeIcon,
//   InfoCircledIcon,
//   RocketIcon,
//   ChatBubbleIcon,
//   LaptopIcon,
// } from "@radix-ui/react-icons";
// // next
// import Link from "next/link";
// // component
// import { ModeToggle } from "../theme/ModeToggle";
// import { Button } from "../ui/button";
// import { LanguageSwitcher } from "..";
// // i18n
// import { Locale } from "@/lib/i18n.config";
// import { getDictionary } from "@/lib/dictionary";
// import { headers } from "next/headers";
// import { getScrollPercentage } from "@/lib/scrollPercentage";
// import { useScrollPercentage } from "@/hooks/useScrollPercentage";

// const Navbar1: React.FC<{ lang: Locale }> = async ({ lang }) => {
//   const { header } = await getDictionary(lang);

//   const navItemsData = [
//     {
//       name: `${header.home}`,
//       link: "/#home",
//       icon: <HomeIcon />,
//     },
//     {
//       name: `${header.about}`,
//       link: "/#about",
//       icon: <InfoCircledIcon />,
//     },
//     {
//       name: `${header.Skills}`,
//       link: "/#skills",
//       icon: <RocketIcon />,
//     },
//     {
//       name: `${header.Project}`,
//       link: "/#projects",
//       icon: <LaptopIcon />,
//     },
//     {
//       name: `${header.contact}`,
//       link: "/#contact",
//       icon: <ChatBubbleIcon />,
//     },
//   ];

//   return (
//     <div className="relative">
//       {/* Desktop & Mobile header */}
//       <header
//         className={`fixed top-0 z-50 flex h-14 w-full items-center justify-between p-2 px-4  shadow-blue-100 backdrop-blur-md`}
//       >
//         {/* Title */}
//         <h2 className="font-alkatra text-base rtl:font-iranSans rtl:font-bold md:text-lg">
//           {header.name}
//         </h2>
//         {/* Items */}
//         <nav className="hidden translate-x-6 items-center gap-6 md:flex">
//           {navItemsData.map((item) => (
//             <Link
//               href={`/${lang}${item.link}`}
//               key={item.name}
//               className={`flex items-center gap-1 rounded-lg px-2 py-1 font-medium capitalize hover:border-b  hover:bg-blue-400 ltr:font-ubuntu rtl:font-vazir dark:hover:bg-blue-800`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//         {/* Buttons */}
//         <div className="flex items-center gap-2 font-kanit">
//           {/* Resume */}
//           <Link href="/resume">
//             <Button
//               size="icon"
//               className="rounded-full bg-blue-600 text-xs text-white  md:text-base"
//             >
//               CV
//             </Button>
//           </Link>
//           {/* Bilingual */}
//           <LanguageSwitcher />
//           {/* DarkMode */}
//           <ModeToggle />
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar1;