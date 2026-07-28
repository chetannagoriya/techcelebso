import LegalPolicyPage from "../../components/LegalPolicyPage";

export const metadata = {
  title: "Privacy Policy | Antellay",
  description: "How Antellay collects, uses, shares, and protects personal data.",
};

const sections = [
  {
    id: "scope",
    title: "Scope and who we are",
    content: (
      <>
        <p>This policy applies when you visit Antellay websites, contact us, request services, subscribe to updates, apply for a role, or otherwise interact with us.</p>
        <p>Antellay Technologies Pvt. Ltd. determines why and how personal data is processed for the activities described here. A separate contract or notice may apply when we process data solely on a client&apos;s instructions.</p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Personal data we collect",
    content: (
      <>
        <p>Depending on your interaction, we may collect:</p>
        <ul>
          <li>identity and contact details, including name, work email, phone number, organisation, and job title;</li>
          <li>inquiry, project, support, and correspondence details;</li>
          <li>job application information such as a CV, experience, qualifications, and interview notes;</li>
          <li>technical and usage data such as IP address, device, browser, referring page, and site activity;</li>
          <li>preferences and consent choices; and</li>
          <li>billing and transaction records where relevant to a client engagement.</li>
        </ul>
        <p>Please do not send sensitive personal data unless it is necessary and we have specifically requested it.</p>
      </>
    ),
  },
  {
    id: "how-we-use-data",
    title: "How we use personal data",
    content: (
      <>
        <p>We use personal data to respond to inquiries, evaluate and deliver services, manage client relationships, provide support, process applications, secure our systems, improve our website, meet legal obligations, and protect our rights.</p>
        <p>Where required, processing is based on consent, steps requested before entering a contract, performance of a contract, compliance with law, or a legitimate business purpose that does not override your rights.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    content: (
      <>
        <p>Our website may use essential cookies required for security, preferences, and core operation. We may also use analytics or similar technologies to understand aggregate site usage.</p>
        <p>Where consent is required, non-essential technologies should be used only after you make a choice. You can also restrict cookies through your browser, although some features may not work as intended.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "When we share data",
    content: (
      <>
        <p>We may share data with vetted service providers supporting hosting, communications, analytics, security, recruitment, or professional advice; with affiliates working under appropriate safeguards; or with authorities where legally required.</p>
        <p>We do not sell personal data. Providers may use information only for the agreed purpose and must protect it appropriately.</p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International transfers",
    content: (
      <p>Because we may work with clients and providers in different countries, data may be processed outside your home jurisdiction. Where required, we use contractual, organisational, or other lawful safeguards and observe applicable transfer restrictions.</p>
    ),
  },
  {
    id: "retention-security",
    title: "Retention and security",
    content: (
      <>
        <p>We retain personal data only as long as reasonably necessary for the purpose collected, including contractual, accounting, dispute, security, and legal requirements. Retention periods vary by record type and context.</p>
        <p>We use reasonable administrative, technical, and organisational safeguards. No internet transmission or storage system is completely secure, so absolute security cannot be guaranteed.</p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your choices and rights",
    content: (
      <>
        <p>Depending on applicable law, you may request access, correction, updating, deletion, withdrawal of consent, grievance redressal, or information about processing. You may also unsubscribe from marketing messages at any time.</p>
        <p>Send a request to <a href="mailto:info@antellay.com">info@antellay.com</a>. We may verify your identity and may retain information where law permits or requires it. You may also approach the competent data protection authority where applicable.</p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Children, external links, and updates",
    content: (
      <>
        <p>Our business website and services are not directed to children. We do not knowingly seek children&apos;s personal data through this website.</p>
        <p>External sites operate under their own privacy practices. We may update this policy to reflect operational or legal changes and will post the revised effective date on this page.</p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPolicyPage
      eyebrow="Data & privacy"
      title="Privacy Policy"
      description="A clear account of the personal data we collect, why we use it, and the choices available to you."
      effectiveDate="27 July 2026"
      intro="We believe privacy should be understandable. This policy describes Antellay’s general practices for website visitors, business contacts, clients, candidates, and other people who interact with us."
      notice="This policy is a general transparency notice and does not replace a project-specific data processing agreement, consent notice, or legal requirement that applies to a particular engagement."
      sections={sections}
      activePath="/privacy-policy"
      contactLabel="Have a privacy request?"
    />
  );
}
