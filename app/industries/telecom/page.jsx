import IndustryAiPage from "../../../components/IndustryAiPage";
import { telecomConfig as config } from "../../../data/showcaseIndustries";
export const metadata = { title: "Intelligent Telecom Solutions | Antellay", description: config.description };
export default function Page(){ return <IndustryAiPage config={config}/>; }
