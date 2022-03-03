/* eslint-disable sonarjs/no-duplicate-string */
import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    startDate: new Date("2021-01-04"),
    location: "Metz, France",
    company: { name: "Happy Teams", url: "https://happyteams.events/en" },
    title: "Chief Technology Officer (& co-founder)",
    description: `\
* Hiring and management of the software engineering team (3 developers)
* Design of [The Diamond Heist](https://happyteams.events/en/the-diamond-heist) game
`,
    techStack: ["TypeScript", "Pulumi", "GraphQL", "AWS", "React"],
  },
  {
    startDate: new Date("2016-07-25"),
    endDate: new Date("2020-09-30"),
    location: "Hong Kong",
    company: { name: "AXA Investment Managers Chorus" },
    title: "Chief Technology Officer",
    description: `\
* Hiring and management of the software engineering team (20 developers)
* Design and management the fund's Cloud infrastructure on AWS
* Design and implementation of the job scheduling system
`,
    techStack: [
      "Linux",
      "AWS",
      "Python",
      "Terraform",
      "Puppet",
      "Django",
      "Pandas",
    ],
  },
  {
    startDate: new Date("2015-09-26"),
    endDate: new Date("2021-12-31"),
    location: "Metz, France",
    company: { name: "The Box Escape Games", url: "https://the-box.fr/en/" },
    title: "Chief Technology Officer (& co-founder)",
    description: "Design & implementation of several in-room games",
    techStack: [
      "Linux",
      "Raspberry Pi",
      "Arduino",
      "Python",
      "React",
      "TypeScript",
      "JavaScript",
      "AWS",
      "Pulumi",
    ],
  },
  {
    startDate: new Date("2015-09-07"),
    endDate: new Date("2016-07-08"),
    location: "Paris, France",
    company: { name: "Criteo", url: "https://criteo.com" },
    title: "Lead Software Engineer",
    description: `\
* Built a software engineering team focused on infrastructure automation software
* Design of a Data Center Information Management system (DCIM)
`,
    techStack: ["Python", "Django", "Linux"],
  },
  {
    startDate: new Date("2013-10-07"),
    endDate: new Date("2015-08-14"),
    location: "Paris, France",
    company: { name: "Capital Fund Management", url: "https://www.cfm.fr" },
    title: "Software Engineer",
    description: `\
* Development of data management systems
* Development of the research job management service
* Automation of production jobs management (CICD)
* Refactoring of research code for production
`,
    techStack: ["Linux", "Slurm", "Python", "Pandas", "Puppet"],
  },
  {
    startDate: new Date("2010-02-01"),
    endDate: new Date("2013-10-04"),
    location: "Paris, France",
    company: { name: "Capital Fund Management", url: "https://www.cfm.fr" },
    title: "Systems Engineer",
    description: `\
* Design, deployment, management & support of the research HPC platform
* Design, deployment & management of the logging platform
* Management of Atlassian services
`,
    techStack: [
      "Linux",
      "Puppet",
      "Sun Grid Engine",
      "GlusterFS",
      "Python",
      "rsyslog",
      "Atlassian Crowd SSO",
      "Atlassian Confluence",
      "Atlassian JIRA",
    ],
  },
  {
    startDate: new Date("2008-10-20"),
    endDate: new Date("2009-09-11"),
    location: "Remote",
    company: { name: "Tapinoma" },
    title: "Systems Engineer",
    description: `\
* Design, deployment and management of the company network infrastructure
* Design, deployment and management of the software engineering stack for iOS apps developers
`,
    techStack: [
      "Mac OS X Server",
      "Cisco PIX",
      "Cisco Switches",
      "Atlassian Crowd SSO",
      "Atlassian Confluence",
      "Atlassian JIRA",
      "Atlassian Bamboo",
      "Subversion",
      "Linux",
    ],
  },
  {
    startDate: new Date("2007-03-05"),
    endDate: new Date("2008-10-17"),
    location: "Paris, France",
    company: { name: "Altran", url: "https://altran.fr" },
    title: "Network Security Instructor & Training Center Manager",
    description: `\
* Setup of a network security training center in partnership with Juniper Networks
* Taught Juniper Networks technologies to 200+ engineers
* Managed 1 instructor
* Design and management of the training center infrastructure
`,
    techStack: [
      "ScreenOS",
      "JUNOS",
      "Linux",
      "Firewall",
      "BGP",
      "OSPF",
      "IPSec",
    ],
  },
  {
    startDate: new Date("2006-12-01"),
    endDate: new Date("2007-01-31"),
    location: "Paris, France",
    company: { name: "Kewego", url: "https://en.wikipedia.org/wiki/Kewego" },
    title: "Network Engineer",
    description: "Design and deployment of AS42096 BGP routers",
    techStack: ["BGP", "OpenBSD"],
  },
  {
    startDate: new Date("2006-06-26"),
    endDate: new Date("2006-10-27"),
    location: "Paris, France",
    company: { name: "Juniper Networks", url: "https://juniper.net" },
    title: "Systems Engineer, Intern",
    description: `\
* Lab network refactoring and documentation
* Various troubleshooting and PoCs
`,
    techStack: ["JUNOS", "ScreenOS", "Linux", "OSPF", "BGP", "IPSec"],
  },
  {
    startDate: new Date("2001-07-23"),
    endDate: new Date("2005-08-19"),
    location: "Paris, France",
    company: { name: "Waycom", url: "https://waycom.net" },
    title: "Chief Technology Officer",
    description: `\
* Managed the tech team (10 engineers)
* Design and implementation of the AS30889 network
* Design of large scale IPSec networks
* Design of the company ISP-grade systems (DNS, e-mail, monitoring, etc.)
`,
    techStack: [
      "Linux",
      "Cisco IOS",
      "ScreenOS",
      "qmail",
      "OpenLDAP",
      "bind",
      "Nagios",
      "IPSec",
      "OSPF",
      "BGP",
      "perl",
      "bash",
    ],
  },
  {
    startDate: new Date("2001-07-23"),
    endDate: new Date("2003-12-31"),
    location: "Paris, France",
    company: { name: "Waycom", url: "https://waycom.net" },
    title: "Systems & Networks Engineer",
    description: "Design and management of customers Internet infrastructures",
    techStack: [
      "Linux",
      "FreeBSD",
      "sendmail",
      "qmail",
      "Apache",
      "Tomcat",
      "PHP",
      "bash",
      "perl",
      "Cisco IOS",
    ],
  },
];
