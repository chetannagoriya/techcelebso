import LegalPolicyPage from "../../components/LegalPolicyPage";

export const metadata = {
  title: "Employee Policy | Antellay",
  description: "Antellay's public summary of workplace conduct, inclusion, security, confidentiality, and reporting principles.",
};

const sections = [
  {
    id: "purpose",
    title: "Purpose and coverage",
    content: (
      <>
        <p>This public policy summarises the standards we expect from employees, interns, contractors, consultants, and others working on Antellay&apos;s behalf. It applies across offices, remote work, client locations, events, business travel, and work-related digital channels.</p>
        <p>Detailed employment terms, local handbooks, benefits, leave rules, and internal procedures may vary by role and location and take priority where specifically applicable.</p>
      </>
    ),
  },
  {
    id: "conduct",
    title: "Professional conduct",
    content: (
      <p>Everyone is expected to act honestly, respectfully, safely, and in Antellay&apos;s legitimate interests; follow applicable law and internal controls; maintain accurate records; meet professional commitments; and communicate risks or mistakes promptly.</p>
    ),
  },
  {
    id: "inclusion",
    title: "Equal opportunity and inclusion",
    content: (
      <>
        <p>Employment decisions should be based on role requirements, qualifications, performance, conduct, and business needs—not irrelevant personal characteristics. We aim to provide a workplace free from unlawful discrimination, bullying, retaliation, and harassment.</p>
        <p>Reasonable workplace support or accommodation may be considered in line with applicable law, role requirements, and individual circumstances. Concerns can be raised without fear of retaliation for a good-faith report.</p>
      </>
    ),
  },
  {
    id: "harassment",
    title: "Prevention of harassment",
    content: (
      <>
        <p>Sexual harassment and other unwelcome conduct are prohibited. Reports should be handled promptly, sensitively, and as confidentially as the review process permits.</p>
        <p>Complaints covered by India&apos;s Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 are addressed through the mechanism required by that law, including the appropriate Internal Committee or Local Committee route. Internal contact details are provided to personnel through official HR channels.</p>
      </>
    ),
  },
  {
    id: "conflicts",
    title: "Conflicts, gifts, and anti-bribery",
    content: (
      <>
        <p>Personnel must disclose actual or potential conflicts between personal interests and their work. Outside employment, financial interests, close relationships, or vendor connections must not improperly influence business decisions.</p>
        <p>Bribes, kickbacks, facilitation payments, and improper advantages are prohibited. Gifts and hospitality must be lawful, modest, infrequent, transparent, and never offered or accepted to influence a decision.</p>
      </>
    ),
  },
  {
    id: "information-security",
    title: "Confidentiality and information security",
    content: (
      <>
        <p>Company, client, employee, and partner information must be accessed only for authorised work and protected according to its sensitivity. Personnel must use approved accounts, devices, storage, access controls, and secure sharing methods.</p>
        <p>Credentials must not be shared. Suspected phishing, data exposure, device loss, malware, or unauthorised access must be reported immediately through the designated internal channel.</p>
      </>
    ),
  },
  {
    id: "assets-ai",
    title: "Company assets and responsible technology use",
    content: (
      <>
        <p>Company systems, funds, equipment, software, and work time must be used responsibly. Limited personal use may be permitted where it is lawful, reasonable, secure, and does not interfere with work or policy.</p>
        <p>Confidential, personal, client, or proprietary information must not be entered into unapproved AI or third-party tools. AI-assisted work requires appropriate human review for accuracy, security, bias, intellectual property, and contractual compliance.</p>
      </>
    ),
  },
  {
    id: "workplace-safety",
    title: "Health, safety, and respectful work",
    content: (
      <p>Personnel must follow workplace safety and emergency procedures, remain fit to perform work safely, report hazards and incidents, and avoid violence, threats, intimidation, or unsafe behaviour. Remote workers should maintain a reasonably secure and suitable work environment.</p>
    ),
  },
  {
    id: "reporting",
    title: "Speak up and non-retaliation",
    content: (
      <>
        <p>Potential misconduct, security issues, harassment, conflicts, fraud, legal violations, or policy breaches should be reported to a manager, HR, the designated compliance or security contact, or another channel communicated internally.</p>
        <p>Good-faith reporting and participation in a review are protected from retaliation. Knowingly false reports, interference with an inquiry, or retaliation may lead to corrective action.</p>
      </>
    ),
  },
  {
    id: "reviews",
    title: "Reviews and consequences",
    content: (
      <>
        <p>Concerns are reviewed fairly, impartially, and with appropriate confidentiality. Personnel are expected to cooperate and preserve relevant information.</p>
        <p>Confirmed violations may result in coaching, access restrictions, reassignment, formal disciplinary action, termination of employment or engagement, recovery of loss, or referral to authorities, depending on severity and applicable law.</p>
      </>
    ),
  },
];

export default function EmployeePolicyPage() {
  return (
    <LegalPolicyPage
      eyebrow="People & workplace"
      title="Employee Policy"
      description="A public summary of the conduct, inclusion, confidentiality, security, and speak-up principles expected across our workplace."
      effectiveDate="27 July 2026"
      intro="Antellay aims to build an environment where people can do excellent work with trust, respect, accountability, and care for the clients and communities we serve."
      notice="This public summary is not an employment contract and does not create a guarantee of employment, benefits, or a particular disciplinary process. Personnel should use the current internal handbook and HR channels for operative procedures."
      sections={sections}
      activePath="/employee-policy"
      contactLabel="Need policy guidance?"
    />
  );
}
