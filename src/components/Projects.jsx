const projects = [
  {
    title: 'SOC 2 Type II, Zero to Attestation',
    description:
      'Built a SOC 2 compliance program from scratch, centralizing evidence across 40+ controls, authoring 12 security policies, and establishing continuous monitoring via a compliance automation platform. Drove the Type II audit to attestation, then extended the program to track ISO 27001, GDPR, and NIST from a single evidence base. Currently leading an in-progress SOC 1 Type I effort built on the same shared control infrastructure.',
    tags: ['SOC 2', 'SOC 1', 'Vanta', 'ISO 27001', 'NIST', 'Compliance'],
  },
  {
    title: 'MCP Server Infrastructure & Enterprise AI',
    description:
      'Architected and self-hosted custom MCP servers exposing internal CRM and video communication platforms to company-wide AI agents on AWS and GCP. Hardened with SSO-backed auth, least-privilege tool access, end-to-end audit logging, and KMS-managed secrets, establishing the reference security pattern for enterprise AI adoption under SOC 2.',
    tags: ['MCP', 'Python', 'AWS', 'GCP', 'AI/Automation'],
  },
  {
    title: 'AI Agent Suite',
    description:
      'Built and deployed multiple production AI agents: an autonomous vulnerability triage agent that classifies findings and auto-files tickets; a knowledge base agent that mines resolved tickets to author and curate structured documentation; and a sales conversation analysis agent that generates deep-dive breakdowns from call recordings.',
    tags: ['Python', 'Claude API', 'AI/Automation', 'Security'],
  },
  {
    title: 'Zero Trust Network Access',
    description:
      'Deployed Cloudflare Zero Trust to replace implicit-trust VPN connectivity with identity-aware ZTNA policies. Per-application access brokering gates connections to internal services and cloud VPCs on user identity and device posture.',
    tags: ['Cloudflare', 'Zero Trust', 'IAM', 'Infrastructure'],
  },
  {
    title: 'MDM Fleet Migration & Zero-Touch Enrollment',
    description:
      'Led a full macOS fleet migration between MDM platforms with zero end-user disruption, redeploying EDR in lockstep. Built zero-touch provisioning through Apple Business Manager and bound device compliance posture to identity so SSO and RBAC access gates on managed, healthy, threat-monitored endpoints.',
    tags: ['MDM', 'Apple Business Manager', 'SentinelOne', 'Zero Trust'],
  },
  {
    title: 'DevSecOps Pipeline',
    description:
      'Rolled out GitLab-native SAST, DAST, dependency, and container scanning as enforced merge-request gates across a full engineering group, every repository inherits security scanning by default. Owns vulnerability management from triage through remediation routing, shifting security left to catch issues before production.',
    tags: ['GitLab CI/CD', 'SAST/DAST', 'DevSecOps', 'Security'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4">
          Work
        </p>
        <h2 className="font-playfair text-4xl font-bold mb-12">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-white/10 bg-black p-6 hover:border-white/30 transition-colors flex flex-col gap-4"
            >
              <h3 className="font-playfair text-xl font-semibold leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-navy text-white/80 text-xs font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
