import { EducationStage } from "../types";

export const education: EducationStage[] = [
  {
    school: { name: "The Internet" },
    startDate: new Date("1997-07-07"),
    description: `\
Self-taught with the help of the Internet and its wonderful crowd of passionate technologists who share their knowledge.
Still on-going.
`,
  },
  {
    school: {
      name: "University of Lorraine",
      url: "https://welcome.univ-lorraine.fr/en/",
      location: "Metz, France",
    },
    degree: "Master in Information Technology",
    startDate: new Date("2005-09-05"),
    endDate: new Date("2005-06-30"),
  },
];
