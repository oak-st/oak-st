const roles = [
  {
    title: 'Senior IT & Security Engineer',
    company: 'Managed services provider',
    period: 'Nov 2025 to Present',
    scope:
      'IT, infrastructure, and compliance engineering across multiple client engagements. Owns identity, infrastructure operations, vendor management, and audit readiness. Runs SOC 2 programs, implements SSO/MFA/passkey rollouts, manages EDR/MDM, authors security policies, and leads security hardening across productivity platforms.',
  },
  {
    title: 'IT & Security Engineer',
    company: 'Enterprise SaaS company',
    period: 'Feb 2024 to Present',
    scope:
      'Owns SOC 2 Type II (zero to attestation), IT identity lifecycle for 250+ employees, macOS fleet MDM and EDR, DevSecOps scanning across the full engineering codebase, and Cloudflare Zero Trust. Architects and deploys AI agents and custom MCP servers under SOC 2 controls.',
  },
  {
    title: 'Windows Systems Administrator',
    company: 'Fortune 200 energy company',
    period: 'Nov 2022 to Feb 2024',
    scope:
      'Administered 60+ Windows servers across multiple data centers supporting critical utility operations. Managed VMware Horizon VDI for 500+ concurrent users. Built PowerShell automation reducing manual check routines by ~10 hours/week.',
  },
  {
    title: 'NERC CIP Compliance Analyst',
    company: 'Fortune 200 energy company',
    period: 'Jun 2022 to Nov 2022',
    scope:
      'Managed IT change management processes for NERC CIP compliance across 200+ physical and virtual assets. Processed 75+ change requests at 100% success rate. Built and maintained the CIP evidence repository.',
  },
  {
    title: 'Technical Support Representative',
    company: 'Enterprise software company',
    period: 'Jul 2021 to Jun 2022',
    scope:
      'Owned technical support queue for an enterprise document management platform, resolving 30+ tickets/week at 95%+ first-contact rate for clients in legal, government, and healthcare.',
  },
  {
    title: 'IT Help Desk Technician',
    company: 'Nonprofit organization',
    period: 'Jan 2021 to Jun 2022',
    scope:
      'Sole IT support for a 40-person organization, owning end-to-end troubleshooting, IT procurement, and hardware lifecycle management across Windows and cloud environments.',
  },
]

const skills = [
  'SOC 2 / ISO 27001 / NIST',
  'Identity & Access Management',
  'Zero Trust (Cloudflare ZTNA)',
  'EDR / MDM',
  'DevSecOps (SAST/DAST)',
  'Entra ID / Google Workspace',
  'AWS / Azure / GCP',
  'VMware (Horizon, vSphere)',
  'Python / PowerShell',
  'GitLab CI/CD',
  'Claude API / MCP',
  'AI Agent Development',
]

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4">
          Resume
        </p>
        <h2 className="font-playfair text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-10 mb-16">
          {roles.map((role) => (
            <div key={role.title + role.period} className="border-l border-white/10 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-playfair text-xl font-semibold">
                  {role.title}
                </h3>
                <span className="text-xs text-white/30 tracking-wide whitespace-nowrap">
                  {role.period}
                </span>
              </div>
              <p className="text-sm text-white/40 mb-3 italic">{role.company}</p>
              <p className="text-sm text-white/50 leading-relaxed">{role.scope}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h3 className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 border border-white/20 text-xs font-medium text-white/60 tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-white/30 italic">
            Full resume with employer names and references available upon request.
          </p>
        </div>
      </div>
    </section>
  )
}
