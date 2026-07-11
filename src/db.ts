import mongoose from "mongoose";
import Post from "./models/Post.js";

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
    mediaType: "none",
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
    mediaType: "none",
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
    mediaType: "image",
    tag: "HYPERLOCAL",
    title: "Offline Branding & Hyperlocal Beginnings",
    readTime: "3 min read"
  }
];

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
  
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully.");
    
    // Always refresh posts in development to ensure any schema/data changes are applied
    console.log("Refreshing database with default LinkedIn posts...");
    await Post.deleteMany({});
    await Post.insertMany(seedPosts);
    console.log("LinkedIn posts seeded successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connectDatabase;

