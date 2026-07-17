import {
  BarChart3, Bot, Building2, Camera, ClipboardCheck, Cloud, Compass, Database,
  Eye, Gauge, Globe2, Hotel, Landmark, Layers, Map, MapPinned, Plane, Radar,
  RadioTower, Route, Satellite, ScanLine, ShieldCheck, Ship, Sparkles, TowerControl,
  TrafficCone, TrendingUp, Users, Waves, Wifi, Wrench
} from "lucide-react";

const commonTechnologies = ["ArcGIS", "QGIS", "Google Earth Engine", "Python", "AI/ML", "PostgreSQL", "TensorFlow", "AWS", "Azure", "Docker", "Kafka", "Power BI"];

const makeConfig = ({ accent = "#1264d8", hero, eyebrow, title, highlight, description, dashboardTitle, ecosystemTitle, solutionsTitle, logos, stats, challenges, solutions, features, workflow, useCasesTitle = "Use Cases", useCases, impact, faqs, ctaTitle, ctaCopy, secondary }) => ({
  accent, accentDark: accent, hero, challengeImage: secondary || hero, ctaImage: hero,
  eyebrow, title, highlight, description, dashboardTitle, ecosystemTitle, solutionsTitle,
  logos, stats, challenges, solutions, features, workflow, useCasesTitle, useCases, impact, faqs,
  technologies: commonTechnologies, ctaTitle, ctaCopy,
  badges: [
    { icon: Bot, label: "AI Intelligence" }, { icon: Map, label: "GIS Mapping" },
    { icon: Radar, label: "Real-Time Monitoring" }, { icon: TrendingUp, label: "Predictive Analytics" },
    { icon: ShieldCheck, label: "Secure Operations" }, { icon: BarChart3, label: "Actionable Insights" }
  ],
  useCaseImages: useCases.map((_, i) => i % 2 ? (secondary || hero) : hero)
});

export const governmentSmartCitiesConfig = makeConfig({
  hero: "/images/industry-showcases/government-smart-cities.png", secondary: "/images/industries/Technology.jpg",
  eyebrow: "GOVERNMENT & SMART CITIES", title: "Building Smarter", highlight: "Governments & Sustainable Cities",
  description: "Empowering government organizations and urban communities with GIS, AI, and digital solutions for better planning, transparency, and citizen living.",
  dashboardTitle: "Smart City Dashboard", ecosystemTitle: "Trusted by Governments & Public Sector Organizations", solutionsTitle: "Our Smart Government & City Solutions",
  logos: ["Smart City Mission", "Digital India", "MoHUA", "MDA", "BHUPDA", "NITI Aayog"],
  stats: [["2.45 M", "Total Population"], ["678 km²", "Area Covered"], ["128", "Projects"], ["2,356", "Citizen Requests"]],
  solutions: [
    { icon: Building2, title: "Urban Planning", image: "/images/industry-showcases/government-smart-cities.png", items: ["Master Plan Development", "Zoning & Land Use", "Infrastructure Planning", "Growth Analysis", "3D City Modeling"] },
    { icon: Layers, title: "Land Records", image: "/images/industries/Technology.jpg", items: ["Digital Land Records", "Cadastral Mapping", "Property Information", "Mutation Tracking", "Registration Support"] },
    { icon: Landmark, title: "Governance Solutions", image: "/images/industry-showcases/government-smart-cities.png", items: ["Data-Driven Decisions", "Policy Monitoring", "Resource Management", "Citizen Services", "Performance Dashboards"] }
  ],
  features: [{ icon: TrafficCone, label: "Smart Mobility" }, { icon: Layers, label: "Land Management" }, { icon: Wrench, label: "Utilities Management" }, { icon: ShieldCheck, label: "Public Safety" }, { icon: Eye, label: "Environmental Monitoring" }, { icon: Users, label: "Citizen Engagement" }],
  workflow: [{ icon: Database, label: "Data Collection" }, { icon: Cloud, label: "Data Integration" }, { icon: Bot, label: "Analysis" }, { icon: Map, label: "Visualization" }, { icon: Landmark, label: "Decision Making" }, { icon: ClipboardCheck, label: "Monitoring" }],
  useCasesTitle: "Key Use Cases", useCases: ["Smart Mobility", "Land Management", "Utilities Management", "Disaster Management", "Public Safety", "Environment", "Citizen Engagement", "Infrastructure"],
  impact: [["30%+", "Operational Efficiency"], ["25%+", "Project Cost Reduction"], ["40%+", "Faster Decisions"], ["50%+", "Citizen Satisfaction"]],
  faqs: ["How can GIS help in urban planning?", "What is a digital land records system?", "How do smart city solutions improve citizen life?", "Do you provide 3D city models?", "Can your solutions integrate with government systems?"],
  ctaTitle: "Building Better Cities for a Better Tomorrow", ctaCopy: "Leverage GIS, AI, and digital technologies to create sustainable, efficient, and citizen-centric cities."
});

export const telecomConfig = makeConfig({
  hero: "/images/industry-showcases/telecom.png", secondary: "/images/industries/Media & Communication.jpg",
  eyebrow: "TELECOM SOLUTIONS", title: "Intelligent Telecom", highlight: "Network Planning & Coverage Analysis",
  description: "AI-powered geospatial solutions for network planning, tower mapping, coverage analysis, and performance optimization to build stronger, smarter networks.",
  dashboardTitle: "Telecom Analytics Dashboard", ecosystemTitle: "Trusted by Leading Telecom & Technology Companies", solutionsTitle: "Our Telecom Solutions",
  logos: ["airtel", "Jio", "Vi", "BSNL", "NOKIA", "ERICSSON", "HUAWEI", "ZTE"],
  stats: [["12,458", "Total Sites"], ["98.6%", "Coverage Area"], ["24.7 M", "Population Covered"], ["99.3%", "Network Availability"]],
  challenges: [{ icon: Wifi, title: "Coverage Gaps", copy: "Unserved and low-signal zones" }, { icon: TowerControl, title: "Site Planning", copy: "Complex tower placement decisions" }, { icon: Gauge, title: "Capacity Pressure", copy: "Growing traffic and congestion" }, { icon: RadioTower, title: "Interference", copy: "Signal overlap and quality loss" }, { icon: Route, title: "Drive Testing", copy: "Time-consuming field surveys" }, { icon: Wrench, title: "Modernization", copy: "Legacy network upgrades" }],
  solutions: [
    { icon: RadioTower, title: "Network Planning", image: "/images/industry-showcases/telecom.png", items: ["Radio Network Planning", "Capacity Planning", "Frequency Planning", "Backhaul Planning", "Coverage Prediction"] },
    { icon: MapPinned, title: "Tower Mapping", image: "/images/industries/Media & Communication.jpg", items: ["Tower Location Mapping", "Site Inventory", "Visibility Analysis", "Lease Mapping", "Obstruction Analysis"] },
    { icon: Wifi, title: "Coverage Analysis", image: "/images/industry-showcases/telecom.png", items: ["4G/5G Prediction", "Indoor Coverage", "Drive Test Analysis", "Gap Identification", "Parameter Optimization"] }
  ],
  features: [{ icon: RadioTower, label: "4G/5G Deployment" }, { icon: MapPinned, label: "New Site Identification" }, { icon: Eye, label: "Coverage Gap Analysis" }, { icon: Gauge, label: "Capacity Planning" }, { icon: Route, label: "Drive Test Analysis" }, { icon: Wifi, label: "Rural Connectivity" }],
  workflow: [{ icon: Database, label: "Data Collection" }, { icon: Cloud, label: "Data Processing" }, { icon: RadioTower, label: "Network Planning" }, { icon: Wifi, label: "Coverage Analysis" }, { icon: BarChart3, label: "Reporting" }, { icon: Radar, label: "Monitoring" }],
  useCases: ["4G/5G Deployment", "New Site Identification", "Coverage Gap Analysis", "Capacity Planning", "Drive Test Analysis", "Benchmarking", "Rural Connectivity", "Modernization"],
  impact: [["99%+", "Coverage Accuracy"], ["30%+", "Cost Optimization"], ["2x", "Faster Planning"], ["40%+", "Improved Capacity"]],
  faqs: ["How does network planning work?", "Do you support 4G, 5G, and future networks?", "Can you reduce network deployment costs?", "What data sources do you use?", "Can you integrate with OSS/BSS systems?"],
  ctaTitle: "Build Stronger Networks with Intelligent Planning", ctaCopy: "Empower telecom operations with AI-driven insights, accurate data, and advanced geospatial analytics."
});

export const aviationAerospaceConfig = makeConfig({
  hero: "/images/industry-showcases/aviation-aerospace.png", secondary: "/images/industries/Logistics & Transportation.jpg",
  eyebrow: "INDUSTRY SOLUTIONS", title: "AI-Powered", highlight: "Aviation & Aerospace Solutions",
  description: "Transform aviation operations with AI, drone mapping, airport analytics, satellite intelligence, GIS mapping, and real-time monitoring.",
  dashboardTitle: "Enterprise Aviation Operations Dashboard", ecosystemTitle: "Trusted by Leading Aviation & Aerospace Companies", solutionsTitle: "Our AI-Powered Aviation Solutions",
  logos: ["AIRBUS", "BOEING", "NASA", "ISRO", "LOCKHEED MARTIN", "Honeywell"],
  stats: [["2,458", "Live Flights"], ["87.6%", "On-Time Performance"], ["128", "Active Airports"], ["24", "AI Alerts"]],
  challenges: [{ icon: Plane, title: "Flight Delays", copy: "Unpredictable delays and disruption" }, { icon: Satellite, title: "Satellite Visibility", copy: "Infrequent or low-resolution data" }, { icon: Radar, title: "Manual Drone Surveys", copy: "Time-consuming field operations" }, { icon: TowerControl, title: "Airspace Monitoring", copy: "Complex airspace management" }, { icon: ScanLine, title: "Asset Inspection", copy: "Large infrastructure inspection" }, { icon: ShieldCheck, title: "Safety & Compliance", copy: "Strict regulatory requirements" }],
  solutions: [
    { icon: Radar, title: "Drone Mapping", image: "/images/industry-showcases/aviation-aerospace.png", items: ["Drone Surveys", "3D Mapping", "Terrain Modeling", "Infrastructure Inspection", "Digital Twin"] },
    { icon: TowerControl, title: "Airport Analytics", image: "/images/industries/Logistics & Transportation.jpg", items: ["Passenger Analytics", "Flight Monitoring", "Runway Utilization", "Baggage Analytics", "Gate Optimization"] },
    { icon: Satellite, title: "Satellite Data Processing", image: "/images/industry-showcases/aviation-aerospace.png", items: ["Satellite Imagery", "Object Detection", "Earth Observation", "GIS Layers", "Climate Intelligence"] }
  ],
  features: [{ icon: Plane, label: "Flight Prediction" }, { icon: ScanLine, label: "Computer Vision" }, { icon: Satellite, label: "Satellite AI" }, { icon: Radar, label: "Drone Analytics" }, { icon: Map, label: "GIS Intelligence" }, { icon: ShieldCheck, label: "Predictive Alerts" }],
  workflow: [{ icon: Satellite, label: "Satellite Data" }, { icon: Radar, label: "Drone Survey" }, { icon: Map, label: "GIS Processing" }, { icon: Bot, label: "AI Analytics" }, { icon: TowerControl, label: "Airport Intelligence" }, { icon: ClipboardCheck, label: "Reporting" }],
  useCasesTitle: "Industries We Support", useCases: ["Airports", "Airlines", "Defense", "Space Agencies", "Drone Companies", "Government", "Smart Cities", "Infrastructure"],
  impact: [["98%", "Survey Accuracy"], ["65%", "Faster Mapping"], ["45%", "Reduced Inspection Cost"], ["80%", "Operational Visibility"]],
  faqs: ["How does drone mapping work?", "Can AI improve airport operations?", "Do you support satellite imagery?", "Can the platform integrate with GIS systems?", "Is it suitable for defense and aerospace projects?"],
  ctaTitle: "Ready to Revolutionize Aviation with AI?", ctaCopy: "Leverage AI, drones, satellites, and real-time analytics to optimize operations, enhance safety, and drive smarter aviation decisions."
});

export const maritimePortsConfig = makeConfig({
  hero: "/images/industry-showcases/maritime-ports.png", secondary: "/images/industries/Logistics & Transportation.jpg",
  eyebrow: "MARITIME & PORT SOLUTIONS", title: "Smart Maritime Solutions for", highlight: "Efficient Ports & Stronger Coasts",
  description: "Leverage GIS, AI, IoT and remote sensing for port operations, vessel tracking, coastal mapping, and maritime domain awareness.",
  dashboardTitle: "Maritime Analytics Dashboard", ecosystemTitle: "Trusted by Maritime & Port Authorities", solutionsTitle: "Our Maritime & Port Solutions",
  logos: ["ADANI PORTS", "DP WORLD", "PSA", "JNPA", "IWAI", "SAGARMALA"],
  stats: [["1,248", "Total Vessels"], ["317", "Vessels at Port"], ["42", "Port Calls Today"], ["2.75 M", "Cargo Throughput"]],
  solutions: [
    { icon: Ship, title: "Port Operations", image: "/images/industry-showcases/maritime-ports.png", items: ["Berth & Yard Management", "Cargo Tracking", "Vessel Scheduling", "Resource Optimization", "Operations Analytics"] },
    { icon: Radar, title: "Vessel Tracking", image: "/images/industries/Logistics & Transportation.jpg", items: ["Real-Time Tracking", "AIS Monitoring", "Route Monitoring", "Geofencing & Alerts", "Performance Insights"] },
    { icon: Waves, title: "Coastal Mapping", image: "/images/industry-showcases/maritime-ports.png", items: ["Coastal Maps", "Bathymetry", "Shoreline Analysis", "Erosion Monitoring", "3D Coastal Modeling"] }
  ],
  features: [{ icon: Radar, label: "Real-Time Tracking" }, { icon: Ship, label: "Port Operations" }, { icon: Waves, label: "Coastal Mapping" }, { icon: BarChart3, label: "Marine Analytics" }, { icon: Eye, label: "Environmental Monitoring" }, { icon: ShieldCheck, label: "Safety & Security" }],
  workflow: [{ icon: Satellite, label: "Data Collection" }, { icon: Database, label: "Data Integration" }, { icon: Map, label: "GIS Analysis" }, { icon: Globe2, label: "Visualization" }, { icon: ClipboardCheck, label: "Decision Support" }, { icon: Radar, label: "Monitoring" }],
  useCases: ["Vessel Traffic", "Port Capacity", "Dredging Charts", "Coastal Zones", "Marine Environment", "Oil Spill Monitoring", "Search & Rescue", "Fisheries"],
  impact: [["99.5%", "Tracking Accuracy"], ["40%+", "Operational Efficiency"], ["25%+", "Cost Optimization"], ["30%+", "Improved Safety"]],
  faqs: ["How does vessel tracking work?", "Which data sources do you use?", "Can you integrate with our port system?", "Do you provide real-time alerts?", "What regions do you support?"],
  ctaTitle: "Transform Your Maritime Operations with Geospatial Intelligence", ctaCopy: "From port optimization to coastal resilience, make smarter, data-driven maritime decisions."
});

export const hospitalityTravelConfig = makeConfig({
  accent: "#1264d8", hero: "/images/industry-showcases/hospitality-travel.png", secondary: "/images/industries/retail_consumer_goods.jpg",
  eyebrow: "INDUSTRY SOLUTIONS", title: "AI-Powered", highlight: "Hospitality & Travel Solutions",
  description: "Deliver exceptional guest experiences with AI-powered hotel automation, travel intelligence, personalized recommendations, customer analytics, and camera sensing.",
  dashboardTitle: "Enterprise Hospitality Dashboard", ecosystemTitle: "Trusted by Leading Hospitality & Travel Brands", solutionsTitle: "Our AI-Powered Hospitality Solutions",
  logos: ["MARRIOTT", "Hilton", "HYATT", "TAJ HOTELS", "Radisson", "airbnb"],
  stats: [["78.5%", "Occupancy Rate"], ["1,245", "Bookings Today"], ["$152.6", "Revenue Today"], ["4.8/5", "Guest Satisfaction"]],
  challenges: [{ icon: Hotel, title: "Manual Operations", copy: "Time-consuming hotel processes" }, { icon: Gauge, title: "Low Booking Efficiency", copy: "Manual systems and lost demand" }, { icon: Users, title: "No Customer Insights", copy: "Limited data-driven decisions" }, { icon: TrendingUp, title: "Revenue Leakage", copy: "Missed upsell opportunities" }, { icon: Sparkles, title: "Inconsistent Experience", copy: "Uneven service and engagement" }, { icon: Eye, title: "Low Guest Retention", copy: "Poor loyalty and personalization" }],
  solutions: [
    { icon: Hotel, title: "Hotel Automation", image: "/images/industry-showcases/hospitality-travel.png", items: ["Smart Check-in/Out", "Room Automation", "Housekeeping AI", "Smart Room Controls", "Staff Management"] },
    { icon: Compass, title: "Travel AI", image: "/images/industries/retail_consumer_goods.jpg", items: ["AI Trip Planning", "Dynamic Pricing", "Recommendations", "Flight & Hotel Suggestions", "Itinerary Optimization"] },
    { icon: Users, title: "Customer Intelligence", image: "/images/industry-showcases/hospitality-travel.png", items: ["Guest Segmentation", "Loyalty Analytics", "Sentiment Analysis", "Revenue Prediction", "Personalized Marketing"] }
  ],
  features: [{ icon: Bot, label: "AI Concierge" }, { icon: TrendingUp, label: "Predictive Booking" }, { icon: Users, label: "Guest Analytics" }, { icon: Camera, label: "Computer Vision" }, { icon: Gauge, label: "Revenue Forecasting" }, { icon: Radar, label: "Smart Notifications" }],
  workflow: [{ icon: ClipboardCheck, label: "Guest Booking" }, { icon: Bot, label: "AI Recommendations" }, { icon: Hotel, label: "Smart Check-in" }, { icon: Sparkles, label: "Stay Experience" }, { icon: Users, label: "Guest Feedback" }, { icon: BarChart3, label: "Business Insights" }],
  useCasesTitle: "Industries We Support", useCases: ["Hotels", "Resorts", "Airlines", "Cruise", "Travel Agencies", "Theme Parks", "Restaurants", "Tourism Boards"],
  impact: [["99%", "Guest Satisfaction"], ["45%", "Higher Conversion"], ["35%", "Revenue Growth"], ["60%", "Faster Guest Service"]],
  faqs: ["Can AI automate hotel operations?", "Does it integrate with PMS systems?", "Can AI personalize guest experiences?", "Does it support travel companies?", "Is it suitable for hotel chains?"],
  ctaTitle: "Transform Every Guest Experience with AI", ctaCopy: "Leverage AI, automation, and real-time analytics to delight guests, maximize revenue, and streamline operations."
});
