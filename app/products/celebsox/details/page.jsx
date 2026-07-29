import ProductDetailsPage from "../../../../components/ProductDetailsPage";

export const metadata = {
  title: "CelebsoX Product Details | Antellay",
  description: "Explore CelebsoX features, benefits, use cases and product information.",
};

const product = {
  name: "CelebsoX",
  tagline: "A social network for ambitious dreamers.",
  overview: "A creator-first professional network where talent, brands, public figures and industry teams connect, showcase work and build meaningful collaborations.",
  description: [
    "CelebsoX brings discovery, professional identity and collaboration into one creator-focused experience. Members can present their work through rich profiles and portfolios while building a trusted network around their ambitions.",
    "The platform helps creators become discoverable, gives brands a clearer way to find relevant talent and makes it easier for both sides to move from an introduction to a genuine opportunity.",
  ],
  image: "/images/products/celebsox.jpeg",
  accent: "#f7c843",
  color: "#c58b00",
  tint: "#fff7d6",
  glow: "rgba(247,184,23,.34)",
  features: [
    { title: "Creator Profiles", copy: "Build a polished professional presence that highlights identity, skills, experience and creative direction." },
    { title: "Portfolio & Media", copy: "Showcase photography, videos, campaigns and projects in an engaging visual portfolio." },
    { title: "Smart Discovery", copy: "Find creators, professionals and opportunities aligned with interests, industries and ambitions." },
    { title: "Brand Collaborations", copy: "Create clearer paths for brands and talent to connect around campaigns and partnerships." },
    { title: "Community Networking", copy: "Follow inspiring work, grow meaningful relationships and participate in a creator-first ecosystem." },
    { title: "Opportunity Building", copy: "Turn visibility and conversations into collaborations, professional growth and new work." },
  ],
  benefits: [
    "A single professional identity built specifically for creative talent.",
    "Greater visibility for portfolios, achievements and ongoing work.",
    "Faster discovery of relevant talent and collaboration partners.",
    "A focused network that connects community engagement with career opportunities.",
  ],
  useCases: [
    "Creators showcasing portfolios",
    "Brands sourcing campaign talent",
    "Models and artists growing visibility",
    "Photographers discovering collaborators",
    "Public figures building communities",
    "Creative teams forming project networks",
  ],
  specifications: [
    ["Product Type", "Creator-first social and professional network"],
    ["Primary Users", "Creators, brands, professionals and public figures"],
    ["Core Experience", "Profiles, portfolios, discovery and collaboration"],
    ["Access", "Responsive web experience"],
  ],
  additionalInfo: "CelebsoX is designed as a scalable digital ecosystem for the creative economy, with an experience that works across desktop, tablet and mobile screens.",
};

export default function CelebsoXDetailsPage() {
  return <ProductDetailsPage product={product} />;
}
