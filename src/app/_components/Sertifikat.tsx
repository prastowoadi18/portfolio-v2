import Link from "next/link";
import { format } from "date-fns";

import { buttonVariants } from "@/components/ui/button";
import { ContentWrapper, Description, Separator } from "@/components";

import prisma from "@/lib/prisma";

interface SertifikatProps {
  userId: string;
  page?: number;
}

const Sertifikat = async ({ userId, page = 2 }: SertifikatProps) => {
  const sertifikat = prisma.certificate.findMany({
    where: {
      userId: userId,
    },
    take: page,
    orderBy: {
      startDate: "desc",
    },
  });
  const countSertifikat = prisma.certificate.count({
    where: {
      userId: userId,
    },
  });

  const [data, countData] = await Promise.all([sertifikat, countSertifikat]);

  return (
    <ContentWrapper title="Sertifikat">
      <div className="">
        <div className="mt-5 grid grid-cols-1 gap-10">
          {data.map((e) => (
            <div className="" key={e.title}>
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-sm font-semibold">{e.title}</h2>
                  <p className="text-sm text-muted-foreground">{e.from}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(e.startDate), "MMMM yyyy")} -{" "}
                    {format(new Date(e.endDate), "MMMM yyyy")}
                  </p>
                </div>
                {e.link === "" && (
                  <Link
                    href={e.link}
                    className={buttonVariants({
                      size: "sm",
                      variant: "secondary",
                      className: "text-xs",
                    })}
                  >
                    Lihat sertifikat
                  </Link>
                )}
              </div>

              <Description
                id={`certificate-desc-${e.title}`}
                text={e.desc}
                className="mt-4 text-sm text-muted-foreground"
              />
            </div>
          ))}
        </div>
        {countData > 2 && (
          <Separator
            length={countData}
            lengthNow={data.length}
            searchParams={
              data.length === countData ? "" : `certificate=${countData}`
            }
          />
        )}
      </div>
    </ContentWrapper>
  );
};

export default Sertifikat;
