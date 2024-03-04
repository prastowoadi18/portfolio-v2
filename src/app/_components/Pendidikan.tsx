import Image from "next/image";
import { format } from "date-fns";

import ContentWrapper from "@/components/ContentWrapper";

import prisma from "@/lib/prisma";

interface PendidikanProps {
  userId: string;
}

const Pendidikan = async ({ userId }: PendidikanProps) => {
  const data = await prisma.education.findMany({
    where: {
      userId: userId,
    },
  });
  return (
    <ContentWrapper title="Pendidikan">
      <div className="mt-10 flex space-x-4">
        <Image
          src={data[0].logo}
          alt={`img-${data[0].title}`}
          width={50}
          height={50}
          className="self-center"
        />
        <div className="flex-grow">
          <h3 className="text-sm font-semibold">{data[0].title}</h3>
          <p className="text-sm text-muted-foreground">{data[0].desc}</p>
          <p className="text-sm text-muted-foreground">
            {format(new Date(data[0].startDate), "yyyy")} -{" "}
            {format(new Date(data[0].endDate), "yyyy")}
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Pendidikan;
