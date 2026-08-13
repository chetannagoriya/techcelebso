import { notFound } from "next/navigation";
import LegalPolicyPage from "../../../components/LegalPolicyPage";
import policies from "../../../data/legalPolicies.json";

export function generateStaticParams() {
  return policies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const policy = policies.find((item) => item.slug === slug);
  if (!policy) return {};
  return { title: `${policy.title} | Antellay`, description: policy.summary };
}

export default async function PolicyPage({ params }) {
  const { slug } = await params;
  const policy = policies.find((item) => item.slug === slug);
  if (!policy) notFound();
  return <LegalPolicyPage policy={policy} />;
}
