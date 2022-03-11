/* eslint-disable sonarjs/no-duplicate-string */
import * as React from "react";

import { ExperienceStage } from "../types";

export const experience: ExperienceStage[] = [
  {
    startDate: new Date("2021-01-04"),
    location: "Metz, France",
    company: { name: "Happy Teams", url: "https://happyteams.events/en" },
    title: "Chief Technology Officer (& co-founder)",
    description: (
      <ul>
        <li>
          Hiring and management of the software engineering team (3 developers)
        </li>
        <li>
          Design of{" "}
          <a
            rel="noopener"
            target="_blank"
            href="https://happyteams.events/en/the-diamond-heist"
          >
            The Diamond Heist
          </a>{" "}
          game
        </li>
      </ul>
    ),
    techStack: ["TypeScript", "Pulumi", "GraphQL", "AWS", "React"],
  },
  {
    startDate: new Date("2016-07-25"),
    endDate: new Date("2020-09-30"),
    location: "Hong Kong",
    company: { name: "AXA Investment Managers Chorus" },
    title: "Chief Technology Officer",
    description: (
      <ul>
        <li>
          Hiring and management of the software engineering team (20 developers)
        </li>
        <li>
          Design and implementation of the fund's cloud infrastructure on AWS
        </li>
        <li>Design and implementation of the job scheduling system</li>
      </ul>
    ),
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
    description: (
      <ul>
        <li>
          Built a software engineering team focused on infrastructure automation
          software (5 developers)
        </li>
        <li>Design of a Data Center Information Management system (DCIM)</li>
      </ul>
    ),
    techStack: ["Python", "Django", "Linux"],
  },
  {
    startDate: new Date("2013-10-07"),
    endDate: new Date("2015-08-14"),
    location: "Paris, France",
    company: { name: "Capital Fund Management", url: "https://www.cfm.fr" },
    title: "Software Engineer",
    description: (
      <ul>
        <li>Development of data management systems</li>
        <li>Development of the research job management service</li>
        <li>Automation of production jobs management (CICD)</li>
        <li>Refactoring of research code for production</li>
      </ul>
    ),
    techStack: ["Linux", "Slurm", "Python", "Pandas", "Puppet"],
  },
  {
    startDate: new Date("2010-02-01"),
    endDate: new Date("2013-10-04"),
    location: "Paris, France",
    company: { name: "Capital Fund Management", url: "https://www.cfm.fr" },
    title: "Systems Engineer",
    description: (
      <ul>
        <li>
          Design, deployment, management &amp; support of the research HPC
          platform
        </li>
        <li>Design, deployment &amp; management of the logging platform</li>
        <li>Management of Atlassian services</li>
      </ul>
    ),
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
    description: (
      <ul>
        <li>
          Design, deployment and management of the company network
          infrastructure
        </li>
        <li>
          Design, deployment and management of the software engineering stack
          for iOS apps developers
        </li>
      </ul>
    ),
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
    description: (
      <ul>
        <li>
          Setup of a network security training center in partnership with
          Juniper Networks
        </li>
        <li>Taught Juniper Networks technologies to 200+ engineers</li>
        <li>Managed 1 instructor</li>
        <li>Design and management of the training center infrastructure</li>
      </ul>
    ),
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
    description: (
      <>
        Design and deployment of{" "}
        <a href="https://bgpview.io/asn/42096" rel="noopener" target="_blank">
          AS42096
        </a>{" "}
        BGP infrastructure
      </>
    ),
    techStack: ["BGP", "OpenBSD"],
  },
  {
    startDate: new Date("2006-06-26"),
    endDate: new Date("2006-10-27"),
    location: "Paris, France",
    company: { name: "Juniper Networks", url: "https://juniper.net" },
    title: "Systems Engineer, Intern",
    description: (
      <ul>
        <li>Lab network refactoring and documentation</li>
        <li>Various troubleshooting and PoCs</li>
      </ul>
    ),
    techStack: ["JUNOS", "ScreenOS", "Linux", "OSPF", "BGP", "IPSec"],
  },
  {
    startDate: new Date("2001-07-23"),
    endDate: new Date("2005-08-19"),
    location: "Paris, France",
    company: { name: "Waycom", url: "https://waycom.net" },
    title: "Chief Technology Officer",
    description: (
      <ul>
        <li>Managed the tech team (10 engineers)</li>
        <li>
          Design and implementation of the{" "}
          <a href="https://bgpview.io/asn/30889" rel="noopener" target="_blank">
            AS30889
          </a>{" "}
          network
        </li>
        <li>Design of large scale IPSec networks (100+ nodes)</li>
        <li>
          Design of the company ISP-grade systems (DNS, e-mail, monitoring,
          etc.)
        </li>
      </ul>
    ),
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
