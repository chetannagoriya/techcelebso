import { Activity, BarChart3, BrainCircuit, Car, ClipboardCheck, Cloud, Database, FileText, LockKeyhole, ScanLine, ShieldCheck, Users } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Insurance AI Solutions",
  title: "AI-Powered Insurance",
  highlight: "Claims Automation, Damage Assessment & Document Intelligence",
  description: "Transform insurance operations with AI-driven claims automation, accurate damage assessment, document processing and intelligent decision-making.",
  hero: "/images/insurance/insurance-hero.png",
  challengeImage: "/images/automotive/automotive-hero.png",
  dashboardImage: "/images/healthcare/healthcare-dashboard.png",
  ctaImage: "/images/ai_data_cta.jpg",
  dashboardTitle: "Insurance Intelligence Dashboard",
  stats: [["12,458", "Claims Received"], ["9,876", "Claims Processed"], ["8,321", "Claims Closed"], ["2.4 Days", "Settlement Time"]],
  badges: [[ClipboardCheck, "Claims Automation"], [Car, "Damage Assessment"], [FileText, "Document AI"], [ShieldCheck, "Fraud Detection"], [BarChart3, "Risk Analytics"], [Activity, "Policy Analytics"], [BrainCircuit, "Workflow AI"], [Users, "Customer Experience"]],
  logos: ["LIC", "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz", "TATA AIG", "Digit", "SBI General", "ACKO"],
  challenges: [[ClipboardCheck, "High Claim Volumes", "Manual processes lead to delays"], [ShieldCheck, "Fraud & False Claims", "Profitability gets impacted"], [FileText, "Complex Document Work", "Large documents to review"], [Car, "Inaccurate Damage Estimates", "Subjective assessment causes leakage"], [Activity, "Long Settlement Time", "Delays reduce satisfaction"], [LockKeyhole, "Regulatory Compliance", "Strict audit requirements"]],
  solutions: [[ClipboardCheck, "Claims Automation", "/images/consulting_cta.jpg", ["FNOL Automation", "Workflow Automation", "Auto Assignment", "Real-time Updates", "End-to-End Tracking"]], [Car, "Damage Assessment AI", "/images/automotive/automotive-dashboard.png", ["AI Image Recognition", "Damage Detection", "Part Location", "Severity Analysis", "Repair Cost Estimation"]], [FileText, "Document AI", "/images/data-annotation-workspace.png", ["Document Extraction", "Data Capture", "Handwriting Recognition", "Classification & Parsing", "Smart Validation"]], [ShieldCheck, "Fraud Detection & Risk Analytics", "/images/cybersecurity_cta.jpg", ["Behavioral Analytics", "Anomaly Detection", "Network Analysis", "Risk Scoring", "Real-time Alerts"]]],
  useCases: [["Motor Insurance", "/images/automotive/automotive-hero.png"], ["Health Insurance", "/images/industries/Healthcare & Life Sciences.jpg"], ["Property Insurance", "/images/industries/Real Estate.jpg"], ["Travel Insurance", "/images/industry-showcases/aviation-aerospace.png"], ["Marine Insurance", "/images/industry-showcases/maritime-ports.png"], ["Life Insurance", "/images/industries/Professional Services.jpg"], ["Commercial Insurance", "/images/industries/Manufacturing.jpg"], ["Reinsurance", "/images/consulting_hero.jpg"], ["Micro Insurance", "/images/consumer-technology/mobile-apps.png"]],
  features: ["Computer Vision", "Deep Learning Models", "NLP & Document AI", "Predictive Analytics", "Fraud Detection", "Risk Scoring", "Auto Decisioning", "Explainable AI"],
  modalitiesTitle: "Document Analysis Preview",
  modalities: ["Policy Docs", "Claim Forms", "Invoices", "Photos", "Medical Docs", "KYC", "Receipts", "Reports"],
  technologies: ["AWS", "Azure", "Google Cloud", "OpenCV", "TensorFlow", "PyTorch", "Kafka", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Snowflake"],
  workflow: [[Database, "Data Collection"], [FileText, "Document AI"], [ScanLine, "Image Analysis"], [Car, "Damage Estimation"], [ShieldCheck, "Fraud Detection"], [BarChart3, "Risk Scoring"], [ClipboardCheck, "Settlement"]],
  why: ["Domain Expertise in Insurance", "High Accuracy AI Models", "Faster Claim Settlement", "End-to-End AI Platform", "Secure & Compliant", "24/7 Support & Monitoring"],
  impact: [["40%", "Faster Processing"], ["30%", "Reduced Leakage"], ["25%", "Lower Cost"], ["99%", "AI Accuracy"]],
  faqs: ["Can AI handle complex insurance documents?", "How accurate is damage assessment AI?", "Can the solution integrate with core systems?", "Is the platform secure and compliant?", "Can you detect fraud in real-time?"],
  ctaTitle: "Intelligent Insurance. Faster Claims. Happier Customers.",
  ctaCopy: "Leverage AI to automate claims, assess damage accurately and deliver exceptional experiences."
};

export const metadata = { title: "AI Insurance Solutions | Antellay", description: "Insurance AI for claims automation, damage assessment, document intelligence and fraud analytics." };

export default function InsurancePage() {
  return <IndustryLandingPage config={config} />;
}
