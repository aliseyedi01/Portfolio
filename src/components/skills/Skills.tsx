import React from "react";
import {
  BiLogoTypescript,
  BiLogoSass,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoCss3,
  BiLogoRedux,
  BiCodeAlt,
  BiLogoGit,
} from "react-icons/bi";
import {
  SiPostman,
  SiAntdesign,
  SiGithub,
  SiBootstrap,
  SiNextdotjs,
  SiFirebase,
  SiSupabase,
  SiFigma,
  SiTailwindcss,
  SiMui,
  SiReactquery,
} from "react-icons/si";
// i18n
import { getDictionary } from "@/lib/dictionary";
// types
import { LangProps } from "@/types/common";

const Skills: React.FC<LangProps> = async ({ lang }) => {
  const { skill } = await getDictionary(lang);

  const skillCategories = [
    {
      title: `${skill.language}`,
      skills: [
        { name: "JavaScript", icon: <BiLogoJavascript />, color: "text-yellow-500" },
        { name: "TypeScript", icon: <BiLogoTypescript />, color: "text-blue-500" },
      ],
    },
    {
      title: `${skill.library}`,
      skills: [
        { name: "React.js", icon: <BiLogoReact />, color: "text-blue-600" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-teal-500" },
        { name: "Redux", icon: <BiLogoRedux />, color: "text-purple-500" },
        { name: "Redux Toolkit", icon: <BiLogoRedux />, color: "text-red-600" },
        { name: "Redux Query", icon: <SiReactquery />, color: "text-red-400" },
      ],
    },
    {
      title: `${skill.style}`,
      skills: [
        { name: "CSS", icon: <BiLogoCss3 />, color: "text-indigo-500" },
        { name: "Sass", icon: <BiLogoSass />, color: "text-pink-500" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
      ],
    },
    {
      title: `${skill.component}`,
      skills: [
        { name: "Material-UI", icon: <SiMui />, color: "text-blue-500" },
        { name: "Ant Design", icon: <SiAntdesign />, color: "text-red-600" },
        { name: "Shadcn UI", icon: <BiCodeAlt />, color: "text-indigo-500" },
      ],
    },
    {
      title: `${skill.tool}`,
      skills: [
        { name: "Git", icon: <BiLogoGit />, color: "text-orange-500" },
        { name: "GitHub", icon: <SiGithub />, color: "text-gray-900 dark:text-white" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-600" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
        { name: "Supabase", icon: <SiSupabase />, color: "text-blue-500" },
        { name: "Figma", icon: <SiFigma />, color: "text-purple-600" },
      ],
    },
  ];
  return (
    <div
      id="skills"
      className="grid h-fit w-full snap-center grid-cols-1 place-content-center place-items-center gap-6 p-5 pt-14 md:h-screen md:grid-cols-3 md:p-10"
    >
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="flex h-full w-full flex-col items-start justify-start rounded-xl p-2 "
        >
          <h3 className="w-full pb-1 text-xl font-semibold text-primary ltr:font-ubuntu rtl:font-arSans">
            {category.title}
          </h3>
          <hr className="h-1 w-full rounded-full border-0 from-primary to-background ltr:bg-gradient-to-r rtl:bg-gradient-to-l" />
          <div className="grid w-full grid-flow-col grid-cols-2 grid-rows-3 place-items-start justify-center gap-1 space-y-1 p-2">
            {category.skills.map((skill, index) => (
              <p key={index} className="flex items-center gap-2 font-kanit">
                <span className={`dark:text-orange-500" text-xl ${skill.color}`}>{skill.icon}</span>
                {skill.name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
