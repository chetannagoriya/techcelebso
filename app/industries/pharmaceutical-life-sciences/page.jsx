import { Activity, BarChart3, BrainCircuit, ClipboardCheck, Cloud, Database, Dna, FileText, FlaskConical, ScanLine, ShieldCheck, Users } from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Pharmaceutical & Life Sciences Solutions",
  title: "AI-Powered Pharmaceutical &",
  highlight: "Life Sciences Solutions",
  description: "Accelerate drug discovery, enhance research accuracy and unlock insights with high-quality data, AI and advanced annotation for life-saving innovation.",
  hero: "/images/pharma-life-sciences/pharma-hero.png",
  challengeImage: "/images/healthcare/healthcare-hero.png",
  dashboardImage: "/images/healthcare/healthcare-dashboard.png",
  ctaImage: "/images/pharma-life-sciences/pharma-hero.png",
  dashboardTitle: "Research Data Dashboard",
  stats: [["24,568", "Datasets"], ["15,678", "Annotations"], ["96.8%", "Model Accuracy"], ["128", "Active Projects"]],
  badges: [[FlaskConical, "Drug Research"], [Dna, "Medical Datasets"], [ClipboardCheck, "Annotation"], [BrainCircuit, "AI Models"], [ShieldCheck, "Regulatory"], [Cloud, "Scalable"], [ScanLine, "Imaging"], [FileText, "Clinical Notes"]],
  logos: ["Pfizer", "Novartis", "Merck", "Roche", "AstraZeneca", "Sanofi"],
  challenges: [[Activity, "High Research Costs", "Rising cost and time in discovery"], [Database, "Complex Data", "Unstructured and siloed life sciences data"], [ClipboardCheck, "Lack of Quality Datasets", "Limited labeled datasets"], [FileText, "Slow Annotation", "Manual labeling is error-prone"], [ShieldCheck, "Regulatory Compliance", "Strict data privacy standards"], [BrainCircuit, "Limited AI Adoption", "Difficulty deploying AI models"]],
  solutions: [[Dna, "Drug Research Data", "/images/pharma-life-sciences/pharma-hero.png", ["Genomics Data", "Chemical Compounds", "Clinical Trial Data", "Literature & Patent Data", "Real-world Evidence"]], [ScanLine, "Medical AI Datasets", "/images/healthcare/healthcare-dashboard.png", ["Medical Imaging", "Pathology Data", "EHR Notes", "Wearables & IoT", "Multi-modal Datasets"]], [ClipboardCheck, "Data Annotation", "/images/data-annotation-workspace.png", ["Image Annotation", "Text Annotation", "Sequence Annotation", "3D Point Cloud", "QA & Validation"]], [BrainCircuit, "Research AI Models", "/images/pharma-life-sciences/research-ai-v2.png", ["Model Training", "Molecule Screening", "Predictive Analytics", "Knowledge Mining", "Insight Delivery"]]],
  useCases: [["Pharma Companies", "/images/pharma-life-sciences/pharma-hero.png"], ["Biotech Firms", "/images/ai_data_hero.jpg"], ["CROs", "/images/consulting_hero.jpg"], ["Medical Devices", "/images/healthcare/healthcare-hero.png"], ["Research Institutes", "/images/industries/Education.jpg"], ["Academic Orgs", "/images/industries/Professional Services.jpg"], ["Clinical Labs", "/images/healthcare/healthcare-dashboard.png"], ["Genomics", "/images/pharma-life-sciences/research-ai-v2.png"], ["Drug Discovery", "/images/ai_data_cta.jpg"]],
  features: ["High-quality Data Acquisition", "Multi-modal Data Support", "Expert Annotation Team", "AI-assisted Annotation", "Automated QC", "Scalable & Secure Platform", "Research Dashboards", "Regulatory Ready"],
  modalitiesTitle: "Data Annotation Examples",
  modalities: ["Cell Detection", "Tumor Segmentation", "Molecule Annotation", "Clinical Text", "Pathology", "Genomics", "Protein", "Drug Compounds"],
  technologies: ["AWS", "Azure", "Google Cloud", "Python", "TensorFlow", "PyTorch", "PostgreSQL", "MongoDB", "Databricks", "Docker", "Kafka", "Snowflake"],
  workflow: [[Database, "Data Collection"], [Cloud, "Data Processing"], [ClipboardCheck, "Annotation"], [ShieldCheck, "Quality Check"], [BrainCircuit, "AI Training"], [BarChart3, "Insights"], [Activity, "Delivery"]],
  why: ["Life Sciences Expertise", "High Accuracy & Quality", "Scalable Infrastructure", "Global Delivery", "Regulatory & HIPAA Compliant", "24/7 Support"],
  impact: [["60%", "Faster Discovery"], ["40%", "Reduced Cost"], ["95%", "Annotation Accuracy"], ["30%", "AI Performance"]],
  faqs: ["What types of life sciences data do you provide?", "How do you ensure annotation quality?", "Is the data HIPAA and GDPR compliant?", "Can you support custom AI training?", "Do you provide domain experts?"],
  ctaTitle: "Empowering Life-Saving Innovations with AI, Data & Intelligence",
  ctaCopy: "High-quality data, accurate annotation and smarter insights for healthcare and life sciences research."
};

export const metadata = { title: "AI Pharmaceutical & Life Sciences Solutions | Antellay", description: "Life sciences AI, pharma datasets, annotation and research analytics." };
export default function PharmaceuticalLifeSciencesPage() { return <IndustryLandingPage config={config} />; }
