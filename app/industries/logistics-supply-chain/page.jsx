import IndustryAiPage from "../../../components/IndustryAiPage";
import {
  BarChart3, Bot, Boxes, Clock3, Eye, Fuel, Gauge, MapPinned,
  PackageCheck, Radar, Route, ScanLine, ShieldCheck, Truck, Warehouse
} from "lucide-react";

export const metadata = {
  title: "AI-Powered Logistics & Supply Chain Solutions | Antellay",
  description: "Route optimization, warehouse automation, fleet intelligence, and real-time logistics analytics from Antellay.",
};

const config = {
  accent: "#1264d8",
  accentDark: "#0a56bd",
  eyebrow: "INDUSTRY SOLUTIONS",
  title: "AI-Powered",
  highlight: "Logistics & Supply Chain Solutions",
  description: "Optimize transportation, warehouses, fleet operations, and supply-chain visibility using Artificial Intelligence, IoT, GIS, and real-time analytics.",
  hero: "/images/logistics/logistics-hero.png",
  challengeImage: "/images/logistics/warehouse-ai.png",
  ctaImage: "/images/logistics/logistics-cta.png",
  dashboardTitle: "Enterprise Logistics Dashboard",
  ecosystemTitle: "Trusted by Modern Logistics Companies",
  solutionsTitle: "Our AI-Powered Logistics Solutions",
  dashboardVariant: "logistics",
  stats: [["1,245", "Live Shipments"], ["24,568", "Total Orders"], ["98.6%", "On-Time Delivery"], ["₹12.45 L", "Fuel Cost"]],
  badges: [
    { icon: Bot, label: "AI Route Planning" },
    { icon: Radar, label: "Real-Time Tracking" },
    { icon: Warehouse, label: "Warehouse Automation" },
    { icon: BarChart3, label: "Predictive Analytics" },
    { icon: ScanLine, label: "Computer Vision" },
    { icon: ShieldCheck, label: "Fleet Safety" }
  ],
  logos: ["DHL", "FedEx", "UPS", "BLUE DART", "DELHIVERY", "amazon logistics"],
  challenges: [
    { icon: Fuel, title: "Rising Fuel Costs", copy: "Fuel expense and consumption pressure" },
    { icon: Route, title: "Poor Route Planning", copy: "Inefficient routes and empty miles" },
    { icon: Warehouse, title: "Warehouse Inefficiency", copy: "Slow picking and inventory movement" },
    { icon: Clock3, title: "Delivery Delays", copy: "Late deliveries and missed SLAs" },
    { icon: Eye, title: "Lack of Visibility", copy: "Limited real-time shipment insight" },
    { icon: Boxes, title: "Manual Operations", copy: "Repetitive processes and errors" }
  ],
  solutions: [
    { icon: Route, title: "Route Optimization", image: "/images/logistics/logistics-hero.png", items: ["AI Route Planning", "Traffic Prediction", "ETA Optimization", "Multi-stop Routing", "Fuel Optimization"] },
    { icon: Warehouse, title: "Warehouse AI", image: "/images/logistics/warehouse-ai.png", items: ["Inventory Intelligence", "Warehouse Automation", "Smart Picking", "Demand Forecasting", "Barcode & Vision AI"] },
    { icon: Truck, title: "Fleet Intelligence", image: "/images/logistics/fleet-intelligence.png", items: ["GPS Tracking", "Driver Monitoring", "Fuel Analytics", "Vehicle Health", "Predictive Maintenance"] }
  ],
  features: [
    { icon: BarChart3, label: "AI Demand Forecasting" },
    { icon: ScanLine, label: "Computer Vision" },
    { icon: Gauge, label: "Predictive Analytics" },
    { icon: Radar, label: "IoT Monitoring" },
    { icon: MapPinned, label: "Live Tracking" },
    { icon: PackageCheck, label: "AI Alerts" }
  ],
  technologies: ["OpenAI", "AWS", "Azure", "Google Cloud", "Mapbox", "ArcGIS", "Docker", "Python", "TensorFlow", "Kafka", "PostgreSQL", "Redis"],
  workflow: [
    { icon: PackageCheck, label: "Order" }, { icon: Warehouse, label: "Warehouse Planning" },
    { icon: Route, label: "Route Planning" }, { icon: Truck, label: "Fleet Dispatch" },
    { icon: MapPinned, label: "Real-Time Tracking" }, { icon: BarChart3, label: "Analytics" }
  ],
  useCasesTitle: "Industries We Support",
  useCases: ["E-commerce", "Retail", "Manufacturing", "Healthcare", "FMCG", "Cold Chain", "Food Delivery", "Courier Services"],
  useCaseImages: [
    "/images/logistics/logistics-hero.png", "/images/logistics/warehouse-ai.png",
    "/images/logistics/fleet-intelligence.png", "/images/logistics/warehouse-ai.png",
    "/images/logistics/warehouse-ai.png", "/images/logistics/fleet-intelligence.png",
    "/images/logistics/logistics-hero.png", "/images/logistics/fleet-intelligence.png"
  ],
  impact: [["99%", "Delivery Accuracy"], ["35%", "Fuel Cost Savings"], ["45%", "Route Optimization"], ["60%", "Operational Efficiency"]],
  faqs: ["How can AI improve route optimization?", "Do you provide real-time fleet tracking?", "Can your solution integrate with our existing systems?", "How does Warehouse AI improve operations?", "Is your solution scalable for large enterprises?"],
  ctaTitle: "Ready to Modernize Your Logistics Operations?",
  ctaCopy: "Leverage AI, IoT, and real-time analytics to optimize your supply chain, reduce costs, and deliver exceptional customer experiences."
};

export default function LogisticsSupplyChainPage() {
  return <IndustryAiPage config={config} />;
}
