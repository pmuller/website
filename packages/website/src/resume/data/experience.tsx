/* eslint-disable sonarjs/no-duplicate-string */
import * as React from "react";

import { ExternalLink } from "../../links";
import { ExperienceStage } from "../types";

export const experience: ExperienceStage[] = [
  {
    company: {
      name: "Happy Teams",
      location: "Metz, France",
      url: "https://happyteams.events/en",
      description: "Remote team building games",
    },
    stages: [
      {
        startDate: new Date("2021-01-04"),
        endDate: new Date("2022-04-15"),
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
              real-time multi-player game
            </li>
          </ul>
        ),
        techStack: [
          "TypeScript",
          "Pulumi",
          "GraphQL",
          "React",
          "AWS (AppSync, Lambda, DynamoDB, S3, IVS, Chime, IAM, Cloudfront, CodePipeline, Step Functions, Route53)",
        ],
      },
    ],
  },
  {
    company: {
      name: "AXA Investment Managers Chorus",
      location: "Hong Kong",
      url: "https://www.axa-im.com/what-we-do/alternatives#anchor-f45d1552-2096-429e-8bed-3365c32a3dd7",
      description:
        "Quantitative and systematic hedge fund, 1+ billion USD under management",
    },
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
              Design and implementation of the research and production cloud
              infrastructure
            </li>
            <li>Design and implementation of the job scheduling system</li>
          </ul>
        ),
        techStack: [
          "Linux",
          "Python",
          "Terraform",
          "Puppet",
          "Django",
          "Pandas",
          "Slurm",
          "AWS (EC2, S3, RDS PostgreSQL, SSM, Lambda, IAM, Route53)",
        ],
      },
    ],
  },
  {
    company: {
      name: "The Box Escape Games",
      location: "Metz, France",
      url: "https://the-box.fr/en/",
      description: "Award-winning escape rooms",
    },
    stages: [
      {
        startDate: new Date("2015-09-26"),
        endDate: new Date("2021-12-31"),
        title: "Chief Technology Officer, co-founder",
        description:
          "Hardware and software design and implementation of several in-room games",
        techStack: [
          "Linux",
          "Raspberry Pi",
          "Arduino",
          "Python",
          "React",
          "TypeScript",
          "JavaScript",
          "Pulumi",
          "AWS (S3, Cloudfront, Route53, IAM)",
        ],
      },
    ],
  },
  {
    company: {
      name: "Criteo",
      location: "Paris, France",
      url: "https://criteo.com",
      description: "Programmatic online advertising",
    },
    stages: [
      {
        startDate: new Date("2015-09-07"),
        endDate: new Date("2016-07-08"),
        title: "Lead Software Engineer",
        description: (
          <ul>
            <li>
              Built a software engineering team focused on infrastructure
              automation and asset management software (5 developers)
            </li>
            <li>
              Design of a Data Center Information Management system (DCIM)
            </li>
          </ul>
        ),
        techStack: ["Python", "Django", "Linux", "MariaDB", "Mesos"],
      },
    ],
  },
  {
    company: {
      name: "Capital Fund Management",
      location: "Paris, France",
      url: "https://www.cfm.fr",
      description: "Global quantitative and systematic asset manager",
    },
    stages: [
      {
        startDate: new Date("2013-10-07"),
        endDate: new Date("2015-08-14"),
        title: "Software Engineer",
        description: (
          <ul>
            <li>
              Design and development of the research HPC jobs automation system
            </li>
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
    company: {
      name: "Tapinoma",
      location: "Remote",
      description: "Mobile apps startup",
    },
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
          "MySQL",
          "Subversion",
        ],
      },
    ],
  },
  {
    company: {
      name: "Altran",
      location: "Paris, France",
      url: "https://altran.fr",
      description: "Engineering consulting firm",
    },
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
    company: {
      name: "Kewego",
      location: "Paris, France",
      url: "https://en.wikipedia.org/wiki/Kewego",
      description: "Video platform provider",
    },
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
    company: {
      name: "Juniper Networks",
      location: "Paris, France",
      url: "https://juniper.net",
      description: "Network & security equipments vendor",
    },
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
    company: {
      name: "Waycom",
      location: "Paris, France",
      url: "https://waycom.net",
      description: "Internet managed services provider",
    },
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
          "MySQL",
        ],
      },
    ],
  },
];
