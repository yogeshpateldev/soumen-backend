import mongoose from "mongoose";
import Post from "./models/Post.js";

const LINKEDIN_POST_URNS = [
  "urn:li:activity:7480902428255666176", // Advisory (meeting Mr. Alok Singh)
  "urn:li:activity:7478774663356149760", // Empowerment (video/ Alia Bhatt)
  "urn:li:activity:7478116185293639680", // Culture (Selva 1st employee)
  "urn:li:activity:7477253765671342080", // Hyperlocal (Snana Purnima Gandhinagar)
  "urn:li:activity:7465663489127362564", // ATOMA launches in 40 cities
  "urn:li:activity:7446076261745008640", // Founder Pivot
  "urn:li:activity:7436998370004471808", // Execution Trumps Perfection
  "urn:li:activity:7435195790798503936"  // Focus on Market Results
];

const seedPosts = [
  {
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "Every great company is built not only on ideas but also on the guidance of experienced leaders.\n\nIt was a privilege for both founders of Cuatro Labs, Jagdish Sutar and me, to meet Mr. Alok Singh, Senior CFO from IIM Ahmedabad, along with Mr. Man Singh Rajora, CEO of IDSR.\n\nWe had an insightful discussion about our vision for Cuatro Labs and ATOMA – India's Salon at Home. We shared our journey, our mission to transform the beauty and wellness ecosystem, and our plans to build a technology-driven, customer-centric platform that empowers professionals across India.\n\nMore importantly, we sought their guidance on scaling sustainably, building a strong financial foundation, creating the right organizational structure, and navigating the challenges of high-growth startups.\n\nAs both founders, we believe that one of the greatest strengths of an entrepreneur is continuously learning from leaders who have already created lasting impact. Every meaningful conversation brings new perspectives, sharper strategies, and renewed confidence to move forward.\n\nA heartfelt thank you to Mr. Alok Singh and Mr. Man Singh Rajora for your valuable time, insights, and encouragement. Your guidance will play an important role in the journey of building Cuatro Labs and ATOMA into organizations that create meaningful impact across India.\n\n#Leadership #Networking #Mentorship #Atoma #CuatroLabs #StartupIndia #Entrepreneurship",
    timestamp: new Date("2026-07-05T09:00:00Z"),
    likes: 156,
    commentsCount: 32,
    shares: 14,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_leadership-networking-mentorship-activity-7480902428255666176-xFSv",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI"
    ],
    mediaType: "image",
    tag: "ADVISORY",
    title: "Advisory & Sustainable Scaling",
    readTime: "3 min read"
  },
  {
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "Sometimes, the most powerful moments are the ones you never plan.\n\nOur team member, Disha, recently attended the launch event of Movie \"Alpha\" and got a once-in-a-lifetime opportunity to meet Alia Bhatt. In a heartfelt moment, Disha said, \"I love you!\" and Alia smiled and replied, \"I love you too.\"\n\nIt was more than a celebrity interaction. It was a reminder of what confidence, courage, and women's empowerment truly look like.\n\nAt Cuatro Labs, and through our journey with ATOMA, we believe every woman deserves the confidence to dream bigger, speak fearlessly, and create her own story. Empowerment begins when women inspire women, uplift each other, and celebrate every achievement—big or small.\n\nThis video captures that beautiful moment and the spirit behind it. Here's to every woman who dares to dream, believes in herself, and inspires countless others along the way.\n\n#WomenEmpowerment #Leadership #Inspiration #Atoma #CuatroLabs #AlphaLaunch",
    timestamp: new Date("2026-07-02T10:30:00Z"),
    likes: 245,
    commentsCount: 48,
    shares: 19,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_womenempowerment-leadership-inspiration-activity-7478774663356149760-Wv8W",
    mediaUrl: "https://dms.licdn.com/playlist/vid/v2/D4D05AQHiFPA3JAHZfw/thumbnail-with-play-button-overlay-high/B4DZ8nx5MFJ8C0-/0/1783078823878?e=2147483647&v=beta&t=k3DUn6stPLg7-EDL2W1VsfV-zmVKo9kJ5cBZFydvjpk",
    mediaUrls: [
      "https://dms.licdn.com/playlist/vid/v2/D4D05AQHiFPA3JAHZfw/thumbnail-with-play-button-overlay-high/B4DZ8nx5MFJ8C0-/0/1783078823878?e=2147483647&v=beta&t=k3DUn6stPLg7-EDL2W1VsfV-zmVKo9kJ5cBZFydvjpk"
    ],
    mediaType: "image",
    tag: "EMPOWERMENT",
    title: "Women's Empowerment & Inspiration",
    readTime: "2 min read"
  },
  {
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "One Year. One Dream. One Family. ❤️\n\nEvery great organization has a story, and every story begins with someone who believes before the world does.\n\nToday, we celebrate Selva, our very first employee at Cuatro Labs, as he completes one incredible year with us.\n\nWhen Cuatro Labs was just an idea filled with dreams, uncertainty, and endless possibilities, Selva chose to believe in the vision. As our Designer, he has been more than a creative professional—he has been a pillar in building our brand identity, shaping our campaigns, and bringing our imagination to life.\n\nThe photos say it all. This wasn't just a cake-cutting ceremony—it was a celebration of trust, loyalty, and the relationships that make a startup feel like family.\n\nFrom day one to today, we've grown together. We've celebrated wins, overcome challenges, and continued to dream bigger every single day.\n\nAs we now expand across 40 cities and embark on a new chapter for Atoma and Cuatro Labs, it's people like Selva who remind us that companies are not built by ideas alone—they are built by committed people who stand beside you through every milestone.\n\nThank you, Selva, for your dedication, creativity, and unwavering belief in our journey.\n\nHappy 1st Work Anniversary! 🎉\n\n#CuatroLabs #WorkAnniversary #FirstEmployee #StartupJourney #Gratitude #Teamwork #Leadership #Design #Innovation #BuildingTheFuture #OneTeamOneDream",
    timestamp: new Date("2026-06-30T14:20:00Z"),
    likes: 184,
    commentsCount: 22,
    shares: 8,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_cuatrolabs-workanniversary-firstemployee-activity-7478116185293639680-C_H2",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D5622AQGWQ5M_O3o2Vw/feedshare-shrink_1280/B56Z8ebCatKUAQ-/0/1782921832421?e=2147483647&v=beta&t=fNPL_3oum4ie2QkaV-HE0zYa7yhTCHLZHmme5LIXeJQ",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQGWQ5M_O3o2Vw/feedshare-shrink_1280/B56Z8ebCatKUAQ-/0/1782921832421?e=2147483647&v=beta&t=fNPL_3oum4ie2QkaV-HE0zYa7yhTCHLZHmme5LIXeJQ"
    ],
    mediaType: "image",
    tag: "CULTURE",
    title: "First Hires & Startup Trust",
    readTime: "3 min read"
  },
  {
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "From Blessings to Beginnings. 🙏🚀\n\n29th June – Snana Purnima.\n\nA day that holds a very special place in my heart.\n\nOn this sacred occasion, as millions seek the blessings of Mahaprabhu Lord Jagannath, our team took the first physical step towards a dream that has lived in our hearts for a long time.\n\nLate last night, while the city slept, our team was out on the streets of Gandhinagar, installing the very first Atoma branding across the city. For many, these may just be advertising boards. For us, they represent years of dreaming, planning, sacrifices, failures, learning, and unwavering belief.\n\nWe consciously chose Snana Purnima to begin this journey because every great beginning deserves divine blessings. May Lord Jagannath guide us with wisdom, humility, and the strength to serve millions of families across India.\n\nAtoma is not just another startup. It is our commitment to transform how India experiences beauty and wellness by bringing trusted salon professionals to every doorstep while creating dignified earning opportunities for thousands of service professionals.\n\nThis is only the first city. Many more cities will follow. Many more dreams will become reality.\n\nTo every member of the Atoma family who worked tirelessly through the night—thank you. Startups are not built in boardrooms alone; they are built on roads, under streetlights, through sleepless nights, and by people who believe in a vision bigger than themselves.\n\nAs we begin this journey, I bow my head in gratitude.\nJai Jagannath. 🙏\n\n#JaiJagannath #SnanaPurnima #Atoma #StartupIndia #FounderJourney #BuildingInPublic #Entrepreneurship #BeautyTech #SalonAtHome #Hyperlocal #Gandhinagar #Ahmedabad #CuatroLabs #DreamBig #TeamWork",
    timestamp: new Date("2026-06-29T09:00:00Z"),
    likes: 312,
    commentsCount: 65,
    shares: 42,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_jaijagannath-snanapurnima-atoma-activity-7477253765671342080-4L-l",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw"
    ],
    mediaType: "image",
    tag: "HYPERLOCAL",
    title: "Offline Branding & Hyperlocal Beginnings",
    readTime: "3 min read"
  },
  {
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "We are thrilled to share that ATOMA is launching across 40 Indian cities by the end of June! Our mission is to scale our beauty-tech ecosystem and bring trusted salon professionals directly to consumer doorsteps while creating dignified earning opportunities for service professionals across India.\n\n#Atoma #Ahmedabad #StartupIndia #BeautyTech #Hyperlocal",
    timestamp: new Date("2026-06-15T10:00:00Z"),
    likes: 215,
    commentsCount: 38,
    shares: 12,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_atoma-ahmedabad-startupindia-activity-7465663489127362564-ykAb",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI"
    ],
    mediaType: "image",
    tag: "EXPANSION",
    title: "ATOMA Launches in 40 Indian Cities by June End",
    readTime: "1 min read"
  },
  {
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "A pivot is a decision backed by clarity. Staying on a dead road is a decision backed by ego.\n\nAs founders, we must always look at market facts over personal pride. If a model is not scaling, admitting wrong turns and changing direction is not a failure — it's the only path to growth.\n\n#Founder #StartupLife #Entrepreneurship #Pivot #GrowthMindset",
    timestamp: new Date("2026-05-20T11:00:00Z"),
    likes: 198,
    commentsCount: 29,
    shares: 9,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_founder-startuplife-entrepreneurship-activity-7446076261745008640-M55_",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw"
    ],
    mediaType: "image",
    tag: "LEADERSHIP",
    title: "Founder Pivot: Admitting Wrong Turns",
    readTime: "2 min read"
  },
  {
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "Execution is everything. You can have the most beautiful business plans and slide decks, but if you cannot execute on the ground, they are worth nothing. Launch fast, iterate based on real feedback, and build momentum.\n\n#Entrepreneurship #StartupMindset #FounderLife #Execution",
    timestamp: new Date("2026-05-05T09:00:00Z"),
    likes: 172,
    commentsCount: 18,
    shares: 5,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_entrepreneurship-startupmindset-founderlife-activity-7436998370004471808-1_6w",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D5622AQGWQ5M_O3o2Vw/feedshare-shrink_1280/B56Z8ebCatKUAQ-/0/1782921832421?e=2147483647&v=beta&t=fNPL_3oum4ie2QkaV-HE0zYa7yhTCHLZHmme5LIXeJQ",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQGWQ5M_O3o2Vw/feedshare-shrink_1280/B56Z8ebCatKUAQ-/0/1782921832421?e=2147483647&v=beta&t=fNPL_3oum4ie2QkaV-HE0zYa7yhTCHLZHmme5LIXeJQ"
    ],
    mediaType: "image",
    tag: "STRATEGY",
    title: "Execution Trumps Perfection in Business",
    readTime: "2 min read"
  },
  {
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "Most founders fall in love with their vision. But the market doesn't care about your vision; it cares about value. Listen to the customers, look at the purchase signals, and prioritize market results over personal bias.\n\n#Startup #GTM #MarketFit #GrowthArchitecture",
    timestamp: new Date("2026-04-28T14:00:00Z"),
    likes: 210,
    commentsCount: 35,
    shares: 11,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_most-founders-fall-in-love-with-their-vision-activity-7435195790798503936--1P-",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI"
    ],
    mediaType: "image",
    tag: "STRATEGY",
    title: "Founders: Prioritize Market Results Over Vision",
    readTime: "2 min read"
  }
];

function decodeHTMLEntities(str: string): string {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

export async function syncLinkedInPosts() {
  console.log("Syncing posts dynamically from LinkedIn embeds...");
  const syncedPosts: any[] = [];

  for (const urn of LINKEDIN_POST_URNS) {
    try {
      const url = `https://www.linkedin.com/embed/feed/update/${urn}`;
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5"
        }
      });

      if (response.status !== 200) {
        throw new Error(`LinkedIn embed returned HTTP status ${response.status}`);
      }

      const html = await response.text();

      // 1. Extract post text content from description meta
      const matchDesc = html.match(/<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/?>/) || html.match(/<meta\s+property="og:description"\s+content="([\s\S]*?)"\s*\/?>/);
      if (!matchDesc) {
        throw new Error("Could not find post content in embed HTML description");
      }
      const rawContent = matchDesc[1];
      const content = decodeHTMLEntities(rawContent);

      // 2. Extract ALL image attachments from HTML
      const mediaUrls: string[] = [];
      const delayMatches = html.matchAll(/data-delayed-url="([^"]+)"/g);
      for (const match of delayMatches) {
        const decodedUrl = decodeHTMLEntities(match[1]);
        if (decodedUrl.includes("/dms/image/") && !decodedUrl.includes("profile-displayphoto") && !mediaUrls.includes(decodedUrl)) {
          mediaUrls.push(decodedUrl);
        }
      }

      const srcMatches = html.matchAll(/src="([^"]+)"/g);
      for (const match of srcMatches) {
        const decodedUrl = decodeHTMLEntities(match[1]);
        if (decodedUrl.includes("/dms/image/") && !decodedUrl.includes("profile-displayphoto") && !decodedUrl.includes("logo-linkedin") && !decodedUrl.includes("favicon") && !mediaUrls.includes(decodedUrl)) {
          mediaUrls.push(decodedUrl);
        }
      }

      const mediaUrl = mediaUrls[0] || undefined;
      const mediaType = mediaUrls.length > 0 ? "image" : "none";

      // 3. Extract reactions count
      const matchReactions = html.match(/data-test-id="social-actions__reaction-count"[^>]*>\s*([\d,]+)\s*<\/span>/);
      const likes = matchReactions ? parseInt(matchReactions[1].replace(/,/g, "")) : 0;

      // 4. Extract comments count
      const matchComments = html.match(/data-num-comments="(\d+)"/) || html.match(/data-id="social-actions__comments"[^>]*data-num-comments="(\d+)"/);
      const commentsCount = matchComments ? parseInt(matchComments[1]) : 0;

      // 5. Extract relative time (e.g., "1w", "3mo")
      const matchTime = html.match(/<time[^>]*>\s*([\s\S]*?)\s*<\/time>/);
      const rawTime = matchTime ? matchTime[1].replace(/<[^>]*>/g, "").trim() : "";
      
      // Compute relative timestamp
      let timestamp = new Date();
      if (rawTime) {
        const num = parseInt(rawTime);
        if (!isNaN(num)) {
          if (rawTime.includes("d")) timestamp.setDate(timestamp.getDate() - num);
          else if (rawTime.includes("w")) timestamp.setDate(timestamp.getDate() - num * 7);
          else if (rawTime.includes("mo") || rawTime.includes("m")) timestamp.setMonth(timestamp.getMonth() - num);
          else if (rawTime.includes("y")) timestamp.setFullYear(timestamp.getFullYear() - num);
        }
      }

      // 6. Deduce tag and title dynamically
      const hashMatch = content.match(/#(\w+)/);
      const tag = hashMatch ? hashMatch[1].toUpperCase() : "JOURNAL";

      const titleLine = content.split("\n")[0].trim().replace(/[❤️🚀🙏🎉]/g, "");
      const title = titleLine.length > 50 ? titleLine.slice(0, 47) + "..." : titleLine || "Startup Journal Entry";

      // Read time
      const wordCount = content.split(/\s+/).length;
      const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

      syncedPosts.push({
        author: "Soumen Bhatta",
        authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
        authorAvatar: "/src/assets/profile-photo.jpg",
        content,
        timestamp,
        likes: likes || seedPosts[syncedPosts.length]?.likes || 10,
        commentsCount: commentsCount || seedPosts[syncedPosts.length]?.commentsCount || 2,
        shares: 0,
        postUrl: `https://www.linkedin.com/posts/soumen-bhatta-370122198_activity-${urn.split(":").pop()}`,
        mediaUrl,
        mediaUrls,
        mediaType,
        tag,
        title,
        readTime
      });

    } catch (err: any) {
      console.warn(`Could not fetch post URN ${urn} from LinkedIn embeds:`, err.message);
    }
  }

  if (syncedPosts.length > 0) {
    console.log(`Success! Synced ${syncedPosts.length} posts dynamically from LinkedIn.`);
    await Post.deleteMany({});
    await Post.insertMany(syncedPosts);
    return syncedPosts;
  } else {
    console.warn("LinkedIn embed sync returned zero results. Retaining existing posts or seeding fallbacks.");
    const count = await Post.countDocuments();
    if (count === 0) {
      await Post.insertMany(seedPosts);
    }
    return null;
  }
}

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
  
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully.");
    
    // Seed initial posts if db is empty
    const count = await Post.countDocuments();
    if (count === 0) {
      console.log("Seeding initial posts...");
      await Post.insertMany(seedPosts);
    } else {
      // Ensure existing records have mediaUrls structure if previously missing
      const allPosts = await Post.find();
      for (const p of allPosts) {
        if (!p.mediaUrls || p.mediaUrls.length === 0) {
          p.mediaUrls = p.mediaUrl ? [p.mediaUrl] : [];
          await p.save();
        }
      }
    }
    
    // Perform an asynchronous sync on server start to refresh post details with dynamic LinkedIn data
    syncLinkedInPosts().catch(err => console.error("Initial LinkedIn sync error:", err.message));

  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connectDatabase;
