/* eslint-disable sonarjs/no-duplicate-string */
import * as React from "react";

import { ExternalLink } from "../../core";
import { ExperienceStage } from "../types";

export const experience: ExperienceStage[] = [
  {
    company: { name: "Happy Teams", url: "https://happyteams.events/en" },
    location: "Metz, France",
    stages: [
      {
        startDate: new Date("2021-01-04"),
        title: "Chief Technology Officer, co-founder",
        description: (
          <ul>
            <li>
              Hiring and management of the software engineering team (3
              developers)
            </li>
            <li>
              Design of{" "}
              <ExternalLink href="https://happyteams.events/en/the-diamond-heist">
                The Diamond Heist
              </ExternalLink>{" "}
              game
            </li>
          </ul>
        ),
        techStack: ["TypeScript", "Pulumi", "GraphQL", "AWS", "React"],
      },
    ],
  },
  {
    company: {
      name: "AXA Investment Managers Chorus",
      url: "https://www.axa-im.com/what-we-do/alternatives#anchor-f45d1552-2096-429e-8bed-3365c32a3dd7",
    },
    location: "Hong Kong",
    stages: [
      {
        startDate: new Date("2016-07-25"),
        endDate: new Date("2020-09-30"),
        title: "Chief Technology Officer",
        description: (
          <ul>
            <li>
              Hiring and management of the software engineering team (20
              developers)
            </li>
            <li>
              Design and implementation of the fund's cloud infrastructure on
              AWS
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
    ],
  },
  {
    company: { name: "The Box Escape Games", url: "https://the-box.fr/en/" },
    location: "Metz, France",
    stages: [
      {
        startDate: new Date("2015-09-26"),
        endDate: new Date("2021-12-31"),
        title: "Chief Technology Officer, co-founder",
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
    ],
  },
  {
    company: { name: "Criteo", url: "https://criteo.com" },
    location: "Paris, France",
    stages: [
      {
        startDate: new Date("2015-09-07"),
        endDate: new Date("2016-07-08"),
        title: "Lead Software Engineer",
        description: (
          <ul>
            <li>
              Built a software engineering team focused on infrastructure
              automation software (5 developers)
            </li>
            <li>
              Design of a Data Center Information Management system (DCIM)
            </li>
          </ul>
        ),
        techStack: ["Python", "Django", "Linux"],
      },
    ],
  },
  {
    company: { name: "Capital Fund Management", url: "https://www.cfm.fr" },
    location: "Paris, France",
    stages: [
      {
        startDate: new Date("2013-10-07"),
        endDate: new Date("2015-08-14"),
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
    ],
  },
  {
    company: { name: "Tapinoma" },
    location: "Remote",
    stages: [
      {
        startDate: new Date("2008-10-20"),
        endDate: new Date("2009-09-11"),
        title: "Systems Engineer",
        description: (
          <ul>
            <li>
              Design, deployment and management of the company network
              infrastructure
            </li>
            <li>
              Design, deployment and management of the software engineering
              stack for iOS apps developers
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
    ],
  },
  {
    company: { name: "Altran", url: "https://altran.fr" },
    location: "Paris, France",
    stages: [
      {
        startDate: new Date("2007-03-05"),
        endDate: new Date("2008-10-17"),
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
    ],
  },
  {
    company: { name: "Kewego", url: "https://en.wikipedia.org/wiki/Kewego" },
    location: "Paris, France",
    stages: [
      {
        startDate: new Date("2006-12-01"),
        endDate: new Date("2007-01-31"),
        title: "Network Engineer",
        description: (
          <>
            Design and deployment of{" "}
            <ExternalLink href="https://bgpview.io/asn/42096">
              AS42096
            </ExternalLink>{" "}
            BGP infrastructure
          </>
        ),
        techStack: ["BGP", "OpenBSD"],
      },
    ],
  },
  {
    company: { name: "Juniper Networks", url: "https://juniper.net" },
    location: "Paris, France",
    stages: [
      {
        startDate: new Date("2006-06-26"),
        endDate: new Date("2006-10-27"),
        title: "Systems Engineer, Intern",
        description: (
          <ul>
            <li>Lab network refactoring and documentation</li>
            <li>Various troubleshooting and PoCs</li>
          </ul>
        ),
        techStack: ["JUNOS", "ScreenOS", "Linux", "OSPF", "BGP", "IPSec"],
      },
    ],
  },
  {
    company: { name: "Waycom", url: "https://waycom.net" },
    location: "Paris, France",
    stages: [
      {
        startDate: new Date("2001-07-23"),
        endDate: new Date("2005-08-19"),
        title: "Chief Technology Officer",
        description: (
          <ul>
            <li>Managed the tech team (10 engineers)</li>
            <li>
              Design and implementation of the{" "}
              <ExternalLink href="https://bgpview.io/asn/30889">
                AS30889
              </ExternalLink>{" "}
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
        title: "Systems & Networks Engineer",
        description:
          "Design and management of customers Internet infrastructures",
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
    ],
  },
];
