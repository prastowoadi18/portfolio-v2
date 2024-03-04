const { userData, techStack } = require("./user-data");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    techStack.map(async (stack) => {
      await prisma.techStack.upsert({
        where: {
          title: stack.title,
        },
        update: stack,
        create: stack,
        // create: {
        //   id: "1",
        //   experienceJobId: "392a2de7-705f-40da-b3af-c345423f01e2",
        //   techStackId: "09d0e347-b696-47ec-a7be-a4683e6a3a3e",
        // },
        // create: {
        //   name: "Prastowo Adi Nugroho",
        //   profileImg: "/img-profile.jpg",
        //   currentLocation: "Jakarta, Indonesia",
        //   about:
        //     "Frontend Development enthusiast and highly experienced software engineer. Using NextJS and TypeScript as the technology, I am currently a Frontend Engineer. Collaboration-focused team members are dedicated to creating online apps that are useful, scalable, and aesthetically beautiful.",
        //   socialMedia: {
        //     create: [
        //       {
        //         title: "Github",
        //         link: "https://github.com/PrastowoAdi",
        //       },
        //       {
        //         title: "Instagram",
        //         link: "https://www.instagram.com/_prastowoadi/?hl=id",
        //       },
        //       {
        //         title: "LinkedIn",
        //         link: "https://www.linkedin.com/in/prastowo-adi-nugroho-0657b31b0",
        //       },
        //     ],
        //   },
        //   experienceJob: {
        //     create: [
        //       {
        //         title: "PT Ismaya Group",
        //         role: "Frontend Engineer",
        //         logo: "/logo1.png",
        //         desc: "Maintance Apps and developed web application using ReactJS, NextJs, Redux for management state, GitLab, and VsCode, Material UI.",
        //         location: "Jakarta, Indonesia",
        //         type: "Freelance",
        //         workType: "Onsite",
        //         active: true,
        //       },
        //       {
        //         title: "PT Jasa Kelola Asia",
        //         role: "Frontend Developer",
        //         logo: "/logo1.png",
        //         desc: "While working at PT Jasa Kelola Asia I worked in the position of frontend developer and my three month i was assigned to PT Legit Group. In PT Legit Group i developed web application using ReactJS, NextJs, Redux for management state, GitLab, and VsCode.",
        //         location: "Jakarta, Indonesia",
        //         type: "Contract",
        //         workType: "Onsite",
        //         active: false,
        //       },
        //       {
        //         title: "PT Mitra Integrasi Informatika",
        //         role: "Application Developer",
        //         logo: "/logo1.png",
        //         desc: "My first three months at PT Mitra Integrasi Informatika, I participated in the MII Bootcamp Academy program. At Bootcamp, I learned Java Programming Language and for the nal project, I build a Bootcamp Management Application using JAVA, after I nished Bootcamp I was assigned to PT. Bank Negara Indonesia become Switching and Interchange System for developing ATM, EDC, eChannel(iBank, SMSBank, mBank, etc) payment features at the middleware level using Base24",
        //         location: "Jakarta, Indonesia.",
        //         type: "Contract",
        //         workType: "Onsite",
        //         active: false,
        //       },
        //       {
        //         title: "PT Visionet Data Internasional",
        //         role: "Middleware",
        //         logo: "/logo1.png",
        //         desc: "While working at Visionet I worked in the position of middleware developer and i developed API authentication login using NodeJs ,API employee birthday and new hire service using WSO2 API Manager and WSO2 Enterprise Manager for Document Management Application Website. In here i also learn how to developed Search Engine service using Elasticsearch.",
        //         location: "Jakarta, Indonesia",
        //         type: "Internship",
        //         workType: "Onsite",
        //         active: false,
        //       },
        //     ],
        //   },
        //   education: {
        //     create: {
        //       title: "Universitas Kristen Satya Wacana",
        //       desc: "Bachelor's degree | Teknologi Informasi | Teknik Informatika",
        //       logo: "/logo2.png",
        //     },
        //   },
        //   certificate: {
        //     create: [
        //       {
        //         title: "Sertifikat1",
        //         from: "Udemy",
        //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores asperiores, eveniet mollitia reiciendis quia quis officiis. Velit deleniti id consequatur!, adipisicing elit. Dolores asperiores, eveniet mollitia reiciendis quia quis officiis.",
        //         link: "/",
        //       },
        //       {
        //         title: "Sertifikat2",
        //         from: "Udemy",
        //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores asperiores, eveniet mollitia reiciendis quia quis officiis. Velit deleniti id consequatur!, adipisicing elit. Dolores asperiores, eveniet mollitia reiciendis quia quis officiis.",
        //         link: "/hello",
        //       },
        //       {
        //         title: "Sertifikat3",
        //         from: "Udemy",
        //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores asperiores, eveniet mollitia reiciendis quia quis officiis. Velit deleniti id consequatur!, adipisicing elit. Dolores asperiores, eveniet mollitia reiciendis quia quis officiis.",
        //         link: "/",
        //       },
        //       {
        //         title: "Sertifikat4",
        //         from: "Udemy",
        //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores asperiores, eveniet mollitia reiciendis quia quis officiis. Velit deleniti id consequatur!, adipisicing elit. Dolores asperiores, eveniet mollitia reiciendis quia quis officiis.",
        //         link: "/hello",
        //       },
        //     ],
        //   },
        //   project: {
        //     create: [
        //       {
        //         title: "MyProject1",
        //         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        //         linkGit: "/halo",
        //         linkDemo: "",
        //       },
        //       {
        //         title: "MyProject2",
        //         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        //         linkGit: "/halo",
        //         linkDemo: "",
        //       },
        //       {
        //         title: "MyProject3",
        //         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        //         linkGit: "/halo",
        //         linkDemo: "",
        //       },
        //       {
        //         title: "MyProject4",
        //         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        //         linkGit: "/halo",
        //         linkDemo: "",
        //       },
        //     ],
        //   },
        //   // techStack: {
        //   //   create: [
        //   //     {
        //   //       title: "NextJS",
        //   //     },
        //   //     {
        //   //       title: "Material UI",
        //   //     },
        //   //     {
        //   //       title: "TailwindCSS",
        //   //     },
        //   //     {
        //   //       title: "CSS",
        //   //     },
        //   //     {
        //   //       title: "React query",
        //   //     },
        //   //     {
        //   //       title: "Redux toolkit",
        //   //     },
        //   //     {
        //   //       title: "BASE24",
        //   //     },
        //   //     {
        //   //       title: "TACL",
        //   //     },
        //   //     {
        //   //       title: "Postgresql",
        //   //     },
        //   //     {
        //   //       title: "Mysql",
        //   //     },
        //   //     {
        //   //       title: "Oracle",
        //   //     },
        //   //   ],
        //   // },
        // },
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
