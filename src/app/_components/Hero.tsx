import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { User } from "@prisma/client";

import prisma from "@/lib/prisma";

interface HeroProps {
  profile: User;
}

const Hero = async ({ profile }: HeroProps) => {
  const socialMedia = prisma.socialMedia.findMany({
    where: {
      userId: profile.id,
    },
  });

  const education = prisma.education.findMany({
    where: {
      userId: profile.id,
    },
  });

  const experienceJob = prisma.experienceJob.findMany({
    where: {
      userId: profile.id,
      active: true,
    },
  });

  const [profileSocialMedia, profileEducation, profileExperienceJob] =
    await Promise.all([socialMedia, education, experienceJob]);

  return (
    <section className="">
      <div className="relative h-1/2 w-full bg-gradient-to-b from-blue-300 p-14">
        <div className="absolute left-5 top-14">
          <Image
            src={profile.profileImg}
            width={110}
            height={110}
            alt={`img-${profile.name}`}
            className="rounded-full border-[4px] border-white"
            priority
          />
        </div>
      </div>
      <div className="px-5 py-[4.5rem]">
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-lg font-semibold">{profile.name}</h1>
            <h2 className="text-sm text-muted-foreground">
              {profileExperienceJob[0].role}
            </h2>
            <p className="mt-5 text-xs text-muted-foreground md:mt-3">
              <span className="md:hidden">
                {profileExperienceJob[0].type} at{" "}
                {profileExperienceJob[0].title} | {profileEducation[0].title} |
              </span>{" "}
              {profile.currentLocation}
            </p>
          </div>
          <div className="hidden md:flex md:flex-col md:justify-between md:gap-3">
            <div className="flex items-center space-x-4">
              <Image
                src={profileExperienceJob[0].logo}
                alt={`img-${profileExperienceJob[0].title}`}
                width={35}
                height={35}
                className="self-center rounded-md border"
              />
              <div className="flex-grow">
                <h3 className="text-sm">{profileExperienceJob[0].title}</h3>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={profileEducation[0].logo}
                alt={`img-${profileEducation[0].title}`}
                width={35}
                height={35}
                className="self-center"
              />
              <div className="flex-grow">
                <h3 className="text-sm">{profileEducation[0].title}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 flex space-x-4">
          {profileSocialMedia.map((e) => (
            <Link
              href={e.link}
              aria-label={e.title}
              key={e.title}
              target="_blank"
              className="transition-all duration-300 ease-in-out hover:scale-125"
            >
              {e.title === "Github" ? (
                <FaGithub size={20} />
              ) : e.title === "Instagram" ? (
                <FaInstagram size={20} />
              ) : (
                <FaLinkedin size={20} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
