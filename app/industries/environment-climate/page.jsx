import { Activity, BarChart3, BrainCircuit, ClipboardCheck, Cloud, Database, Droplets, Globe2, Leaf, Radar, Satellite, ShieldCheck, TreePine } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Environmental & Climate Solutions",
  title: "AI-Powered Environmental &",
  highlight: "Climate Solutions",
  description: "Monitor climate, protect forests, manage natural resources and build a sustainable future with AI, remote sensing and geospatial intelligence.",
  hero: "/images/environment-climate/environment-hero.png",
  challengeImage: "/images/agriculture/satellite-analytics.png",
  dashboardImage: "/images/gis_hero_map.jpg",
  ctaImage: "/images/environment-climate/environment-hero.png",
  dashboardTitle: "Environmental Intelligence Dashboard",
  stats: [["42", "Air Quality Index"], ["24.6°C", "Temperature"], ["12.4 mm", "Precipitation"], ["58%", "Humidity"]],
  badges: [[Globe2, "Climate Monitoring"], [TreePine, "Forest Mapping"], [Leaf, "Biodiversity"], [BarChart3, "Carbon Tracking"], [ShieldCheck, "Disaster Risk"], [Activity, "Sustainability"], [Satellite, "Remote Sensing"], [Droplets, "Water Quality"]],
  logos: ["NASA", "ESA", "World Bank", "UNEP", "Greenpeace", "WWF", "Esri", "Nature Conservancy"],
  challenges: [[Activity, "Climate Variability", "Unpredictable weather and temperature"], [TreePine, "Deforestation", "Loss of forests and biodiversity"], [Database, "Limited Real-time Data", "Lack of accurate timely information"], [BarChart3, "High Carbon Emissions", "Rising greenhouse gas emissions"], [ShieldCheck, "Natural Disasters", "Floods, fires and storms"], [BrainCircuit, "Complex Data Analysis", "Large datasets and manual processing"]],
  solutions: [[Globe2, "Climate Monitoring", "/images/environment-climate/environment-hero.png", ["Global Climate Tracking", "Temperature Monitoring", "Precipitation Analysis", "Sea Level Monitoring", "Weather Alerts"]], [TreePine, "Forest Mapping", "/images/agriculture/satellite-analytics.png", ["Forest Cover Mapping", "Deforestation Detection", "Habitat Analysis", "Illegal Logging Detection", "Reforestation Monitoring"]], [BarChart3, "Carbon Tracking", "/images/energy-utilities/renewable-analytics.png", ["Carbon Footprint", "Emission Source Analysis", "Carbon Sequestration", "Net Zero Pathways", "Compliance Reporting"]], [ShieldCheck, "Disaster Risk Management", "/images/industry-showcases/government-smart-cities.png", ["Flood Prediction", "Fire Risk Mapping", "Drought Monitoring", "Storm Tracking", "Early Alerts"]]],
  useCases: [["Government", "/images/industry-showcases/government-smart-cities.png"], ["NGOs", "/images/industries/Non-profit.jpg"], ["Research Institutes", "/images/industries/Education.jpg"], ["Agriculture", "/images/agriculture/crop-monitoring.png"], ["Energy", "/images/energy-utilities/power-grid-mapping.png"], ["Conservation", "/images/environment-climate/environment-hero.png"], ["Forestry", "/images/agriculture/precision-farming.png"], ["Water Bodies", "/images/gis_cta_satellite.jpg"], ["Disaster Response", "/images/industries/Technology.jpg"]],
  features: ["Satellite Data Analysis", "Computer Vision", "Predictive Analytics", "Anomaly Detection", "GeoAI Modeling", "Automated Reporting", "Risk Alerts", "Scalable Platform"],
  modalitiesTitle: "Data Sources",
  modalities: ["Satellite Imagery", "Drone Surveys", "Weather Stations", "IoT Sensors", "Ground Reports", "Public Datasets", "GIS Layers", "Climate Models"],
  technologies: ["Google Earth Engine", "AWS", "Azure", "Google Cloud", "ArcGIS", "Python", "TensorFlow", "PyTorch", "PostgreSQL", "BigQuery", "Kafka", "Docker"],
  workflow: [[Database, "Data Collection"], [Cloud, "Data Processing"], [BrainCircuit, "AI Analysis"], [BarChart3, "Insights"], [ClipboardCheck, "Decision Support"], [Activity, "Impact Monitoring"], [ShieldCheck, "Alerts"]],
  why: ["Climate Domain Expertise", "Remote Sensing AI", "Real-time Dashboards", "Scalable Cloud GIS", "Reliable Data Pipelines", "24/7 Monitoring"],
  impact: [["40%", "Faster Insights"], ["35%", "Less Deforestation"], ["25%", "Lower Emissions"], ["90%", "Preparedness"]],
  faqs: ["How does AI help in climate monitoring?", "Can you detect deforestation in real-time?", "What data sources do you use?", "Do you provide custom dashboards?", "Can this integrate with GIS systems?"],
  ctaTitle: "Building a Sustainable Future with AI",
  ctaCopy: "Leverage AI, satellite data and advanced analytics to protect our planet and create a greener tomorrow."
};

export const metadata = { title: "AI Environmental & Climate Solutions | Antellay", description: "Environmental AI, climate monitoring, forest mapping, carbon tracking and disaster risk management." };
export default function EnvironmentClimatePage() { return <IndustryLandingPage config={config} />; }
