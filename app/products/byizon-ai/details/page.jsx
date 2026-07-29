import ProductDetailsPage from "../../../../components/ProductDetailsPage";

export const metadata = {
  title: "Byizon.ai Product Details | Antellay",
  description: "Explore Byizon.ai features, benefits, use cases and product information.",
};

const product = {
  name: "Byizon.ai",
  tagline: "The AI business operating system.",
  overview: "A natural-language AI workspace that connects business data, tools and workflows so teams can ask questions, understand performance and take action from one place.",
  description: [
    "Byizon.ai creates an intelligent layer across the systems a business already uses. Instead of switching between disconnected dashboards and reports, teams can interact with their operational data through clear, natural-language conversations.",
    "By combining business memory, live insights and workflow automation, Byizon.ai helps decision-makers move from a question to an informed action faster while keeping the experience accessible to teams across the organization.",
  ],
  image: "/images/products/byizon-ai.jpeg",
  accent: "#aeb7ff",
  color: "#5263eb",
  tint: "#eef0ff",
  glow: "rgba(91,108,255,.38)",
  features: [
    { title: "Conversational BI", copy: "Ask everyday business questions and receive clear, contextual answers without building manual reports." },
    { title: "Business Memory", copy: "Maintain useful organizational context across data, conversations, decisions and recurring workflows." },
    { title: "Connected Workspace", copy: "Bring CRM, operational tools and relevant data sources into one intelligent experience." },
    { title: "Real-time Dashboards", copy: "Monitor the metrics that matter through accessible, decision-ready views and summaries." },
    { title: "AI Agents", copy: "Use specialized intelligent assistants to support analysis, follow-ups and repeatable business tasks." },
    { title: "Workflow Automation", copy: "Reduce repetitive work and help teams respond faster with data-aware automated actions." },
  ],
  benefits: [
    "Faster access to business answers without waiting for manual analysis.",
    "One intelligent view across otherwise disconnected systems and data.",
    "More consistent decisions supported by live context and shared business memory.",
    "Reduced operational friction through AI-assisted workflows and automation.",
  ],
  useCases: [
    "Executive performance reviews",
    "Sales and CRM intelligence",
    "Automated business reporting",
    "Cross-functional KPI tracking",
    "Operational issue discovery",
    "Data-driven team planning",
  ],
  specifications: [
    ["Product Type", "AI business operating system"],
    ["Interface", "Natural-language workspace and dashboards"],
    ["Connectivity", "CRM, business tools and organizational data"],
    ["Capabilities", "Analytics, memory, agents and automation"],
  ],
  additionalInfo: "Byizon.ai is built for modern teams that need a simpler way to understand operations and coordinate action. Its responsive interface supports decision-making across desktop, tablet and mobile devices.",
};

export default function ByizonDetailsPage() {
  return <ProductDetailsPage product={product} />;
}
