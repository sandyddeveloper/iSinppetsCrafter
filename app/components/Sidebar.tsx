"use client";
import React, { useState } from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { languages, navItems } from "../lib/data";

export default function Sidebar() {
  return (
    <div
      className={`max-md:hidden pr-10 p-6 flex flex-col gap-2  h-full pt-7 dark:bg-black z-50 transition-transform transform`}
    >
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-purple p-[6px] rounded-md">
        <CodeOffIcon
          sx={{
            fontSize: 27,
            color: "white",
            stroke: "white", // Add stroke color
            strokeWidth: 1.5,
          }}
        />
      </div>
      <div>
        <span className="font-extrabold text-purple text-2xl dark:text-purple">
          iSnippet
        </span>
        <span className="text-slate-600 font-extrabold text-2xl dark:text-slate-300">
          Crafter
        </span>
      </div>
    </div>
  );
}

function QuickLinks() {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  return (
    <div className="mt-8 text-sm">
      <div className="font-extrabold text-slate-400 dark:text-slate-300">
        Quick Links
      </div>
      <ul className="text-slate-400 mt-4 flex flex-col ml-2 font-semibold dark:text-slate-300">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          return (
            <li
              key={item.label}
              className={`items-end flex gap-4 cursor-pointer p-2 rounded-md ${
                isActive ? "bg-purple text-white" : ""
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <Icon />
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Languages() {
  const [activeLanguage, setActiveLanguage] = useState<string>("Javascript");

  return (
    <div className="mt-6 text-sm dark:bg-black">
      <div className="text-slate-400 font-extrabold dark:text-slate-300">
        Languages
      </div>
      <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4 dark:text-slate-300">
        {languages.map((lang, index) => {
          const Icon = lang.icon;
          const isActive = activeLanguage === lang.name;
          return (
            <div
              key={index}
              className={`items-end flex justify-between cursor-pointer p-2 rounded-md ${
                isActive ? "bg-purple text-white" : " "
              }`}
              onClick={() => setActiveLanguage(lang.name)}
            >
              <div className="flex gap-1 items-center">
                <Icon size={15} /> {lang.name}
              </div>
              <span className="font-bold">{lang.score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
