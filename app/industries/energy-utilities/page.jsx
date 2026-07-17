import IndustryAiPage from "../../../components/IndustryAiPage";
import { BarChart3, Bot, Gauge, Map, Radar, ShieldCheck, TrendingUp, Wind, Zap } from "lucide-react";

export const metadata = {
  title: "AI-Powered Energy & Utilities Solutions | Antellay",
  description: "Smart-grid mapping, renewable analytics, IoT asset monitoring, and predictive utility intelligence from Antellay.",
};

const config = {
  accent:"#1264d8", accentDark:"#0a56bd", eyebrow:"INDUSTRY SOLUTIONS", title:"AI-Powered", highlight:"Energy & Utilities Solutions",
  description:"Optimize power grids, renewable energy assets, utility networks, and infrastructure using AI, GIS Mapping, IoT, and predictive analytics.",
  ecosystemTitle:"Trusted Across the Energy Ecosystem", solutionsTitle:"Our Energy & Utility Solutions",
  hero:"/images/energy-utilities-ai-hero.png", dashboardTitle:"Enterprise Energy Dashboard",
  challengeImage:"/images/energy-utilities/power-grid-mapping.png",
  ctaImage:"/images/energy-utilities/connected-energy-city.png",
  stats:[["26,580 MW","Total Generation"],["24,135 MW","Consumption"],["98.6%","Grid Efficiency"],["1,245","Active Substations"]],
  badges:[{icon:Bot,label:"AI Intelligence"},{icon:Map,label:"GIS Mapping"},{icon:Radar,label:"IoT Monitoring"},{icon:TrendingUp,label:"Predictive Analytics"},{icon:ShieldCheck,label:"Resilient Infrastructure"},{icon:Zap,label:"Smart Grid Optimization"}],
  logos:["SIEMENS","Schneider Electric","GE Vernova","ABB","HITACHI","TATA POWER","Adani Electricity","NTPC"],
  challenges:[{icon:Zap,title:"Grid Outages",copy:"Frequent and unpredictable outages"},{icon:TrendingUp,title:"High Energy Loss",copy:"Transmission and distribution losses"},{icon:Wind,title:"Renewable Integration",copy:"Intermittent renewable energy supply"},{icon:Radar,title:"No Asset Visibility",copy:"Lack of real-time asset visibility"},{icon:Gauge,title:"Manual Maintenance",copy:"Time-consuming manual inspections"},{icon:ShieldCheck,title:"Equipment Failure",copy:"Unexpected failures and breakdowns"}],
  solutions:[{icon:Map,title:"Power Grid Mapping",image:"/images/energy-utilities/power-grid-mapping.png",items:["GIS Grid Mapping","Transmission Network","Substation Mapping","Distribution Planning","Outage Analysis"]},{icon:Gauge,title:"Asset Monitoring",image:"/images/energy-utilities/asset-monitoring.png",items:["Transformer Health","IoT Sensors","Live Monitoring","Predictive Maintenance","Fault Detection"]},{icon:Wind,title:"Renewable Energy Analytics",image:"/images/energy-utilities/renewable-analytics.png",items:["Solar Performance","Wind Analytics","Energy Forecasting","Carbon Tracking","Production Optimization"]}],
  features:[{icon:BarChart3,label:"AI Load Forecasting"},{icon:ShieldCheck,label:"Computer Vision Inspection"},{icon:TrendingUp,label:"Predictive Analytics"},{icon:Radar,label:"IoT Monitoring"},{icon:Zap,label:"Smart Grid Intelligence"},{icon:Gauge,label:"Fault Detection Alerts"}],
  technologies:["OpenAI","AWS","Azure","Google Cloud","ArcGIS","Mapbox","Docker","Python","TensorFlow","Kafka","PostgreSQL","IoT"],
  workflow:[{icon:Zap,label:"Power Generation"},{icon:Radar,label:"Grid Monitoring"},{icon:Bot,label:"AI Analysis"},{icon:Gauge,label:"Asset Monitoring"},{icon:ShieldCheck,label:"Fault Detection"},{icon:TrendingUp,label:"Optimization"}],
  useCases:["Power Utilities","Solar Energy","Wind Energy","Oil & Gas","Water Utilities","Smart Cities","Manufacturing","Government Infrastructure"],
  useCaseImages:["/images/energy-utilities/power-grid-mapping.png","/images/energy-utilities/renewable-analytics.png","/images/energy-utilities/renewable-analytics.png","/images/energy-utilities/asset-monitoring.png","/images/energy-utilities/power-grid-mapping.png","/images/energy-utilities/connected-energy-city.png","/images/energy-utilities/asset-monitoring.png","/images/energy-utilities/connected-energy-city.png"],
  useCasesTitle:"Industries We Support",
  impact:[["99.9%","Grid Uptime"],["40%","Maintenance Cost Reduction"],["55%","Faster Fault Detection"],["30%","Energy Savings"]],
  faqs:["How does AI improve power grid management?","Can the platform monitor renewable energy assets?","Does the platform support GIS Mapping?","Can IoT devices be integrated with the platform?","Is the platform suitable for utility companies?"],
  ctaTitle:"Power the Future with AI & Smart Energy Intelligence", ctaCopy:"Leverage AI, IoT, GIS, and real-time analytics to build smarter, sustainable, and resilient energy systems."
};
export default function EnergyUtilitiesPage(){ return <IndustryAiPage config={config}/>; }
