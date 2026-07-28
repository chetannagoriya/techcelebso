import LegalPolicyPage from "../../components/LegalPolicyPage";

export const metadata = {
  title: "Client Policy | Antellay",
  description: "Antellay's principles for proposals, project delivery, client data, support, and responsible collaboration.",
};

const sections = [
  {
    id: "purpose",
    title: "Purpose and application",
    content: (
      <p>This policy explains the general principles Antellay follows when discussing and delivering professional services. A signed proposal, statement of work, master services agreement, data processing agreement, or other written contract takes priority where its terms differ from this page.</p>
    ),
  },
  {
    id: "engagement",
    title: "Starting an engagement",
    content: (
      <>
        <p>Before work begins, we aim to document the objectives, scope, assumptions, responsibilities, deliverables, timeline, fees, and acceptance approach. Estimates depend on the information available and may be revised when requirements or constraints change.</p>
        <p>Neither an initial conversation nor a proposal obligates either party until authorised representatives agree to proceed in writing.</p>
      </>
    ),
  },
  {
    id: "collaboration",
    title: "Client collaboration and dependencies",
    content: (
      <>
        <p>Successful delivery requires timely access to relevant people, systems, content, approvals, credentials, and decisions. Clients are responsible for the accuracy and legality of materials, instructions, and access they provide.</p>
        <p>Delays or changes in dependencies may affect delivery dates, effort, or cost. We communicate material risks and seek written alignment before changing an agreed plan.</p>
      </>
    ),
  },
  {
    id: "change-control",
    title: "Scope and change control",
    content: (
      <p>Requests outside the agreed scope are assessed for impact. A change may require a revised timeline, fee, staffing plan, or deliverable. Material changes should be approved in writing before additional work begins.</p>
    ),
  },
  {
    id: "fees",
    title: "Fees, invoices, and taxes",
    content: (
      <>
        <p>Commercial terms, milestones, currency, payment dates, reimbursable expenses, and applicable taxes are stated in the relevant agreement. Clients should raise invoice questions promptly so both teams can resolve them.</p>
        <p>Late, disputed, or unpaid amounts may affect scheduling or lead to suspension where permitted by contract and law. Refunds, credits, and cancellations are governed by the signed engagement terms because professional services reserve people and delivery capacity.</p>
      </>
    ),
  },
  {
    id: "confidentiality-data",
    title: "Confidentiality, access, and data",
    content: (
      <>
        <p>We use client confidential information only to evaluate, deliver, secure, and support the engagement, subject to agreed confidentiality obligations. Access is limited to people who need it for their role.</p>
        <p>Clients should avoid providing production personal data unless necessary and authorised. Where Antellay processes personal data on a client&apos;s behalf, the parties should agree appropriate processing, security, retention, incident, and return or deletion requirements.</p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    content: (
      <>
        <p>Ownership and licence rights for deliverables, pre-existing materials, reusable tools, open-source software, third-party assets, and client materials are governed by the applicable agreement.</p>
        <p>Unless agreed otherwise, each party retains its pre-existing intellectual property. Third-party and open-source components remain subject to their respective licence terms.</p>
      </>
    ),
  },
  {
    id: "quality-acceptance",
    title: "Quality, acceptance, and support",
    content: (
      <>
        <p>We review deliverables against documented acceptance criteria. Clients should test and report material issues within the review period in the applicable agreement. Items consistent with the agreed criteria are treated separately from enhancements or new requirements.</p>
        <p>Warranty, maintenance, service levels, and post-launch support apply only when stated in writing. Emergency or out-of-hours assistance may require a separate support arrangement.</p>
      </>
    ),
  },
  {
    id: "responsible-use",
    title: "Responsible and lawful use",
    content: (
      <p>Clients must not use our services or deliverables to violate law, infringe rights, introduce malicious code, bypass security controls, enable unlawful surveillance or discrimination, or cause material harm. We may decline or suspend work that presents a credible legal, security, safety, or ethical risk.</p>
    ),
  },
  {
    id: "concerns",
    title: "Concerns, termination, and disputes",
    content: (
      <>
        <p>Project concerns should first be raised with the delivery lead so the teams can agree corrective action. Formal escalation, suspension, termination, transition assistance, and dispute procedures follow the signed agreement.</p>
        <p>If no written agreement addresses a question, contact us so it can be resolved and documented before the affected work continues.</p>
      </>
    ),
  },
];

export default function ClientPolicyPage() {
  return (
    <LegalPolicyPage
      eyebrow="Working together"
      title="Client Policy"
      description="The operating principles behind transparent proposals, responsible delivery, and productive client relationships."
      effectiveDate="27 July 2026"
      intro="Every engagement is different. These baseline principles explain how we approach scope, communication, client information, quality, and responsible use across Antellay services."
      notice="This page is not a substitute for a signed contract. The applicable proposal, statement of work, master services agreement, and data processing terms control each engagement."
      sections={sections}
      activePath="/client-policy"
      contactLabel="Need a commercial clarification?"
    />
  );
}
