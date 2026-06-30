export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-3xl w-full">
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          Jeffrey Tjokroredjo
        </h1>
        <p className="font-playfair text-xl sm:text-2xl text-white/60 mb-6">
          IT &amp; Security Engineer
        </p>
        <p className="text-base sm:text-lg text-white/50 max-w-xl mb-10 leading-relaxed">
          6+ years driving SOC 2 compliance, zero-trust architecture, and AI-powered automation across cloud and SaaS environments.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-navy text-white text-sm font-medium tracking-wide uppercase hover:bg-navy/80 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 text-white text-sm font-medium tracking-wide uppercase hover:border-white/60 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
