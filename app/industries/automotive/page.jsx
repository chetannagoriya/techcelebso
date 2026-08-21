import {
  BarChart3, BrainCircuit, Camera, Car, ClipboardCheck, Cloud, Database, Gauge,
  MonitorCheck, Radar, Route, ScanLine, ShieldCheck, Truck
} from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Automotive AI Solutions",
  title: "AI-Powered Automotive,",
  highlight: "Autonomous Vehicles, ADAS & Fleet Solutions",
  description: "Drive the future of mobility with AI-enabled perception, advanced driver assistance systems, autonomous driving data, and intelligent fleet management.",
  hero: "/images/automotive/automotive-hero.png",
  challengeImage: "/images/automotive/industry-challenges-manufacturing.png",
  dashboardImage: "/images/automotive/automotive-dashboard.png",
  ctaImage: "/images/automotive/automotive-cta.png",
  dashboardTitle: "Automotive AI Dashboard",
  stats: [["12,458", "Vehicles Connected"], ["32,786", "Trips Completed"], ["1.24M", "Total Distance"], ["156", "Alerts Today"]],
  badges: [[Car, "Autonomous Driving"], [ShieldCheck, "ADAS Solutions"], [Truck, "Fleet Management"], [Gauge, "Vehicle Analytics"], [Database, "Data Annotation"], [ScanLine, "Sensor Fusion"], [Radar, "V2X Solutions"], [BarChart3, "Predictive Maintenance"]],
  logos: ["TATA MOTORS", "Mahindra", "MARUTI SUZUKI", "HYUNDAI", "BOSCH", "Continental", "NVIDIA", "APTIV"],
  challenges: [[Route, "Complex Road Scenarios", "Unpredictable driving environments"], [Database, "High Volume Sensor Data", "Huge data from cameras, LiDAR and radar"], [ShieldCheck, "Safety & Reliability", "Zero tolerance for automated mobility errors"], [ClipboardCheck, "Data Annotation at Scale", "Accurate labeling for AI training"], [Truck, "Fleet Operational Inefficiencies", "High downtime and maintenance costs"], [Gauge, "Real-time Decision Making", "Need low latency and high accuracy"]],
  solutions: [
    [BrainCircuit, "Autonomous Driving AI", "/images/automotive/automotive-hero.png", ["Perception & Object Detection", "Sensor Fusion", "Path Planning", "Localization & Mapping", "Simulation Data Generation"]],
    [ShieldCheck, "ADAS Solutions", "/images/automotive/adas-solutions-v2.png", ["Lane Departure Warning", "Adaptive Cruise Control", "Emergency Braking", "Blind Spot Detection", "Traffic Sign Recognition"]],
    [Truck, "Fleet Management AI", "/images/logistics/fleet-intelligence.png", ["Real-time Vehicle Tracking", "Route Optimization", "Driver Behavior Monitoring", "Geofencing & Alerts", "Fuel Analytics"]],
    [Database, "Automotive Data Services", "/images/automotive/automotive-data-services-v2.png", ["Image Annotation", "LiDAR Point Cloud Annotation", "Video Annotation", "Sensor Data Labeling", "Data Quality Assurance"]]
  ],
  useCases: [["Passenger Vehicles", "/images/automotive/automotive-hero.png"], ["Commercial Vehicles", "/images/logistics/logistics-hero.png"], ["Autonomous Vehicles", "/images/automotive/adas-solutions-v2.png"], ["Robotaxis", "/images/automotive/use-case-robotaxi-v2.png"], ["Logistics & Delivery", "/images/logistics/logistics-cta.png"], ["Smart Fleets", "/images/logistics/fleet-intelligence.png"], ["Shared Mobility", "/images/automotive/use-case-shared-mobility-v2.png"], ["Public Transportation", "/images/industry-showcases/government-smart-cities.png"], ["Agriculture Vehicles", "/images/agriculture/precision-farming.png"]],
  features: ["Computer Vision & Perception", "Sensor Fusion", "Object Detection & Tracking", "Predictive Analytics", "Real-time Alerts", "Digital Twin & Simulation", "Edge AI Deployment", "Scalable & Secure Platform"],
  modalitiesTitle: "Supported Sensors & Modalities",
  modalities: ["Cameras", "LiDAR", "RADAR", "Ultrasonic", "IMU", "GPS/GNSS", "V2X", "CAN Bus"],
  technologies: ["TensorFlow", "PyTorch", "OpenCV", "NVIDIA", "ROS", "Apollo", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "PostgreSQL"],
  workflow: [[Database, "Data Collection"], [Cloud, "Data Processing"], [ClipboardCheck, "Data Annotation"], [BrainCircuit, "Model Training"], [ShieldCheck, "Validation & Testing"], [MonitorCheck, "Deployment"], [BarChart3, "Monitoring"]],
  why: ["Automotive AI Expertise", "High Accuracy & Scalability", "Real-time & Edge AI Solutions", "ISO Aligned Processes", "End-to-End Data & AI Platform", "Global Delivery & 24/7 Support"],
  impact: [["40%", "Improved Safety"], ["30%", "Reduced Accidents"], ["25%", "Lower Costs"], ["99%", "AI Accuracy"]],
  faqs: ["What types of vehicles and sensors do you support?", "Can you handle real-time data processing?", "Do you provide data annotation services for AV/ADAS?", "Is the platform compatible with our existing systems?", "Can you deploy AI models on edge devices?"],
  ctaTitle: "Build Smarter, Safer & More Efficient Mobility with AI",
  ctaCopy: "From autonomous vehicles to intelligent fleets, we help mobility companies drive innovation with AI, data and advanced analytics."
};

export const metadata = {
  title: "AI-Powered Automotive Solutions | Antellay",
  description: "Automotive AI, autonomous vehicles, ADAS, fleet management, and vehicle analytics solutions.",
};

export default function AutomotivePage() {
  return <IndustryLandingPage config={config} />;
}
