import { Company } from './models/company';
import { Project } from './models/project';

export const TEXTCONTENT = {
  projects: [
    {
      title: 'andregao.com',
      subtitle: 'A personal website',
      description:
        `After spending most of the time learning how to write business logic in Angular, it's refreshing to get to code responsive layouts, scrolling behaviors, and to work with portals and view containers inside the framework. After building this portfolio site, I became much more proficient with Flexbox, Web APIs, and generating views dynamically instead of direct DOM manipulations.`,
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
      title: 'mathangs.com',
      subtitle: 'An ambitious todo list app',
      description:
        `This is my first “back end of the front end” project after finishing the Angular courses on Pluralsight and I plan to develop it into a fully featured app.

After signing up for an account, a user can organize items by projects, drag & drop to re-order lists and keep their data in sync between browsers. The app uses NgRx, a Redux state management pattern, to manage client-side data and state. For the backend, it takes advantage of Firestore’s real-time database with security rules, and Firebase Auth for OAuth or token based sign in.

It was a lot of fun for me to think and code in a functional programming pattern and use many of the RxJS operators.`,
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
        {type: 'github', url: '//github.com/andregao/mathangs'},
        {type: 'app', url: '//mathangs.com'},
      ]
    },
    {
      title: 'lowes10.com',
      subtitle: 'A coupon code generator app that takes 10% off or more with Lowes orders(inactive)',
      description:
        `This simple app was built in early 2018 when the internet discovered the algorithm for Lowes single-use coupons. It helped users generate unique codes to use at Lowes and featured a quick calculation for the best type of coupon to apply. It checked with a database to make sure the code was unique and can either be copied to the clipboard or converted to a barcode to scan at a store. Unfortunately, Lowes started making frequent updates on the algorithm and were actively removing sharing posts, which leads to the abandonment of this app.

Even though it's a short-lived project, It gave me happiness reading thank you messages and hearing how much people saved using the app.`,
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
      title: 'Pluralsight Angular Path',
      subtitle: ['RoleIQ Level 2 Angular Developer', '2019'],
      description: 'When first started, I had tried several learning resources to teach myself to code but found it difficult to apply to a production scale application. After taking some time off, I started fresh on Pluralsight and was impressed by the structure and quality of their courses. It helped me systematically study the framework, encouraged me to explore a wide range of topics, and gave me valuable insight into real-world practices.',
    },
    college: {
      name: 'University of Tasmania & Shanghai Ocean University',
      degrees: ['Bachelor of Information System', 'Bachelor of Management'],
      dateAndLocation: ['2004-2008', 'Shanghai China'],
      description: 'A dual degree program that offered resources from both the Australian university and the local college. Focused on computer science as well as management with a variety of courses. Inspired me to pursue technology as a career and solidified my fundamental understanding of software design and engineering.'
    }
  },
  experience: [
    {
      name: 'IndieParty Co.',
      logo: 'indie-logo.png',
      position: 'Intern Angular Developer',
      location: 'Las Vegas NV',
      year: '2018',
      description: 'When starting off this new career in software engineering, I was very fortunate to get an internship at this political tech startup for a chance to study a production application and learn from an experienced team. It helped me understand how a scalable app was structured, and how the dev team collaborated on different parts of the application. It also opened my eyes to what software can do to impact people\'s lives and reignited my passion for building technologies that can make a difference.',
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
        `I was one of the founding members at a tech startup that helped small businesses buy products directly from China. We won the 2011 TechCrunch Disrupt Beijing and later evolved the business model to supplying brands with smart retail stores.

In China, I led a sourcing team of 7 helping manufacturers showcasing their catalogs to US companies and brought our American clients’ product ideas to life. I managed supply chains for several private label programs that included sporting goods, construction, fashion and holiday decorations. We shipped dozens of containers to the US and delivered quality and low-cost products to small businesses.

After the company pivoted we opened a new office in Las Vegas. I took on the role of IT Operations and scaled our network capacity to meet the increasing demand for new staff and devices. I also designed and implemented the IT infrastructure for our 20,000 sqft Zappos pop-up store in downtown Las Vegas where we had dozens of kiosks and welcomed hundreds of shoppers.`,
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
      description: 'We were an e-commerce startup that sold Chinese handmade jewelry directly to American customers. I ran the regularly scheduled live events broadcasted from our partnered retail stores, where viewers around the world saw the products live and interact with the jewelry designer and our hostesses.',
      dialog: {
        items: [
          {type: 'image', url: './assets/experience/shangby-1.jpg', caption: 'Live Event Setup'},
          {type: 'video', url: 'iBWFTEpy3xM', caption: 'On Rachael Ray'},
        ],
      },
    },
  ] as Company[],
  personal: {
    intro: 'Born and raised in southeast China, I\'m a recent immigrant, a new father, and had just started an exciting career in software engineering. Here are a few more snapshots of my life.',
    subSections: [
      {
        title: 'Family',
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
        title: 'Friends',
        thumbnails: {
          col: './assets/personal/friends/thumbnail-col.jpg',
          row: './assets/personal/friends/thumbnail-row.jpg',
        },
        dialog: {
          items: [
            {type: 'image', url: './assets/personal/friends/1.jpg', caption: 'Buddies Back Home'},
            {type: 'image', url: './assets/personal/friends/2.jpg', caption: 'Old Gang'},
            {type: 'image', url: './assets/personal/friends/3.jpg', caption: 'Favorite Couple'},
            {type: 'image', url: './assets/personal/friends/4.jpg', caption: 'Enjoyed being the Photographer'},
            {type: 'video', url: 'IzTeracYRNQ', caption: 'Honored to be the Tour Guide'},
          ],
        }
      },
      {
        title: 'Community',
        thumbnails: {
          col: './assets/personal/communities/thumbnail-col.jpg',
          row: './assets/personal/communities/thumbnail-row.jpg',
        },
        dialog: {
          items: [
            {
              type: 'image',
              url: './assets/personal/communities/1.jpg',
              caption: 'We fostered and help animals find new homes'
            },
            {type: 'video', url: 'tK41WCuUfIs', caption: 'An adoption video I Made in 2010'},
            {
              type: 'image',
              url: './assets/personal/communities/3.jpg',
              caption: `I'm the handyman for my senior neighbors`
            },
          ],
        }
      },
    ],
  },
};
