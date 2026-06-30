export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4">
          About
        </p>
        <h2 className="font-playfair text-4xl font-bold mb-10">
          Senior IT and security engineer with a compliance and automation edge.
        </h2>
        <div className="space-y-6 text-white/60 leading-relaxed text-base">
          <p>
            I have 6+ years of hands-on experience across security compliance, identity, and infrastructure in regulated and high-growth environments. I've run multiple compliance frameworks in parallel, including driving a SOC 2 Type II audit from zero to attestation, and owned identity lifecycle, endpoint security, DevSecOps, and Zero Trust access across cloud and SaaS estates.
          </p>
          <p>
            On the technical side, I specialize in Entra ID and Google Workspace identity administration, EDR/MDM endpoint management, CI/CD security scanning, and multi-framework compliance across AWS, Azure, GCP, and hybrid environments. I also design and self-host custom MCP servers and build Claude-powered AI agents that automate knowledge base creation, vulnerability triage, and sales-conversation analysis, all under SOC 2 controls.
          </p>
          <p>
            I'm actively looking for a full-time senior IT or security engineering role. I work best in environments where the problems are real, the team moves fast, and the work has direct business impact.
          </p>
        </div>
      </div>
    </section>
  )
}
