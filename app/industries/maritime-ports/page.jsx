import IndustryAiPage from "../../../components/IndustryAiPage";
import { maritimePortsConfig as config } from "../../../data/showcaseIndustries";
export const metadata = { title: "Maritime & Port Solutions | Antellay", description: config.description };
export default function Page(){ return <IndustryAiPage config={config}/>; }
