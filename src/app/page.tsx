import {
  Hero,
  Sertifikat,
  Pendidikan,
  Pengalaman,
  Tentang,
  Project,
  Keahlian,
} from "./_components";

import prisma from "@/lib/prisma";

interface PageProps {
  searchParams: {
    experienceJob?: string;
    certificate?: string;
    skill?: string;
    project?: string;
  };
}

export default async function Home({
  searchParams: { experienceJob, certificate, skill, project },
}: PageProps) {
  const user = await prisma.user.findMany({
    where: {
      name: "Prastowo Adi Nugroho",
    },
  });

  if (!user) {
    return null;
  }

  return (
    <main className="mx-auto bg-white md:max-w-screen-md">
      <Hero profile={user[0]} />
      <Tentang about={user[0].about!} />
      <Pengalaman
        userId={user[0].id}
        page={experienceJob ? parseInt(experienceJob) : undefined}
      />
      <Pendidikan userId={user[0].id} />
      <Sertifikat
        userId={user[0].id}
        page={certificate ? parseInt(certificate) : undefined}
      />
      <Project
        userId={user[0].id}
        page={project ? parseInt(project) : undefined}
      />
      <Keahlian
        userId={user[0].id}
        page={skill ? parseInt(skill) : undefined}
      />
    </main>
  );
}
