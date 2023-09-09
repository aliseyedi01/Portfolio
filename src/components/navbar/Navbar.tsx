"use client";
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
import { usePathname } from "next/navigation";
import { useScrollPercentage } from "@/hooks/useScrollPercentage";
import { LanguageSwitcher } from "..";
import { Locale } from "@/lib/i18n.config";
// types
interface NavItem {
  name: any;
  link: string;
  icon: React.ReactNode;
}

export default function Navbar({ lang }: { lang: Locale }) {
  const scrollPercentage = useScrollPercentage();
  const inverseScrollPercentage = 100 - scrollPercentage;
  const shadowHeader = Number(scrollPercentage) < 80;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  const navItemsData: NavItem[] = [
    {
      name: "home",
      link: "/#home",
      icon: <HomeIcon />,
    },
    {
      name: "about",
      link: "/#about",
      icon: <InfoCircledIcon />,
    },
    {
      name: "skills",
      link: "/#skills",
      icon: <RocketIcon />,
    },
    {
      name: "projects",
      link: "/#projects",
      icon: <LaptopIcon />,
    },
    {
      name: "contact",
      link: "/#contact",
      icon: <ChatBubbleIcon />,
    },
  ];

  useEffect(() => {
    // Callback function when an observed section comes into view
    const handleSectionIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleSectionIntersect, {
      rootMargin: "-50% 0px -50% 0px",
    });
    // Observe each section
    navItemsData.forEach((item) => {
      const section = document.getElementById(item.name);
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="relative">
      {/* Desktop & Mobile header */}
      <header
        className={`fixed top-0 z-50 flex h-14 w-full items-center justify-between p-2 px-4  shadow-blue-100 backdrop-blur-md ${
          shadowHeader
            ? "shadow-[0_0_20px_5px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_5px_rgba(80,92,212,0.6)]"
            : ""
        } `}
      >
        {/* Title */}
        <h2 className="font-alkatra text-base md:text-lg">Ali Seyedi</h2>

        {/* Items */}
        <nav className="hidden translate-x-6 items-center gap-6 md:flex">
          {navItemsData.map((item) => (
            <Link
              href={`/${lang}${item.link}`}
              key={item.name}
              className={`flex items-center gap-1 font-ubuntu font-medium capitalize hover:border-b ${
                activeSection == item.name.toLowerCase()
                  ? "border-b border-indigo-500 text-indigo-800 dark:text-indigo-500"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Buttons */}
        <div className="flex items-center gap-2 font-kanit">
          {/* Resume */}
          <Link href="/fa/resume">
            <Button
              size="icon"
              className="rounded-full bg-blue-600 text-xs text-white  md:text-base"
            >
              CV
            </Button>
          </Link>
          {/* Bilingual */}
          <LanguageSwitcher />
          {/* DarkMode */}
          <ModeToggle />
        </div>
      </header>
      {/* Mobile header */}
      <header className="fixed bottom-2 left-0 z-50 w-full p-2 md:hidden">
        <nav className="mx-5 flex items-center justify-center gap-12 overflow-hidden rounded-full border border-indigo-400 py-2 backdrop-blur-lg dark:border-red-500">
          {navItemsData.map((item) => (
            <Link key={item.link} href={item.link} className="flex items-center gap-1">
              <span
                className={`z-40 font-bold text-black transition-all duration-100 dark:text-yellow-400 ${
                  activeSection == item.name.toLowerCase() ? "scale-125 text-red-600" : ""
                }`}
              >
                {item.icon}
              </span>
            </Link>
          ))}
          {/* background scroll */}
          <div
            style={{ width: `${inverseScrollPercentage}%` }}
            className="absolute inset-0 -z-10 h-full bg-blue-500"
          ></div>
        </nav>
      </header>
    </div>
  );
}
