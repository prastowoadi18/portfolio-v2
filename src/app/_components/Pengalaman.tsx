import Image from "next/image";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import prisma from "@/lib/prisma";

import {
  ContentWrapper,
  Description,
  Separator,
  TechStackItem,
} from "@/components";

interface PengalamanProps {
  userId: string;
  page?: number;
}

const Pengalaman = async ({ userId, page = 2 }: PengalamanProps) => {
  const experienceJob = prisma.experienceJob.findMany({
    where: {
      userId: userId,
    },
    include: {
      experienceStack: {
        where: {
          userId: userId,
        },
        include: {
          techStack: true,
        },
      },
    },
    orderBy: {
      startDate: "desc",
    },
    take: page,
  });

  const experienceJobCount = prisma.experienceJob.count({
    where: {
      userId: userId,
    },
  });

  const [data, dataCount] = await Promise.all([
    experienceJob,
    experienceJobCount,
  ]);

  return (
    <ContentWrapper title="Pengalaman">
      <div className="">
        <div className="mt-10 grid grid-cols-1 gap-10">
          {data.map((e) => (
            <div className="flex space-x-4" key={e.title}>
              <Image
                src={e.logo}
                alt={`img-${e.title}`}
                width={50}
                height={50}
                className={cn("self-center", {
                  "self-center rounded-md border":
                    e.title === "PT Ismaya Group",
                })}
              />
              <div className="flex-grow">
                <h3 className="text-sm font-semibold">{e.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {e.title} | {e.type} | {e.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(e.startDate), "MMMM yyyy")} -{" "}
                  {format(new Date(e.endDate), "MMMM yyyy")}
                </p>
                <Description
                  id={`pengalaman-desc-${e.title}`}
                  text={e.desc}
                  className="my-5 text-sm text-muted-foreground"
                />
                <TechStackItem data={e.experienceStack} />
              </div>
            </div>
          ))}
        </div>

        {dataCount > 2 && (
          <Separator
            length={dataCount}
            searchParams={`experienceJob=${dataCount}`}
          />
        )}
      </div>
    </ContentWrapper>
  );
};

export default Pengalaman;
