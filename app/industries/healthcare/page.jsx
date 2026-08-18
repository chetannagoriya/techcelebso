import {
  Activity, BarChart3, BrainCircuit, Building2, ClipboardCheck, Cloud, Database,
  HeartPulse, MonitorCheck, ScanLine, ShieldCheck, Stethoscope, Users
} from "lucide-react";
import IndustryLandingPage from "../../../components/IndustryLandingPage";

const config = {
  eyebrow: "Healthcare & Medical AI",
  title: "AI-Powered Healthcare &",
  highlight: "Medical Imaging Solutions",
  description: "Transform patient care with AI, medical imaging and data-driven insights. Smarter diagnostics, faster decisions and better health outcomes.",
  hero: "/images/healthcare/healthcare-hero.png",
  challengeImage: "/images/industries/Healthcare & Life Sciences.jpg",
  dashboardImage: "/images/healthcare/healthcare-dashboard.png",
  ctaImage: "/images/healthcare/healthcare-cta.png",
  dashboardTitle: "Healthcare Intelligence Dashboard",
  stats: [["2,458", "Patients Today"], ["18,762", "Scans Processed"], ["24", "Critical Cases"], ["4.2 min", "Avg Diagnosis Time"]],
  badges: [[ScanLine, "Medical Imaging"], [BrainCircuit, "Radiology AI"], [Activity, "Diagnostics"], [Building2, "Hospital Solutions"], [BarChart3, "Clinical Intelligence"], [Users, "Remote Patient Care"], [ShieldCheck, "HIPAA Ready"], [MonitorCheck, "Live Analytics"]],
  logos: ["Apollo Hospitals", "Fortis", "MAX Healthcare", "Narayana Health", "Manipal Hospitals", "Siemens Healthineers", "GE HealthCare", "PHILIPS"],
  challenges: [[Users, "Rising Patient Volume", "Overcrowded hospitals and longer wait times"], [Activity, "Diagnostic Delays", "Time critical decisions get delayed"], [Database, "Large Imaging Data", "Millions of scans to store and analyze"], [Stethoscope, "Radiologist Shortage", "Limited experts for growing demand"], [ClipboardCheck, "Manual Reports", "Human error and subjective interpretation"], [Building2, "Legacy Hospital Systems", "Disconnected and outdated infrastructure"]],
  solutions: [
    [ScanLine, "Medical Imaging AI", "/images/healthcare/healthcare-dashboard.png", ["MRI Analysis", "CT Scan Analysis", "X-Ray Detection", "Ultrasound AI", "Mammography"]],
    [BrainCircuit, "Radiology AI", "/images/healthcare/healthcare-hero.png", ["Tumor Detection", "Fracture Detection", "Lung Disease AI", "Stroke Detection", "AI Report Generation"]],
    [Activity, "Diagnostics AI", "/images/healthcare/healthcare-cta.png", ["Pathology AI", "Blood Report Analysis", "Disease Prediction", "Early Detection", "Clinical Insights"]],
    [Building2, "Hospital AI", "/images/industries/Healthcare & Life Sciences.jpg", ["Patient Dashboard", "Bed Management", "Appointment AI", "Operation Scheduling", "Hospital Analytics"]]
  ],
  useCases: [["Hospitals", "/images/industries/Healthcare & Life Sciences.jpg"], ["Diagnostic Centers", "/images/healthcare/healthcare-dashboard.png"], ["Radiology Labs", "/images/healthcare/healthcare-hero.png"], ["Medical Colleges", "/images/industries/Education.jpg"], ["Telemedicine", "/images/consumer-technology/mobile-apps.png"], ["Cancer Centers", "/images/pharma-life-sciences/pharma-hero.png"], ["Government Hospitals", "/images/industry-showcases/government-smart-cities.png"], ["Research Institutes", "/images/ai_data_hero.jpg"], ["Emergency Care", "/images/healthcare/healthcare-cta.png"]],
  features: ["Medical Image Annotation", "Computer Vision", "Predictive Diagnostics", "Clinical Decision Support", "Auto Report Generation", "Multi Hospital Management", "HIPAA Ready", "Scalable & Secure Platform"],
  modalitiesTitle: "Supported Modalities",
  modalities: ["X-Ray", "MRI", "CT Scan", "Ultrasound", "ECG", "Pathology", "OCT", "Histopathology"],
  technologies: ["AWS", "Azure", "Google Cloud", "TensorFlow", "PyTorch", "MONAI", "OpenCV", "PostgreSQL", "Docker", "Python", "FHIR", "DICOM"],
  workflow: [[Database, "Data Collection"], [Cloud, "Preprocessing"], [ScanLine, "Medical Image Annotation"], [BrainCircuit, "AI Model Training"], [Activity, "Disease Detection"], [Stethoscope, "Radiologist Validation"], [BarChart3, "Clinical Report"]],
  why: ["Domain Expertise in Healthcare", "High Accuracy & Quality", "HIPAA & DICOM Compliant", "End-to-End AI Solutions", "Secure Cloud & On-Premise", "24/7 Global Support"],
  impact: [["99.2%", "AI Detection Accuracy"], ["65%", "Faster Diagnosis"], ["45%", "Reduced Reporting Time"], ["30%", "Lower Cost"]],
  faqs: ["Which medical imaging modalities do you support?", "Can AI integrate with PACS and RIS systems?", "Is the platform HIPAA compliant?", "Can hospitals deploy this on-premise?", "Do you provide custom AI model training?"],
  ctaTitle: "Transform Healthcare with AI-Powered Medical Intelligence",
  ctaCopy: "Build smarter hospitals, faster diagnostics and better patient outcomes with advanced AI solutions."
};

export const metadata = {
  title: "AI-Powered Healthcare & Medical Imaging Solutions | Antellay",
  description: "Healthcare AI, medical imaging, radiology AI, diagnostics, and hospital intelligence solutions.",
};

export default function HealthcarePage() {
  return <IndustryLandingPage config={config} />;
}
