import { Activity, BarChart3, Bike, BrainCircuit, ClipboardCheck, Cloud, Database, MapPin, PackageCheck, Route, Truck, Users, Warehouse } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Quick Commerce & Delivery Solutions",
  title: "AI-Powered Quick Commerce &",
  highlight: "Delivery Solutions",
  description: "Optimize deliveries, predict demand, reduce costs and delight customers with AI-powered delivery optimization, route intelligence and demand forecasting.",
  hero: "/images/quick-commerce-delivery/quick-commerce-hero.png",
  challengeImage: "/images/logistics/warehouse-ai.png",
  dashboardImage: "/images/logistics/logistics-hero.png",
  ctaImage: "/images/logistics/logistics-cta.png",
  dashboardTitle: "Live Operations Overview",
  stats: [["24,568", "Orders Today"], ["22,457", "Delivered"], ["96.8%", "On-Time Delivery"], ["1,245", "Active Riders"]],
  badges: [[PackageCheck, "Delivery Optimization"], [Route, "Route Intelligence"], [BarChart3, "Demand Forecasting"], [MapPin, "Real-time Tracking"], [Activity, "Analytics"], [Truck, "Dispatch"], [Warehouse, "Dark Stores"], [Users, "Customer Experience"]],
  logos: ["zomato", "swiggy", "zepto", "blinkit", "dunzo", "instamart"],
  challenges: [[Activity, "High Delivery Costs", "Rising fuel and operations cost"], [Route, "Inefficient Routes", "Suboptimal route planning"], [BarChart3, "Unpredictable Demand", "Demand variability creates stockouts"], [Truck, "Low On-time Delivery", "Traffic and delays impact SLAs"], [Warehouse, "Poor Resource Utilization", "Idle riders and vehicles"], [Users, "Customer Dissatisfaction", "Late delivery reduces loyalty"]],
  solutions: [[PackageCheck, "Delivery Optimization", "/images/quick-commerce-delivery/quick-commerce-hero.png", ["Real-time Optimization", "Multi-stop Optimization", "Dynamic Rerouting", "Traffic-aware Planning", "Cost Optimization"]], [Route, "Route Intelligence", "/images/logistics/logistics-hero.png", ["Route Analysis", "ETA Prediction", "Traffic Intelligence", "Geospatial Insights", "Zone Optimization"]], [BarChart3, "Demand Forecasting", "/images/consumer-technology/capabilities.png", ["Demand Prediction", "Sales Forecasting", "Location Intelligence", "Inventory Planning", "Seasonality Analysis"]], [Warehouse, "Dark Store Intelligence", "/images/logistics/warehouse-ai.png", ["Stock Visibility", "Slotting Optimization", "Picking Analytics", "Reorder Alerts", "Resource Planning"]]],
  useCases: [["Q-Commerce", "/images/quick-commerce-delivery/quick-commerce-hero.png"], ["E-Commerce", "/images/consumer-technology/consumer-tech-hero.png"], ["Grocery", "/images/industries/retail_consumer_goods.jpg"], ["Pharma", "/images/pharma-life-sciences/pharma-hero.png"], ["Food Delivery", "/images/logistics/logistics-cta.png"], ["Courier", "/images/logistics/fleet-intelligence.png"], ["Dark Stores", "/images/logistics/warehouse-ai.png"], ["Retail Delivery", "/images/retail-ecommerce/retail-hero.png"], ["Fleet Ops", "/images/automotive/automotive-dashboard.png"]],
  features: ["AI Demand Prediction", "Smart Route Planning", "Real-time Tracking", "Anomaly Detection", "Predictive Analytics", "Auto Dispatching", "Live Operations", "Scalable Platform"],
  modalitiesTitle: "Industries We Serve",
  modalities: ["Q-Commerce", "E-Commerce", "Grocery", "Pharma", "Food Delivery", "Courier", "Retail", "Logistics"],
  technologies: ["OpenAI", "AWS", "Azure", "Google Cloud", "Databricks", "Kafka", "Docker", "Python", "PostgreSQL", "Redis", "Mapbox", "TensorFlow"],
  workflow: [[Database, "Order Received"], [BarChart3, "Demand Forecast"], [Route, "Route Optimization"], [Truck, "Dispatch"], [MapPin, "Tracking"], [PackageCheck, "Delivery"], [Activity, "Insights"]],
  why: ["Delivery Domain Expertise", "Real-time Route AI", "Demand Forecasting", "Scalable Operations", "Easy Integrations", "24/7 Support"],
  impact: [["30%", "Lower Cost"], ["25%", "Faster Delivery"], ["20%", "Higher Conversion"], ["95%", "Satisfaction"]],
  faqs: ["How does AI optimize delivery routes?", "Can AI predict demand by location?", "Does the platform support real-time tracking?", "Can it integrate with existing systems?", "Is it suitable for quick commerce businesses?"],
  ctaTitle: "Deliver Faster. Smarter. Delight Every Customer.",
  ctaCopy: "Leverage AI, real-time data and intelligent automation to optimize deliveries and scale your quick commerce business."
};

export const metadata = { title: "AI Quick Commerce & Delivery Solutions | Antellay", description: "Quick commerce AI, route optimization, delivery tracking and demand forecasting." };
export default function QuickCommerceDeliveryPage() { return <IndustryLandingPage config={config} />; }
