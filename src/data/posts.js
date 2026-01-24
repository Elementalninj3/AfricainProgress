/**
 * BLOG POST DATA - AFRICA IN PROGRESS
 * 
 * To add new articles, follow the guide in /HOW_TO_MANAGE_POSTS.md
 */

import { content as namibiaContent } from './articles/namibia-leo-connectivity';
import treasureAvatar from '../assets/treasure-alao.jpg';

export const BLOG_POSTS = [
  {
    id: 7,
    title: "NAMIBIA CLEARS THE PATH FOR LOW-EARTH ORBIT CONNECTIVITY",
    excerpt: "Namibia has granted regulatory approval for Low-Earth Orbit (LEO) satellite services, opening the door for next-generation internet connectivity across the country.",
    category: "Connectivity",
    date: "24 Jan 2024",
    readTime: "5 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    featured: true,
    content: namibiaContent
  },
  {
    id: 1,
    title: "THE RISE OF FINTECH IN LAGOS: REDEFINING THE CONTINENTAL LEDGER",
    excerpt: "Lagos has become a global hub for fintech innovation. We explore the startups that are bridging the financial gap for millions with automated ledgers and seamless payments.",
    category: "Fintech",
    date: "22 Jan 2024",
    readTime: "8 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1600",
    featured: false,
    content: `
      <p>Lagos, often dubbed the 'Silicon Lagoon', has emerged as a powerhouse of financial technology on the African continent. With a population exceeding 20 million and a significant percentage of the population being unbanked or underbanked, the city provides the perfect breeding ground for innovative financial solutions.</p>
      
      <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" alt="Lagos Skyline" />

      <h2>The Digital Leap</h2>
      <p>Over the past decade, several startups have successfully tackled the continent's fragmented payment systems. Companies like Flutterwave and Paystack (now part of Stripe) have laid the groundwork by providing robust APIs that allow businesses to accept payments from anywhere in the world.</p>
      
      <p>But the innovation doesn't stop at payments. A new wave of 'neobanks' is challenging traditional banking structures. Startups like Kuda and PiggyVest are offering digital-first experiences that prioritize user accessibility and financial savings, making banking more inclusive than ever before.</p>
      
      <blockquote>"Our goal isn't just to move money; it's to build the infrastructure that allows African businesses to compete globally."</blockquote>

      <h2>Ecosystem Deep Dive</h2>
      <p>Check out this documentary on the Nigerian tech boom to understand the scale of what's happening on the ground:</p>
      
      <iframe src="https://www.youtube.com/embed/Ssh71hePR8Q" title="Nigerian Tech Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <h2>Future Outlook</h2>
      <p>As regulatory frameworks evolve and internet penetration continues to rise, the Lagos fintech ecosystem is poised for even greater expansion. Investors from global firms are increasingly looking towards Nigeria as the primary gateway to the African consumer market, signaling a bright future for the region's digital economy.</p>
    `
  },
  {
    id: 2,
    title: "AGRITECH REVOLUTION: BOOSTING YIELDS IN THE KENYAN RIFT VALLEY",
    excerpt: "Innovative mobile platforms are providing Kenyan farmers with real-time weather data and market prices, boosting yields and incomes in the Rift Valley.",
    category: "Agritech",
    date: "21 Jan 2024",
    readTime: "6 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=1600",
    featured: false,
    content: `
      <p>In the fertile landscapes of the Rift Valley, a high-tech revolution is taking place under the soil. Kenya, long a leader in mobile money through M-Pesa, is now leveraging its digital prowess to transform its most vital sector: agriculture.</p>
      <h2>Data-Driven Farming</h2>
      <p>Small-scale farmers, who produce the majority of Kenya's food output, have historically struggled with unpredictable weather and opaque market pricing. Today, startups like Apollo Agriculture and Twiga Foods are changing the narrative.</p>
      <p>Using satellite imagery and machine learning, these platforms provide farmers with customized advice on crop management, soil health, and optimal harvesting times. Furthermore, digital marketplaces are eliminating the 'middleman', ensuring farmers receive a fair price for their produce by connecting them directly with urban vendors.</p>
      <h2>The Impact of Connectivity</h2>
      <p>Through simple USSD codes and mobile apps, farmers can now access credit to purchase high-quality seeds and fertilizers, paying back only after their harvest is sold. This circular economy is lifting thousands of families out of poverty and ensuring food security for the growing population.</p>
    `
  },
  {
    id: 3,
    title: "CLEAN ENERGY: LIGHTING UP RURAL RWANDA THROUGH SOLAR INNOVATION",
    excerpt: "Renewable energy startups are lighting up remote villages, enabling new small businesses to thrive where the grid doesn't reach.",
    category: "Energy",
    date: "19 Jan 2024",
    readTime: "10 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1600",
    featured: false,
    content: `
      <p>Rwanda's green hills are becoming even greener, thanks to a surge in off-grid solar solutions. With the government's ambitious goal of reaching 100% electrification by 2024, renewable energy startups are playing a critical role in reaching the 'last mile'.</p>
      <h2>Lighting the Path</h2>
      <p>For rural entrepreneurs like Marie, a tailor in a remote village, the lack of electricity meant her business died as soon as the sun went down. Today, a rooftop solar system provided by startups such as BBOXX or ZOLA Electric allows her to work late into the night, doubling her productivity.</p>
      <p>Beyond simple lighting, these systems are powering irrigation pumps for farmers, refrigerators for medical clinics, and charging stations for the community's mobile devices. The 'pay-as-you-go' model makes these high-tech systems affordable for everyone, with payments made via mobile phone.</p>
      <h2>A Sustainable Future</h2>
      <p>Rwanda is setting a global example of how emerging economies can leapfrog traditional, carbon-intensive infrastructure in favor of clean, decentralized energy networks. As battery technology improves and costs continue to fall, the entire continent stands to benefit from this solar-powered revolution.</p>
    `
  },
  {
    id: 4,
    title: "VENTURE CAPITAL TRENDS: TRACKING THE GLOBAL CAPITAL FLOWS",
    excerpt: "An analysis of the latest investment rounds across the continent, highlighting the sectors attracting the most international interest this quarter.",
    category: "Funding",
    date: "18 Jan 2024",
    readTime: "12 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
    featured: false
  },
  {
    id: 5,
    title: "AFRICA IN PROGRESS: TRACKING THE FUTURE PIONEERS OF AFRICA",
    excerpt: "The AfCFTA is set to create the world's largest free trade area. For African startups, this means an unprecedented opportunity for cross-border scale and logistical efficiency.",
    category: "Economy",
    date: "23 Jan 2024",
    readTime: "15 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400",
    featured: false
  },
  {
    id: 6,
    title: "E-HEALTH STARTUPS: BRIDGING THE HEALTHCARE GAP THROUGH AI",
    excerpt: "Telemedicine is saving lives by connecting rural patients with specialists in major cities. Here are the startups leading the charge with AI-driven diagnostics.",
    category: "Healthtech",
    date: "15 Jan 2024",
    readTime: "7 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
    featured: false
  }
];

export const CATEGORIES = [
  "All",
  "Connectivity",
  "Fintech",
  "Agritech",
  "Healthtech",
  "Funding",
  "Economy",
  "Energy"
];
