import IndustryAiPage from "../../../components/IndustryAiPage";
import { BarChart3, Bot, CloudSun, Droplets, Gauge, Map, Radar, Satellite, ScanLine, Sprout, Tractor, TrendingUp, Wheat } from "lucide-react";

export const metadata = {
  title: "AI-Powered Agriculture Solutions | Antellay",
  description: "Precision farming, crop monitoring, satellite analytics, and AI-powered agriculture solutions from Antellay.",
};

const config = {
  accent:"#119b4b", accentDark:"#178b3d", eyebrow:"AGRICULTURE SOLUTIONS", title:"AI-Powered", highlight:"Agriculture Solutions",
  description:"Empowering modern agriculture with Precision Farming, Satellite Analytics, Crop Monitoring, Drone Intelligence, and AI-powered farm management.",
  ecosystemTitle:"Trusted Across Agriculture Ecosystem", solutionsTitle:"Our Agriculture Solutions",
  hero:"/images/agriculture-ai-hero.png", dashboardTitle:"AI Agriculture Dashboard",
  dashboardImage:"/images/agriculture/satellite-analytics.png", smartImage:"/images/agriculture/smart-irrigation.png",
  impactImage:"/images/agriculture/precision-farming.png", ctaImage:"/images/agriculture/smart-irrigation.png",
  dashboardVariant:"agriculture",
  stats:[["24","Total Fields"],["1,245 ha","Total Area"],["87%","Crop Health"],["43%","Soil Moisture"]],
  badges:[{icon:Bot,label:"AI & ML Powered"},{icon:Satellite,label:"Satellite Intelligence"},{icon:Radar,label:"Real-Time Monitoring"},{icon:TrendingUp,label:"Actionable Insights"},{icon:BarChart3,label:"Higher Yield & Profitability"},{icon:Wheat,label:"Smarter Crop Decisions"}],
  logos:["AgriTech","JOHN DEERE","BAYER","syngenta","CORTEVA","Nutrien","ICRISAT","FMC"],
  solutions:[{icon:Tractor,title:"Precision Farming",image:"/images/agriculture/precision-farming.png",items:["Variable Rate Application","Soil Analysis","Smart Irrigation","Yield Optimization","GPS & Auto Guidance"]},{icon:Sprout,title:"Crop Monitoring",image:"/images/agriculture/crop-monitoring.png",items:["Crop Health Detection","Disease Detection","Pest Monitoring","Growth Analysis","Seasonal Monitoring"]},{icon:Satellite,title:"Satellite Analytics",image:"/images/agriculture/satellite-analytics.png",items:["NDVI Analysis","Land Classification","Moisture Analysis","Weather Intelligence","Crop Forecasting"]}],
  features:[{icon:BarChart3,label:"AI Yield Prediction"},{icon:ScanLine,label:"Computer Vision"},{icon:Satellite,label:"Satellite Analysis"},{icon:Map,label:"GIS Intelligence"},{icon:CloudSun,label:"Weather Forecasting"},{icon:Droplets,label:"Smart Irrigation"}],
  technologies:["ArcGIS","QGIS","Google Earth Engine","Sentinel Hub","Landsat","DroneDeploy","Pix4D","Python","TensorFlow","OpenCV","AWS","Azure"],
  workflow:[{icon:Satellite,label:"Satellite Data"},{icon:Radar,label:"Field Survey"},{icon:Bot,label:"AI Analysis"},{icon:Sprout,label:"Crop Monitoring"},{icon:TrendingUp,label:"Yield Prediction"},{icon:Gauge,label:"Farmer Dashboard"}],
  useCases:["Smart Irrigation","Precision Spraying","Drone Survey","Crop Insurance","Farm Planning","Water Management","Soil Monitoring","Harvest Prediction"],
  useCaseImages:["/images/agriculture/smart-irrigation.png","/images/agriculture/precision-farming.png","/images/agriculture-ai-hero.png","/images/agriculture/crop-monitoring.png","/images/agriculture/satellite-analytics.png","/images/agriculture/smart-irrigation.png","/images/agriculture/crop-monitoring.png","/images/agriculture/precision-farming.png"],
  impact:[["30%","Higher Crop Yield"],["40%","Water Savings"],["50%","Faster Field Analysis"],["90%","Crop Health Visibility"]],
  faqs:["How does precision farming work?","Can satellite imagery detect crop diseases?","Do you provide drone surveys for farms?","Which crops are supported?","Can this integrate with my existing farm equipment and systems?"],
  ctaTitle:"Grow Smarter with AI & Precision Agriculture", ctaCopy:"Leverage AI, GIS, satellite imagery, and drone technology to maximize farm productivity and sustainability."
};
export default function AgriculturePage(){ return <IndustryAiPage config={config}/>; }
