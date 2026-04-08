import { Project } from ".";

import NextIcon from "../../assets/next.svg";
import StyledcIcon from "../../assets/styledc.svg";
import TailwindIcon from "../../assets/tailwind.svg";
import ReduxIcon from "../../assets/redux.svg";
import NestJsIcon from "../../assets/nest.svg";

export const projects: Project[] = [
  {
    title: "Yield.co.ke",
    description:
      "I got tired of comparing money market fund rates manually, so I built the tool I wished existed. Scrapes daily rates from official sources, calculates true yields after tax and fees, helps Kenyans make better investment decisions.",
    features: [
      "Daily data pipeline from fund fact sheets",
      "Tax and fee calculator for true yield comparison",
      "Search and filter with performance rankings",
      "Solo built and maintained",
      "PostgreSQL + Prisma for data layer",
      "Deployed on Vercel with automated updates",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1775658812/liplan/Screenshot_From_2026-04-08_17-31-55_aeum71.png",
    link: "https://www.yield.co.ke",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
      {
        svg: NestJsIcon,
        text: "PostgreSQL",
      },
    ],
    status: "Active",
  },
  {
    title: "Navu360",
    description:
      "Training platforms shouldn't require an IT team to set up. Built Navu360 so companies could launch custom training programs in hours, not months. B2B SaaS with multi-tenant architecture.",
    features: [
      "Multi-tenant B2B SaaS architecture",
      "Single Sign On with Auth0",
      "Checkout and Subscription by PayStack",
      "Custom Domain with Vercel and Cloudflare",
      "Email Marketing automation with SendGrid",
      "SEO optimized for organic growth",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1699979124/liplan/Screenshot_from_2023-11-14_19-25-16_znvvkv.png",
    link: "https://navu360.com",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
      {
        svg: ReduxIcon,
        text: "Redux Toolkit",
      },
    ],
    status: "Completed",
  },
  {
    title: "Karent App",
    description:
      "University students needed a space to share ideas without the noise of mainstream social platforms. Built Karent to foster campus communities. Learned a lot about real-time systems and social graph complexity.",
    features: [
      "OAuth with Google for easy onboarding",
      "Push Notifications with Firebase",
      "Customizable user profiles and interest tags",
      "Topic-based feed algorithm",
      "Cloudinary CDN for media storage",
      "Real-time messaging infrastructure",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1699979294/liplan/Screenshot_from_2023-11-14_19-28-02_vkrzfv.png",
    link: "https://karent.app/welcome",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: StyledcIcon,
        text: "Styled Components",
      },
      {
        svg: NestJsIcon,
        text: "Nest JS",
      },
    ],
    status: "Completed",
  },
  {
    title: "CourierPal",
    description:
      "Cross-border shopping is expensive and slow. Built a marketplace connecting shoppers with travelers to solve the logistics problem. Order tracking, matching algorithm, and trust systems.",
    features: [
      "Order matching algorithm between shoppers and travelers",
      "Real-time order tracking system",
      "Secure authentication and authorization",
      "Error logging and monitoring with Sentry",
      "RESTful API integration",
      "Trust and rating system",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1683393573/liplan/paint_water_liquid_85058_1280x800_r9fa2d.jpg",
    link: "https://courierpal.vercel.app/",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: StyledcIcon,
        text: "Styled Components",
      },
      {
        svg: NestJsIcon,
        text: "Nest JS",
      },
    ],
    status: "Completed",
  },
  {
    title: "Maskani",
    description:
      "Wanted to see if I could put a 3D house tour in a browser without an app download. Turns out you can, but performance is hard. Learned plenty about WebGL, 3D asset optimization, and managing user expectations.",
    features: [
      "Web-based 3D house tours with Three.js",
      "Responsive design for mobile and desktop",
      "Accessibility compliance (WCAG standards)",
      "Minimal UI to reduce cognitive load",
      "3D asset optimization for fast loading",
      "Browser-based AR without native apps",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1685812969/bg_main_df77us.jpg",
    link: "https://maskani-app.vercel.app",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
    ],
    status: "Completed",
  },
];
