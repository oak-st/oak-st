export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4">
          Contact
        </p>
        <h2 className="font-playfair text-4xl font-bold mb-4">
          Open to Opportunities
        </h2>
        <p className="text-white/50 mb-10 max-w-md mx-auto leading-relaxed">
          I'm actively looking for full-time roles in IT and security engineering.
          If you think there's a fit, reach out.
        </p>
        <a
          href="mailto:youshouldhireme@oak-st.com"
          className="inline-block px-8 py-4 bg-navy text-white text-sm font-medium tracking-widest uppercase hover:bg-navy/80 transition-colors"
        >
          youshouldhireme@oak-st.com
        </a>
        <p className="mt-6 text-xs text-white/30 italic">
          Yes, it's a real email. I'm allowed to do this. You can't stop me. Any complaints can be directed to{' '}
          <a href="mailto:garbagedisposal@oak-st.com" className="underline hover:text-white/50 transition-colors">
            garbagedisposal@oak-st.com
          </a>
          .
        </p>
      </div>
    </section>
  )
}
