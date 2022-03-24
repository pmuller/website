import { EducationStage } from "../types";

export const education: EducationStage[] = [
  {
    school: {
      name: "The Internet",
      url: "https://en.wikipedia.org/wiki/Internet",
    },
    startDate: new Date("1997-07-07"),
    description: `\
Self-taught with the help of the Internet and its wonderful crowd of passionate technologists.
`,
  },
  {
    school: {
      name: "University of Lorraine",
      url: "https://welcome.univ-lorraine.fr/en/",
      location: "Metz, France",
    },
    degree: "Master of Information Technology",
    startDate: new Date("2005-09-05"),
    endDate: new Date("2006-06-30"),
    description: "Algorithms, C++, project management, IP networking, security",
  },
];
