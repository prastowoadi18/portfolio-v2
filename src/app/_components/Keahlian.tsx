import { ContentWrapper, Separator } from "@/components";
import prisma from "@/lib/prisma";

interface KeahlianProps {
  userId: string;
  page?: number;
}

const Keahlian = async ({ userId, page = 5 }: KeahlianProps) => {
  const data = prisma.techStack.findMany({
    include: {
      experienceStack: {
        where: {
          userId: userId,
        },
        include: {
          experienceJob: true,
        },
      },
    },
    take: page,
  });

  const countData = prisma.techStack.count();

  const [keahlian, totalResults] = await Promise.all([data, countData]);

  return (
    <ContentWrapper title="Keahlian">
      <div className="">
        <div className="mt-5 grid grid-cols-1 gap-5">
          {keahlian.map((e) => (
            <div className="" key={e.title}>
              <h2 className="text-sm font-semibold">{e.title}</h2>
              <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                {e.experienceStack.map((e) => (
                  <li key={e.id}>{e.experienceJob?.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {totalResults > 6 && (
          <Separator
            length={totalResults}
            searchParams={`skill=${totalResults}`}
          />
        )}
      </div>
    </ContentWrapper>
  );
};

export default Keahlian;
