import IndustryAiPage from "../../../components/IndustryAiPage";
import { governmentSmartCitiesConfig as config } from "../../../data/showcaseIndustries";
export const metadata = { title: "Government & Smart Cities Solutions | Antellay", description: config.description };
export default function Page(){ return <IndustryAiPage config={config}/>; }
