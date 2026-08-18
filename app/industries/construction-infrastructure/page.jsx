import { Activity, BarChart3, BrainCircuit, Building2, Camera, ClipboardCheck, Cloud, Database, Eye, Gauge, HardHat, ShieldCheck, Wrench } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const logo = (name, domain) => ({ name, src: `https://logo.clearbit.com/${domain}` });

const config = {
  eyebrow: "Construction & Infrastructure",
  title: "AI-Powered Construction &",
  highlight: "Infrastructure Solutions",
  description: "Leverage AI and computer vision for BIM analysis, site monitoring and progress tracking to accelerate construction and ensure project success.",
  hero: "/images/construction-infrastructure/construction-hero.png",
  challengeImage: "/images/construction-infrastructure/construction-hero.png",
  dashboardImage: "/images/automotive/automotive-dashboard.png",
  ctaImage: "/images/construction-infrastructure/construction-hero.png",
  dashboardTitle: "Construction Intelligence Dashboard",
  stats: [["42", "Active Projects"], ["36", "Sites Monitored"], ["68%", "Avg Progress"], ["92%", "Safety Score"]],
  badges: [[Building2, "BIM Intelligence"], [Camera, "Site Monitoring"], [BarChart3, "Progress Tracking"], [ShieldCheck, "Safety Analytics"], [Gauge, "Cost Optimization"], [BrainCircuit, "Risk Prediction"], [Eye, "Computer Vision"], [ClipboardCheck, "Documentation"]],
  logos: [
    logo("Larsen & Toubro", "larsentoubro.com"),
    logo("AECOM", "aecom.com"),
    logo("Hitachi", "hitachi.com"),
    logo("GMR", "gmrgroup.in"),
    logo("VINCI", "vinci.com"),
    logo("STRABAG", "strabag.com"),
    logo("Skanska", "skanska.com"),
    logo("Balfour Beatty", "balfourbeatty.com")
  ],
  challenges: [[Activity, "Project Delays", "Unexpected delays impact budgets and timelines"], [ShieldCheck, "Site Safety Risks", "High-risk sites create safety incidents"], [Eye, "Progress Visibility", "Lack of real-time project insights"], [ClipboardCheck, "Quality Assurance", "Inconsistent quality and compliance"], [Gauge, "Cost Overruns", "Budget deviation and resource inefficiency"], [Database, "Data Fragmentation", "Siloed data across teams and systems"]],
  solutions: [[Building2, "BIM Intelligence", "/images/construction-infrastructure/construction-hero.png", ["3D Model Analysis", "Clash Detection", "Quantity Takeoff", "Design Validation", "BIM to Site Insights"]], [Camera, "Site Monitoring", "/images/industry-showcases/government-smart-cities.png", ["Real-time Site Tracking", "Object Detection", "Safety Monitoring", "Activity Recognition", "Environmental Monitoring"]], [BarChart3, "Progress Tracking", "/images/industries/Manufacturing.jpg", ["Real-time Progress", "Milestone Tracking", "Timeline Comparison", "Variance Analysis", "Automated Reports"]], [ClipboardCheck, "AI Documentation", "/images/data-annotation-workspace.png", ["Document Extraction", "Progress Reports", "Compliance Check", "Auto Tagging", "Smart Insights"]]],
  useCases: [["Smart Cities", "/images/industry-showcases/government-smart-cities.png"], ["High-Rise Buildings", "/images/industries/Real Estate.jpg"], ["Bridges & Roads", "/images/gis_cta_satellite.jpg"], ["Rail & Metro", "/images/industry-showcases/telecom.png"], ["Industrial Facilities", "/images/manufacturing/manufacturing-hero.png"], ["Ports & Airports", "/images/industry-showcases/maritime-ports.png"], ["Solar Projects", "/images/energy-utilities/renewable-analytics.png"], ["Disaster Recovery", "/images/environment-climate/environment-hero.png"], ["Infrastructure", "/images/construction-infrastructure/construction-hero.png"]],
  features: ["BIM Analysis & Clash Detection", "Site Monitoring & Safety Analytics", "Progress Tracking & Forecasting", "AI Document Processing", "Risk & Delay Prediction", "Quality Control & Compliance", "Real-time Alerts", "Actionable Reports"],
  modalitiesTitle: "Live Site Monitoring",
  modalities: ["Site A", "Site B", "Site C", "Site D", "Workers", "Equipment", "Safety", "Progress"],
  technologies: ["TensorFlow", "PyTorch", "OpenCV", "NVIDIA", "AWS", "Azure", "Google Cloud", "MongoDB", "AutoCAD", "Revit", "SQL Server", "Docker"],
  workflow: [[Camera, "Data Collection"], [Eye, "Site Analysis"], [BrainCircuit, "AI Processing"], [BarChart3, "Progress Tracking"], [ClipboardCheck, "Reports"], [ShieldCheck, "Decisions"], [Activity, "Monitoring"]],
  why: ["AI-powered Construction Intelligence", "Real-time Insights Across Projects", "Improved Safety & Compliance", "Lower Project Costs", "Scalable & Secure Platform", "Expert Implementation"],
  impact: [["35%", "Delay Reduction"], ["28%", "Cost Savings"], ["40%", "Safety Improvement"], ["99%", "Customer Satisfaction"]],
  faqs: ["How does AI improve construction projects?", "Can it integrate with project management tools?", "Is site monitoring real-time and accurate?", "Do you support BIM file formats?", "Is the platform scalable for large projects?"],
  ctaTitle: "Build Smarter. Monitor Better. Deliver with Confidence.",
  ctaCopy: "AI-powered solutions for every phase of your construction and infrastructure projects."
};

export const metadata = { title: "AI Construction & Infrastructure Solutions | Antellay", description: "Construction AI, BIM intelligence, site monitoring, progress tracking and infrastructure analytics." };

export default function ConstructionInfrastructurePage() {
  return <IndustryLandingPage config={config} />;
}
