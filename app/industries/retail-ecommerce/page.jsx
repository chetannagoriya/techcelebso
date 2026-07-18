import { Activity, BarChart3, BrainCircuit, Camera, ClipboardCheck, Cloud, Database, Eye, PackageSearch, ShoppingCart, Users, Warehouse } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Retail & E-Commerce AI Solutions",
  title: "AI-Powered Retail &",
  highlight: "E-Commerce Solutions",
  description: "Transform retail operations with AI-driven product insights, smart inventory management, personalized recommendations and real-time store monitoring.",
  hero: "/images/retail-ecommerce/retail-hero.png",
  challengeImage: "/images/industries/retail_consumer_goods.jpg",
  dashboardImage: "/images/consumer-technology/capabilities.png",
  ctaImage: "/images/cloud_infra_cta.jpg",
  dashboardTitle: "Retail Intelligence Dashboard",
  stats: [["₹24.8M", "Total Sales"], ["18,762", "Orders"], ["₹1,324", "Avg Order Value"], ["2.94%", "Conversion"]],
  badges: [[PackageSearch, "Product AI"], [Warehouse, "Inventory AI"], [BrainCircuit, "Recommendations"], [Camera, "In-Store Monitoring"], [Eye, "Shelf Analytics"], [Users, "Customer Analytics"], [BarChart3, "Demand Forecasting"], [Activity, "Loss Prevention"]],
  logos: ["amazon", "Flipkart", "Myntra", "Reliance Retail", "TATA CLiQ", "DMart", "bigbasket", "zepto"],
  challenges: [[Warehouse, "Inventory Mismatch", "Bad stock data leads to loss"], [PackageSearch, "Out of Stock & Stockouts", "High OOS hurts revenue"], [Users, "Low Conversion", "Lack of personalization"], [Activity, "Shrinkage & Losses", "Theft and operational loss"], [Camera, "Manual Monitoring", "Store monitoring is error-prone"], [BarChart3, "Demand Uncertainty", "Poor forecasting creates waste"]],
  solutions: [[PackageSearch, "Product AI", "/images/consumer-technology/mobile-apps.png", ["Product Recognition", "Attribute Extraction", "Image Classification", "Smart Tagging", "Catalog Enrichment"]], [Warehouse, "Inventory Intelligence", "/images/logistics/warehouse-ai.png", ["Real-time Stock Tracking", "Stock Prediction", "Reorder Automation", "Warehouse Analytics", "Multi-location Sync"]], [BrainCircuit, "Recommendation Systems", "/images/consumer-technology/saas-platforms.png", ["Personalized Recommendations", "Customer Behavior", "Cross-sell & Upsell", "Dynamic Offers", "Real-time Personalization"]], [Camera, "In-Store Monitoring", "/images/industry-showcases/hospitality-travel.png", ["People Counting", "Queue Management", "Shelf Monitoring", "Heatmap Analytics", "Loss Prevention"]]],
  useCases: [["Supermarkets", "/images/industries/retail_consumer_goods.jpg"], ["Fashion Stores", "/images/retail-ecommerce/retail-hero.png"], ["Electronics Stores", "/images/consumer-technology/ai-products.png"], ["Pharmacies", "/images/healthcare/healthcare-hero.png"], ["Warehouses", "/images/logistics/warehouse-ai.png"], ["Convenience Stores", "/images/industry-showcases/hospitality-travel.png"], ["Shopping Malls", "/images/industries/Real Estate.jpg"], ["E-commerce", "/images/consumer-technology/consumer-tech-hero.png"], ["Hypermarkets", "/images/logistics/logistics-cta.png"]],
  features: ["Computer Vision", "Deep Learning Models", "Predictive Analytics", "Real-time Alerts", "Automation & Workflows", "Analytics Dashboards", "API Integrations", "Scalable & Secure Platform"],
  modalitiesTitle: "Camera Analytics Preview",
  modalities: ["People Count", "Queue Length", "Shelf Compliance", "Planogram", "Footfall", "Heatmaps", "Inventory", "Loss Alerts"],
  technologies: ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "AWS", "Azure", "Google Cloud", "NVIDIA", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
  workflow: [[Database, "Data Collection"], [Cloud, "Data Processing"], [PackageSearch, "Product Understanding"], [BrainCircuit, "AI Training"], [BarChart3, "Prediction"], [ClipboardCheck, "Action"], [Activity, "Monitoring"]],
  why: ["Domain Expertise in Retail", "High Accuracy AI Models", "Real-time & Scalable Solutions", "End-to-End AI Implementation", "Seamless Integrations", "24/7 Support & Maintenance"],
  impact: [["20-30%", "Increase in Sales"], ["15-25%", "Less Stockouts"], ["20-40%", "Better Inventory"], ["2-3x", "Efficiency"]],
  faqs: ["Can AI integrate with existing POS/ERP systems?", "What kind of cameras do you support?", "How accurate is inventory detection?", "Can you deploy on-premise for stores?", "Do you support multi-store analytics?"],
  ctaTitle: "Smarter Retail with AI-Powered Intelligence",
  ctaCopy: "Optimize inventory, enhance customer experience, prevent losses and drive more sales with AI-driven retail solutions."
};

export const metadata = { title: "AI Retail & E-Commerce Solutions | Antellay", description: "Retail AI, e-commerce intelligence, inventory AI, recommendation systems and computer vision." };

export default function RetailEcommercePage() {
  return <IndustryLandingPage config={config} />;
}
