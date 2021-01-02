import { Company } from './models/company';
import { Project } from './models/project';

export const TEXTCONTENT = {
  projects: [
    {
      title: 'Christmas Angel Tree',
      subtitle: 'Holiday giving tree helping kids in need',
      description:
        `React web app with AWS CloudFormation using Lambda, DynamoDB and SNS. Built for Mater Academy Bonanza charter school for the annual community donation drive for the less privileged children. Visitors can view an angel’s wishes from a virtual tree and submit donation commitments while admins can manage children and donors via a dashboard. Matched 100 kids in need to their donors and delivered hundreds of presents to their homes`,
      thumbnail: 'angeltree-thumbnail.jpg',
      buttons: [
        {type: 'github', url: '//github.com/andregao/angel-tree-react'},
        {type: 'app', url: '//xmas2020.web.app'},
      ]
    },
    {
      title: 'NeuCommunity.com',
      subtitle: 'A marketing website for a prefab unit startup',
      description:
        `A static site built with Gatsby (React), Contentful (CMS), and serverless functions. A front-end focused project that utilizes modern Web APIs like CSS Grid, Intersection Observer, and touch gestures. It uses continuous deployment for content publishing and serverless backend to collect customer interests and dispatch emails`,
      thumbnail: 'neu-thumbnail.png',
      buttons: [
        {type: 'github', url: '//github.com/andregao/neu'},
        {type: 'app', url: '//neucommunity.com'},
      ]
    },
    {
      title: 'TV Show Tracker',
      subtitle: 'A personalized TV show tracking tool',
      description:
        `Browse, favorite, and follow all your shows and never miss an episode.

This is a full-stack single page web application built with React, Redux, Material-UI, RxJS, and Node.js serverless functions. it interacts with public APIs for entertainment data and uses API endpoints to access the user database. The React client uses function components with hooks and observer patterns. Redux Async actions utilize a reactive paradigm to handle side effects on the event streams. Firebase Authentication library was used to provide secure user management and OAuth integration.`,
      thumbnail: 'watchtv-thumbnail.jpg',
      buttons: [
        {
          type: 'demo',
          dialogData: {
            items: [
              {type: 'image', url: './assets/projects/watchtv-1.gif', caption: 'TV Tracker Demo'},
            ]
          }
        },
        {type: 'github', url: '//github.com/andregao/watchtv-web-app'},
        {type: 'app', url: '//watchtv.web.app'},
      ]
    },
    {
      title: 'Realtime List App',
      subtitle: 'A real-time todo list app',
      description:
        `A data-focused Angular project that uses centralized state management and a real-time NoSQL database.

After signing up for an account, a user can add and organize list items by projects, drag & drop to reorder items, and keep their data in sync between devices. The app uses NgRx, a Redux state management library, to manage client-side data and UI state. For the backend, it takes advantage of the Firebase database library with security rules, and its auth library for OAuth and token-based authentication.`,
      thumbnail: 'mathangs-thumbnail.jpg',
      buttons: [
        {
          type: 'demo',
          dialogData: {
            items: [
              {type: 'image', url: './assets/projects/mathangs-1.gif', caption: 'Todo List Demo'},
            ]
          }
        },
        {type: 'github', url: '//github.com/andregao/thangs'},
        {type: 'app', url: '//thangs.web.app'},
      ]
    },
    {
      title: 'AndreGao.com',
      subtitle: 'This portfolio website',
      description:
        `A frontend project built with Angular Material and Flex-Layout. It features a responsive design, scroll event interactions, and utilizes modal interfaces.`,
      thumbnail: 'andregao-thumbnail.jpg',
      buttons: [
        {
          type: 'demo',
          dialogData: {
            items: [
              {type: 'image', url: './assets/projects/andregao-1.gif', caption: 'Personal Site Demo'},
            ]
          }
        },
        {type: 'github', url: '//github.com/andregao/official'},
      ]
    },
    {
      title: 'Lowes Coupon Generator',
      subtitle: 'A coupon generator app that takes 10% or more off Lowes orders',
      description:
        `This is my first ever web project built in early 2018 when Reddit discovered the algorithm for creating Lowes single-use coupons. My web app helped users generate unique coupon codes and featured a quick calculation tool for choosing the best type of coupon savings. It verifies with a database to make sure codes were unique. Users can then apply them online or converted them to barcodes to scan at a local store. At the end of 2018, Lowes started making frequent updates to their algorithm and actively flagging sharing posts, which led to the discontinuation of this application.

Though it's a short-lived project, it gave me a lot of joy reading thank you notes from many of my users and knowing how much money it helped them saved.`,
      thumbnail: 'lowes10-thumbnail.jpg',
      buttons: [
        {
          type: 'demo',
          dialogData: {
            items: [
              {type: 'image', url: './assets/projects/lowes10-1.gif', caption: 'Coupon Generator Demo'},
            ]
          }
        },
      ]
    },
  ] as Project[],
  education: {
    pluralsight: {
      title: 'Pluralsight Angular, React Path',
      subtitle: ['RoleIQ Level 2 Angular / React Developer', '2019'],
      description: 'I started fresh on Pluralsight to pick up Angular in 2019 after personal time off last year and enjoyed the quality of their courses. It helped me systematically study both frameworks, encouraged me to explore a wide range of topics, and gave me valuable insight into real-world best practices.',
    },
    college: {
      name: 'University of Tasmania & Shanghai Ocean University',
      degrees: ['Bachelor of Information System', 'Bachelor of Management'],
      dateAndLocation: ['2004-2008', 'Shanghai China'],
      description: 'This was a dual degree program that offered faculty members and course materials from both universities. It focused on computer science and management training with a variety of subjects. It cultivated my love for constant learning and inspired me to pursue technology as a career'
    }
  },
  experience: [
    {
      name: 'IndieParty Co.',
      logo: 'indie-logo.png',
      position: 'Intern Angular Developer',
      location: 'Las Vegas NV',
      year: '2018',
      description: 'I was very fortunate to get an internship at this political tech startup. It offered me a chance to study the full stack of a production application and learn from an experienced team. It helped me understand how a scalable app was structured, and how the dev team collaborated on different parts of the project. It also opened my eyes to what software can do to impact people\'s lives and reignited my passion for building technologies that can make a difference.',
      dialog: {
        items: [
          {type: 'image', url: './assets/experience/indieparty-1.jpg', caption: 'Checking out the new tour bus at SXSW'},
          {type: 'image', url: './assets/experience/indieparty-2.jpg', caption: 'Signing Up Users'},
        ],
      }
    },
    {
      name: 'OrderWithMe & WithMe Inc.',
      logo: 'owm-logo.png',
      position: 'VP of Sourcing, IT Ops',
      location: 'Hangzhou China, Las Vegas NV',
      year: '2011 - 2017',
      description:
        `I was the co-founder of this startup that used technology to help small businesses purchase directly from China to improve their profit margin. We won the TechCrunch Disrupt Beijing in 2011 and later evolved the business model to developing and supplying smart retail solutions.

In China, I led a sourcing team of 7 helping Chinese manufacturers showcase their catalogs to US companies and brought our American clients’ product ideas from prototypes to mass productions. I managed supply chains for several private label programs that included sporting goods, construction, fashion, and holiday decorations. We shipped dozens of containers to the US and delivered millions of dollars of quality and low-cost products to small businesses.

After the company pivoted we opened an office in Las Vegas where I took on the role of IT Operations. I designed and implemented the IT infrastructure for our 20,000 sqft Zappos pop-up store in downtown Las Vegas where we deployed a fleet of smart shopping kiosks and welcomed thousands of customers.
`,
      dialog: {
        items: [
          {type: 'image', url: './assets/experience/owm-1.jpg', caption: 'At the wholesale market talking to vendors'},
          {type: 'video', url: 'KycT1zmELCA', caption: 'An animation I made in 2011 with After Effects'},
          {type: 'image', url: './assets/experience/owm-2.jpg', caption: 'Showcasing one of our brands at Interbike tradeshow'},
          {type: 'image', url: './assets/experience/owm-3.jpg', caption: 'Destination USA'},
          {type: 'image', url: './assets/experience/owm-4.jpg', caption: 'Having Fun at our China Office'},
          {type: 'video', url: 'pMe_5IknHBY', caption: 'Building the Zappos Store'},
        ],
      }
    },
    {
      name: 'Nihaoareyou Inc.',
      logo: 'nhay-logo.jpg',
      position: 'Technical Director',
      location: 'Shanghai China',
      year: '2009 - 2011',
      description: 'We brought American college students to travel across China to host events interacting with locals, and produced videos to help Chinese children learn English. I recruited and coached production crew and editors, created visual effects and oversaw subtitle translations for all of our content.',
      dialog: {
        items: [
          {type: 'image', url: './assets/experience/nhay-1.jpg', caption: 'Original Cast Members'},
        ],
      }
    },
    {
      name: 'ShangBy Inc.',
      logo: 'shangby-logo.jpg',
      position: 'Technical Manager',
      location: 'Shanghai China',
      year: '2008',
      description: 'We were an e-commerce startup that sold Chinese handmade jewelry directly to American customers. I ran the regularly scheduled live events broadcasted from our partnered retail stores, where viewers around the world could see the products live and interact with the jewelry designer and our hostesses.',
      dialog: {
        items: [
          {type: 'image', url: './assets/experience/shangby-1.jpg', caption: 'Live Event Setup'},
          {type: 'video', url: 'iBWFTEpy3xM', caption: 'On Rachael Ray'},
        ],
      },
    },
  ] as Company[],
  personal: {
    intro: 'Born and raised in southeast China, I\'m a new immigrant, a father, and had just started an exciting new career in software engineering. Here are a few snapshots of my life thus far.',
    subSections: [
      {
        title: 'FAMILY',
        thumbnails: {
          col: './assets/personal/family/thumbnail-col.jpg',
          row: './assets/personal/family/thumbnail-row.jpg',
        },
        dialog: {
          items: [
            {type: 'image', url: './assets/personal/family/1.jpg', caption: 'The Better Half'},
            {type: 'image', url: './assets/personal/family/2.jpg', caption: 'The Precious'},
            {type: 'image', url: './assets/personal/family/3.jpg', caption: 'The Roommate'},
            {type: 'image', url: './assets/personal/family/4.jpg', caption: 'Family Time'},
            {type: 'image', url: './assets/personal/family/5.jpg', caption: 'Bokeh Balls!'},
          ],
        }
      },
      {
        title: 'FRIENDS',
        thumbnails: {
          col: './assets/personal/friends/thumbnail-col.jpg',
          row: './assets/personal/friends/thumbnail-row.jpg',
        },
        dialog: {
          items: [
            {type: 'image', url: './assets/personal/friends/1.jpg', caption: 'Buddies Back Home'},
            {type: 'image', url: './assets/personal/friends/2.jpg', caption: 'The Gang'},
            {type: 'image', url: './assets/personal/friends/3.jpg', caption: 'Our Favorite Couple'},
            {type: 'image', url: './assets/personal/friends/4.jpg', caption: `I'm a photographer on demand`},
            {type: 'video', url: 'IzTeracYRNQ', caption: 'Also a tour guide on demand'},
          ],
        }
      },
      {
        title: 'COMMUNITY',
        thumbnails: {
          col: './assets/personal/communities/thumbnail-col.jpg',
          row: './assets/personal/communities/thumbnail-row.jpg',
        },
        dialog: {
          items: [
            {
              type: 'image',
              url: './assets/personal/communities/1.jpg',
              caption: 'We fostered and helped animals find new homes'
            },
            {type: 'video', url: 'tK41WCuUfIs', caption: 'An old adoption video I made'},
            {
              type: 'image',
              url: './assets/personal/communities/3.jpg',
              caption: `From electrical and plumbing, to computers and cars. I do all I can to help our senior neighbors`
            },
          ],
        }
      },
    ],
  },
};
