import Link from "next/link";

import { FaGithub, FaGlobe } from "react-icons/fa";

import {
  ContentWrapper,
  Description,
  Separator,
  TechStackItem,
} from "@/components";

import prisma from "@/lib/prisma";

interface ProjectProps {
  userId: string;
  page?: number;
}

const Project = async ({ userId, page = 2 }: ProjectProps) => {
  const project = prisma.project.findMany({
    where: {
      userId: userId,
    },
    include: {
      projectStack: {
        where: {
          userId: userId,
        },
        include: {
          techStack: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: page,
  });

  const projectCount = prisma.project.count({
    where: {
      userId: userId,
    },
  });

  const [data, countData] = await Promise.all([project, projectCount]);

  return (
    <ContentWrapper title="Project">
      <div className="">
        <div className="mt-5 grid grid-cols-1 gap-10">
          {data.map((e) => (
            <div className="" key={e.title}>
              <h2 className="text-sm font-semibold">{e.title}</h2>
              <Description
                id={`project-desc-${e.title}`}
                text={e.desc}
                className="mb-3 mt-2 text-sm text-muted-foreground"
              />
              <TechStackItem data={e.projectStack} />
              <div className="mt-7 flex items-center space-x-4">
                {e.linkDemo && (
                  <Link
                    href={e.linkDemo}
                    aria-label={e.linkDemo}
                    key={e.linkDemo}
                    target="_blank"
                    className="transition-all duration-300 ease-in-out hover:scale-125"
                  >
                    <FaGlobe size={20} />
                  </Link>
                )}

                {e.linkGit && (
                  <Link
                    href={e.linkGit}
                    aria-label={e.linkGit}
                    key={e.linkGit}
                    target="_blank"
                    className="transition-all duration-300 ease-in-out hover:scale-125"
                  >
                    <FaGithub size={20} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        {countData > 2 && (
          <Separator length={countData} searchParams={`project=${countData}`} />
        )}
      </div>
    </ContentWrapper>
  );
};

export default Project;
