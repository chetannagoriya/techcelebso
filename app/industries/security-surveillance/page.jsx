import { Activity, BarChart3, Bell, BrainCircuit, Camera, ClipboardCheck, Cloud, Database, Eye, LockKeyhole, ScanFace, ShieldCheck, Users } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Security & Surveillance Solutions",
  title: "AI-Powered Security &",
  highlight: "Surveillance for Safer Tomorrow",
  description: "Advanced CCTV analytics, face and object detection, real-time monitoring and incident intelligence for modern security operations.",
  hero: "/images/security-surveillance/security-hero.png",
  challengeImage: "/images/industries/Technology.jpg",
  dashboardImage: "/images/security-surveillance/security-hero.png",
  ctaImage: "/images/cybersecurity_cta.jpg",
  dashboardTitle: "Security Operations Dashboard",
  stats: [["2,456", "Total Cameras"], ["86", "Active Alerts"], ["17", "Incidents"], ["92.6%", "Resolved"]],
  badges: [[Camera, "Real-time Monitoring"], [BrainCircuit, "AI Video Analytics"], [Bell, "Smart Alerts"], [Cloud, "Cloud Recording"], [Activity, "API Integration"], [ShieldCheck, "Secure"], [ScanFace, "Face Detection"], [Eye, "Object Detection"]],
  logos: ["Delhi Police", "Smart City", "Adani", "GMR", "AAI", "L&T", "Reliance", "CP PLUS"],
  challenges: [[Camera, "Manual Monitoring", "Human review cannot scale"], [Bell, "Delayed Alerts", "Incidents need fast response"], [ScanFace, "Identity Matching", "Face and watchlist complexity"], [Eye, "Object Detection", "Left objects and loitering"], [Cloud, "Multi-site Recording", "Distributed camera systems"], [ShieldCheck, "Security Compliance", "Data privacy and access control"]],
  solutions: [[Camera, "CCTV Analytics", "/images/security-surveillance/security-hero.png", ["Intrusion Detection", "Loitering Detection", "Crowd Monitoring", "Line Crossing", "Abandoned Object"]], [ScanFace, "Face & Object Detection", "/images/consumer-technology/capabilities.png", ["Face Recognition", "Watchlist Matching", "Object Detection", "Vehicle Tracking", "People Counting"]], [Bell, "Incident Intelligence", "/images/cybersecurity_hero.jpg", ["Real-time Alerts", "Incident Classification", "Behavior Analysis", "Risk Scoring", "Automated Reporting"]], [Eye, "Smart Monitoring", "/images/data-annotation-workspace.png", ["24/7 Monitoring", "Remote Access", "Multi-site Management", "Notifications", "Video Wall Integration"]]],
  useCases: [["Smart Cities", "/images/industry-showcases/government-smart-cities.png"], ["Airports & Metro", "/images/industry-showcases/aviation-aerospace.png"], ["Commercial Buildings", "/images/industries/Real Estate.jpg"], ["Industrial Security", "/images/manufacturing/manufacturing-hero.png"], ["Retail Stores", "/images/retail-ecommerce/retail-hero.png"], ["Banks & ATMs", "/images/banking-finance/banking-hero.png"], ["Schools", "/images/industries/Education.jpg"], ["Traffic", "/images/industry-showcases/telecom.png"], ["Warehouses", "/images/logistics/warehouse-ai.png"]],
  features: ["Real-time Monitoring", "Video Analytics", "Face Recognition", "Object Detection", "Smart Alerts", "Incident Reports", "Cloud Recording", "Secure Access"],
  modalitiesTitle: "Live Feed Preview",
  modalities: ["Intrusion", "Loitering", "Face Match", "Object Left", "Crowd", "Vehicle", "Queue", "No Threat"],
  technologies: ["OpenCV", "YOLO", "TensorFlow", "PyTorch", "DeepStream", "AWS", "Azure", "Google Cloud", "SQL", "Milvus", "Docker", "Kubernetes"],
  workflow: [[Camera, "Video Capture"], [Cloud, "Data Processing"], [BrainCircuit, "AI Analysis"], [ShieldCheck, "Threat Detection"], [Bell, "Alert"], [ClipboardCheck, "Report"], [Activity, "Response"]],
  why: ["Security AI Expertise", "High Accuracy Detection", "Real-time Monitoring", "Multi-site Scale", "Secure Integrations", "24/7 Support"],
  impact: [["2,456+", "Cameras"], ["98.6%", "Accuracy"], ["86+", "Active Alerts"], ["99.9%", "Uptime"]],
  faqs: ["What types of cameras are supported?", "Can it work with existing CCTV infrastructure?", "How accurate is face recognition?", "Do you provide real-time alerts?", "Can I access the system remotely?"],
  ctaTitle: "Transform Your Security Operations with AI Intelligence",
  ctaCopy: "Leverage AI-powered analytics, real-time monitoring and intelligent alerts to build a safer environment."
};

export const metadata = { title: "AI Security & Surveillance Solutions | Antellay", description: "Security AI, CCTV analytics, face detection, smart alerts and surveillance intelligence." };
export default function SecuritySurveillancePage() { return <IndustryLandingPage config={config} />; }
