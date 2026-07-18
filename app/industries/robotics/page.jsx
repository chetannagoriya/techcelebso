import { Activity, BarChart3, Bot, BrainCircuit, Camera, ClipboardCheck, Cloud, Cpu, Database, Eye, Gauge, Radar, ScanLine } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Robotics Solutions",
  title: "Intelligent Robotics",
  highlight: "Powered by AI, Vision & Sensor Data",
  description: "Build smarter robots with computer vision, sensor fusion, real-time analytics and AI-powered robot training.",
  hero: "/images/robotics/robotics-hero.png",
  challengeImage: "/images/manufacturing/manufacturing-hero.png",
  dashboardImage: "/images/automotive/automotive-dashboard.png",
  ctaImage: "/images/robotics/robotics-hero.png",
  dashboardTitle: "Robot Operations Dashboard",
  stats: [["128", "Active Robots"], ["3,482", "Tasks Completed"], ["98.6%", "Success Rate"], ["6.2 hrs", "Avg Runtime"]],
  badges: [[Camera, "Computer Vision"], [Radar, "Sensor Fusion"], [Bot, "Robot Perception"], [BrainCircuit, "AI Training"], [BarChart3, "Analytics"], [Cpu, "Edge Intelligence"], [Gauge, "Monitoring"], [ScanLine, "3D Vision"]],
  logos: ["Boston Dynamics", "ABB", "FANUC", "KUKA", "NVIDIA", "Intel", "Covariance", "Amazon Robotics"],
  challenges: [[Camera, "Vision Complexity", "Robots need robust perception"], [Radar, "Sensor Fusion", "Multiple streams require alignment"], [BrainCircuit, "Training Data", "High quality robot datasets needed"], [Cpu, "Edge Deployment", "Low latency model execution"], [Activity, "Safety & Reliability", "Consistent performance is critical"], [BarChart3, "Fleet Analytics", "Robots need monitoring and insights"]],
  solutions: [[Camera, "Computer Vision", "/images/robotics/robotics-hero.png", ["Object Detection", "Image Classification", "3D Vision", "Pose Estimation", "Visual Inspection"]], [Radar, "Sensor Data", "/images/automotive/automotive-dashboard.png", ["Multi-sensor Fusion", "LiDAR Processing", "IMU Data", "Sensor Analytics", "Anomaly Detection"]], [BrainCircuit, "Robot Training", "/images/manufacturing/manufacturing-hero.png", ["Reinforcement Learning", "Imitation Learning", "Synthetic Data", "Simulation Training", "Continuous Learning"]], [BarChart3, "Robotics Analytics", "/images/consumer-technology/capabilities.png", ["Performance Monitoring", "Predictive Maintenance", "Task Analytics", "Fleet Management", "Operational Insights"]]],
  useCases: [["Industrial Automation", "/images/manufacturing/manufacturing-hero.png"], ["Warehouse Robotics", "/images/logistics/warehouse-ai.png"], ["Quality Inspection", "/images/agriculture/crop-monitoring.png"], ["Autonomous Vehicles", "/images/automotive/automotive-hero.png"], ["Medical Robotics", "/images/healthcare/healthcare-hero.png"], ["Agriculture Robotics", "/images/agriculture/precision-farming.png"], ["Security", "/images/security-surveillance/security-hero.png"], ["Research", "/images/industries/Education.jpg"], ["Drones", "/images/industry-showcases/aviation-aerospace.png"]],
  features: ["Perception Models", "Sensor Fusion", "Simulation Data", "Robot Training", "Edge AI", "Fleet Monitoring", "Task Analytics", "Safety Intelligence"],
  modalitiesTitle: "Robot Data",
  modalities: ["Images", "Video", "LiDAR", "IMU", "Depth", "Telemetry", "Logs", "3D Maps"],
  technologies: ["OpenCV", "PyTorch", "TensorFlow", "ROS 2", "NVIDIA", "LiDAR", "AWS", "Azure", "Docker", "Kubernetes", "Unity", "PostgreSQL"],
  workflow: [[Database, "Data Collection"], [Cloud, "Data Processing"], [BrainCircuit, "Model Training"], [Eye, "Simulation"], [Bot, "Deployment"], [Activity, "Monitoring"], [BarChart3, "Feedback"]],
  why: ["Robotics AI Expertise", "Computer Vision Depth", "Simulation Workflows", "Edge Deployment", "Fleet Analytics", "24/7 Support"],
  impact: [["200+", "Robots Deployed"], ["50M+", "Images Processed"], ["98.6%", "Success Rate"], ["99.9%", "Reliability"]],
  faqs: ["What types of robots do you support?", "Can you build custom AI models?", "Do you provide simulation before deployment?", "How do you ensure robot safety?", "Can you integrate with existing systems?"],
  ctaTitle: "Build Smarter Robots with AI & Vision",
  ctaCopy: "From perception to action, we build intelligent robots that see, learn and adapt to the real world."
};

export const metadata = { title: "AI Robotics Solutions | Antellay", description: "Robotics AI, computer vision, sensor fusion, robot training and analytics." };
export default function RoboticsPage() { return <IndustryLandingPage config={config} />; }
