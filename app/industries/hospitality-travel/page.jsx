import IndustryAiPage from "../../../components/IndustryAiPage";
import { hospitalityTravelConfig as config } from "../../../data/showcaseIndustries";
export const metadata = { title: "Hospitality & Travel AI Solutions | Antellay", description: config.description };
export default function Page(){ return <IndustryAiPage config={config}/>; }
