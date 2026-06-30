const facts = [
  {
    label: 'Old School RuneScape',
    value: 'Level 124 Hardcore Ironman',
    detail: 'Red helmet check? I don\'t leave the house without my ring of life.',
  },
  {
    label: 'Home Media',
    value: 'Self-hosted Plex server',
    detail: 'Because my kids should experience the great 90s cartoons and PBS.',
  },
  {
    label: 'Home Lab',
    value: 'Ok I started...',
    detail: 'Computah activate infinite home lab sequencing with Ollama 1 trillion parameter size, infinite VRAM and harness the power of the sun to its maximum solar capabilities.',
  },
  {
    label: 'Side Projects',
    value: 'AI / QOL automation',
    detail: 'I have tons of ideas. When does the money printing part of this start?',
  },
]

export default function Personal() {
  return (
    <section id="personal" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4">
          Get to Know Me
        </p>
        <h2 className="font-playfair text-4xl font-bold mb-4">
          Outside the terminal.
        </h2>
        <p className="text-white/40 mb-12 text-sm leading-relaxed max-w-xl">
          The work is serious. The rest doesn't have to be.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {facts.map((fact) => (
            <div key={fact.label} className="border border-white/10 p-6 hover:border-white/25 transition-colors">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30 mb-2">
                {fact.label}
              </p>
              <p className="font-playfair text-xl font-semibold mb-2">{fact.value}</p>
              <p className="text-sm text-white/40 leading-relaxed">{fact.detail}</p>
            </div>
          ))}
        </div>

        <div className="border border-white/10 p-8 mb-6 flex flex-col sm:flex-row gap-8">
          <img
            src="/swordmaster.png"
            alt="Star-Embracing Swordmaster cover"
            className="w-36 object-cover flex-shrink-0 self-start"
          />
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30 mb-4">
              Manhwa
            </p>
            <p className="font-playfair text-2xl font-semibold mb-3">Big fan of manhwa.</p>
            <p className="text-sm text-white/40 leading-relaxed mb-5 max-w-xl">
              Currently highly recommending: if you're not reading <span className="text-white/70 italic">Star-Embracing Swordmaster</span>, fix that.
            </p>
            <a
              href="https://asurascans.com/comics/star-embracing-swordmaster-30e93729"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 border border-white/20 text-xs font-medium tracking-widest uppercase text-white/60 hover:border-white/50 hover:text-white/90 transition-colors"
            >
              Read it here →
            </a>
          </div>
        </div>

        <div className="border border-white/10 p-8 flex flex-col sm:flex-row items-center gap-8">
          <img
            src="/rayquaza.png"
            alt="Shiny Rayquaza"
            className="w-48 h-48 object-contain flex-shrink-0"
          />
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30 mb-2">
              Favorite Shiny Pokémon
            </p>
            <p className="font-playfair text-2xl font-semibold mb-3">Shiny Rayquaza — #1.</p>
            <p className="text-sm text-white/40 leading-relaxed">
              Pokémon Emerald is the best game ever made, 3rd gen is the peak of the franchise, and the Battle Frontier is a masterpiece that has never been topped.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
