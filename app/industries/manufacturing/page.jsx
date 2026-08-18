import { Activity, BarChart3, BrainCircuit, ClipboardCheck, Cloud, Cpu, Database, Eye, Factory, Gauge, ScanLine, ShieldCheck, Wrench } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Manufacturing AI Solutions",
  title: "AI-Powered Manufacturing",
  highlight: "Quality Inspection, Predictive Maintenance & Industrial Automation",
  description: "Boost production efficiency, ensure superior quality and reduce downtime with AI-driven insights, automation and intelligent decision-making.",
  hero: "/images/manufacturing/manufacturing-hero.png",
  challengeImage: "/images/industries/Manufacturing.jpg",
  dashboardImage: "/images/automotive/automotive-dashboard.png",
  ctaImage: "/images/manufacturing/manufacturing-hero.png",
  dashboardTitle: "Manufacturing Intelligence Dashboard",
  stats: [["128,764", "Production Units"], ["82.6%", "OEE"], ["1.24%", "Defect Rate"], ["32.6", "Downtime"]],
  badges: [[ScanLine, "Quality Inspection"], [Wrench, "Predictive Maintenance"], [Factory, "Industrial Automation"], [Gauge, "Process Optimization"], [Eye, "Anomaly Detection"], [BarChart3, "Production Analytics"], [Cpu, "Digital Twin"], [ShieldCheck, "Safety Compliance"]],
  logos: ["TATA STEEL", "Mahindra", "BOSCH", "Godrej", "SIEMENS", "ABB", "Schneider Electric", "WIPRO"],
  challenges: [[Wrench, "Unplanned Downtime", "Unexpected machine failures"], [ScanLine, "Quality Variations", "Defects impact satisfaction"], [Gauge, "High Maintenance Costs", "Reactive maintenance raises cost"], [Factory, "Low Efficiency", "Process bottlenecks reduce throughput"], [BarChart3, "Lack of Real-time Insights", "Limited shop floor visibility"], [ShieldCheck, "Safety Risks", "Unsafe conditions cause accidents"]],
  solutions: [[ScanLine, "Quality Inspection AI", "/images/agriculture/crop-monitoring.png", ["Defect Detection", "Surface Inspection", "Dimension Measurement", "Assembly Verification", "AI Vision Models"]], [Wrench, "Predictive Maintenance AI", "/images/energy-utilities/asset-monitoring.png", ["Failure Prediction", "RUL Estimation", "Anomaly Detection", "Vibration Analysis", "Maintenance Alerts"]], [Factory, "Industrial Automation", "/images/industries/Manufacturing.jpg", ["Process Automation", "Robotic Integration", "PLC/SCADA Integration", "Workflow Automation", "Edge AI Deployment"]], [BarChart3, "Production Analytics", "/images/consumer-technology/capabilities.png", ["OEE Monitoring", "Cycle Time Analysis", "Yield Optimization", "Energy Analytics", "Bottleneck Detection"]]],
  useCases: [["Automotive", "/images/automotive/automotive-hero.png"], ["Electronics", "/images/consumer-technology/ai-products.png"], ["Food & Beverage", "/images/industries/retail_consumer_goods.jpg"], ["Pharmaceuticals", "/images/healthcare/healthcare-hero.png"], ["Metal & Steel", "/images/energy-utilities/power-grid-mapping.png"], ["Textile", "/images/industries/Media & Communication.jpg"], ["Plastics", "/images/industries/Technology.jpg"], ["Heavy Machinery", "/images/industries/Manufacturing.jpg"], ["Aerospace", "/images/industry-showcases/aviation-aerospace.png"]],
  features: ["Computer Vision", "Anomaly Detection", "Predictive Analytics", "Time Series Forecasting", "Digital Twin Modeling", "Edge AI Deployment", "Real-time Alerts", "Scalable & Secure Platform"],
  modalitiesTitle: "Smart Sensor & IIoT Integration",
  modalities: ["Vibration Sensors", "Temperature", "Pressure", "Vision Cameras", "Current Sensors", "Acoustic Sensors", "PLC/SCADA", "Edge Devices"],
  technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "AWS", "Azure", "Google Cloud", "NVIDIA", "Kafka", "InfluxDB", "PostgreSQL", "Grafana"],
  workflow: [[Database, "Data Collection"], [Cloud, "Data Processing"], [BrainCircuit, "Feature Engineering"], [Gauge, "Model Training"], [Activity, "Prediction"], [ClipboardCheck, "Alerts"], [BarChart3, "Dashboard"]],
  why: ["Domain Expertise in Manufacturing", "High Accuracy AI Models", "Real-time & Edge AI Solutions", "End-to-End Implementation", "Secure & Reliable", "24/7 Support & Maintenance"],
  impact: [["30-50%", "Less Downtime"], ["20-30%", "Productivity Gain"], ["25-40%", "Defect Reduction"], ["99%+", "Inspection Accuracy"]],
  faqs: ["How does AI help in predictive maintenance?", "Can this solution integrate with existing systems?", "What types of defects can AI detect?", "Is edge deployment supported?", "Do you provide custom AI models?"],
  ctaTitle: "Smart Manufacturing. Intelligent Operations. Better Outcomes.",
  ctaCopy: "Leverage AI to optimize production, ensure quality and drive operational excellence."
};

export const metadata = { title: "AI Manufacturing Solutions | Antellay", description: "AI manufacturing, quality inspection, predictive maintenance, industrial automation and analytics." };

export default function ManufacturingPage() {
  return <IndustryLandingPage config={config} />;
}
