import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProjectCard: React.FC = () => {
  return (
    <div className="flex h-[22rem] w-full flex-col items-center justify-around rounded-lg border border-indigo-950 hover:shadow-lg hover:shadow-violet-200 dark:border-indigo-500 md:w-[23%]">
      {/* Cover Project */}
      <Link href="project/project1">
        <Image
          src="/image/projects/project1.png"
          width="300"
          height="400"
          alt="singleProject"
          className="rounded-lg"
        />
      </Link>
      <div className="flex w-full flex-col items-center justify-center gap-3 px-6">
        {/* Title */}
        <p className="self-center text-center font-sans font-bold">Admin Panel</p>
        {/* Description */}
        <p className="w-full text-justify text-sm">
          A comprehensive admin panel for managing your application with ease.A comprehensive admin
          panel for managing your application with ease.
        </p>
        {/* Read more link */}
        {/* <Link
          href="project/project1"
          className="self-end px-2 py-1 hover:underline hover:underline-offset-2"
        >
          Read more
        </Link> */}
        <Link
          href="project/project1"
          className="group self-end px-2 py-1 text-indigo-600 transition-all duration-200 ease-in-out dark:text-white"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-700 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-slate-600 dark:to-slate-50">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;