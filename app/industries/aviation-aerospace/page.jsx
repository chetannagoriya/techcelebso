import IndustryAiPage from "../../../components/IndustryAiPage";
import { aviationAerospaceConfig as config } from "../../../data/showcaseIndustries";
export const metadata = { title: "Aviation & Aerospace AI Solutions | Antellay", description: config.description };
export default function Page(){ return <IndustryAiPage config={config}/>; }
