import { Activity, BarChart3, BrainCircuit, Building2, ClipboardCheck, Cloud, CreditCard, Database, Landmark, LockKeyhole, ShieldCheck, Users } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Banking & Finance AI Solutions",
  title: "AI-Powered Banking &",
  highlight: "FinTech Solutions for Smarter Decisions",
  description: "Detect fraud, assess risk, automate compliance and unlock actionable insights with AI-driven analytics for banks, financial institutions and FinTech companies.",
  hero: "/images/banking-finance/banking-hero.png",
  challengeImage: "/images/industries/Financial Services.jpg",
  dashboardImage: "/images/consumer-technology/capabilities.png",
  ctaImage: "/images/gis_cta_satellite.jpg",
  dashboardTitle: "Financial Intelligence Dashboard",
  stats: [["12.45M", "Transactions"], ["2,756", "Fraud Cases"], ["32.6", "Risk Score"], ["₹18.7 Cr", "Blocked Amount"]],
  badges: [[ShieldCheck, "Fraud Detection"], [BarChart3, "Risk Analytics"], [CreditCard, "Credit Scoring"], [BrainCircuit, "AML Monitoring"], [LockKeyhole, "Compliance AI"], [Users, "Customer 360"], [Activity, "Predictive Analytics"], [ClipboardCheck, "Real-time Alerts"]],
  logos: ["HDFC BANK", "ICICI Bank", "SBI", "AXIS BANK", "Kotak", "Paytm", "PhonePe", "Razorpay"],
  challenges: [[ShieldCheck, "Rising Fraud & Financial Crimes", "Increasing attacks and suspicious transactions"], [BarChart3, "High Risk of Default", "Risk assessment leads to higher NPAs"], [ClipboardCheck, "Compliance Complexities", "Heavy regulations and documentation"], [Database, "Data Silos", "Disconnected systems limit visibility"], [Activity, "Real-time Decisions", "Instant fraud detection and alerts"], [Users, "Customer Trust", "Balance security with smooth experience"]],
  solutions: [[ShieldCheck, "Fraud Detection AI", "/images/cybersecurity_hero.jpg", ["Transaction Monitoring", "Anomaly Detection", "Behavioral Analytics", "Device Fingerprinting", "Real-time Alerts"]], [BarChart3, "Risk Analytics", "/images/blockchain_hero.jpg", ["Credit Risk Assessment", "Market Risk Analytics", "Operational Risk", "Stress Testing", "Portfolio Insights"]], [ClipboardCheck, "Compliance & AML AI", "/images/data-annotation-workspace.png", ["AML Monitoring", "KYC Verification", "Sanction Screening", "PEP Monitoring", "Regulatory Reporting"]], [Users, "Customer Intelligence", "/images/consumer-technology/mobile-apps.png", ["Customer 360", "Spending Behavior", "Product Recommendations", "Churn Prediction", "Personalized Offers"]]],
  useCases: [["Retail Banking", "/images/industries/Financial Services.jpg"], ["Corporate Banking", "/images/consulting_hero.jpg"], ["Credit Cards", "/images/ai_data_hero.jpg"], ["Lending & Loans", "/images/cloud_infra_hero.jpg"], ["Insurance", "/images/insurance/insurance-hero.png"], ["Wealth Management", "/images/industries/Professional Services.jpg"], ["Digital Payments", "/images/consumer-technology/saas-platforms.png"], ["Neobanks", "/images/consumer-technology/consumer-tech-hero.png"], ["FinTech Platforms", "/images/consumer-technology/ai-products.png"]],
  features: ["Real-time Fraud Detection", "Machine Learning Models", "Behavioral Biometrics", "Graph Analytics", "Predictive Risk Scoring", "Automated Compliance", "Explainable AI", "Scalable & Secure Platform"],
  modalitiesTitle: "Data Sources",
  modalities: ["Core Banking", "Payment Gateways", "Card Networks", "KYC Databases", "Credit Bureaus", "Market Data", "Risk Data", "Behavioral Data"],
  technologies: ["AWS", "Azure", "Google Cloud", "Databricks", "Snowflake", "Redshift", "Python", "TensorFlow", "PyTorch", "Kafka", "Spark", "Docker"],
  workflow: [[Database, "Data Collection"], [Cloud, "Data Processing"], [BrainCircuit, "Feature Engineering"], [BarChart3, "Model Training"], [Activity, "Risk Scoring"], [ShieldCheck, "Fraud Detection"], [ClipboardCheck, "Alerts"]],
  why: ["Domain Expertise in BFSI", "High Accuracy AI Models", "Real-time Processing", "End-to-End AI Solutions", "Regulatory Compliant", "24/7 Monitoring & Support"],
  impact: [["60%", "Fraud Loss Reduction"], ["40%", "Lower Cost"], ["30%", "Better Risk Assessment"], ["99.5%", "Detection Accuracy"]],
  faqs: ["How does AI help in fraud detection?", "Can your solution integrate with our core banking system?", "Do you offer real-time alerts?", "Is the platform compliant with RBI guidelines?", "Can AI reduce false positives?"],
  ctaTitle: "Build a Smarter, Safer & More Intelligent Financial Future",
  ctaCopy: "Leverage AI to prevent fraud, manage risk and deliver exceptional customer experiences."
};

export const metadata = { title: "AI Banking & Finance Solutions | Antellay", description: "AI-powered banking, FinTech, fraud detection, risk analytics and compliance solutions." };

export default function BankingFinancePage() {
  return <IndustryLandingPage config={config} />;
}
