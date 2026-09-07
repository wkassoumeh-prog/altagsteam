const features = [
  {
    title: "Zuhause gut begleitet",
    text: "Unterstützung dort, wo Sie sich am wohlsten fühlen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
        <path d="M12 8.5v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Entlastung für Angehörige",
    text: "Wir nehmen Ihnen Arbeit ab und schenken Zeit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <path d="M5.5 18c.8-2.2 2.4-3.5 3.5-3.5S11.7 15.8 12 18M12 18c.3-2.2 1.9-3.5 3-3.5s2.7 1.3 3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Mit Herz und Vertrauen",
    text: "Persönlich, einfühlsam und immer an Ihrer Seite.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20.5s-7-4.6-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 4.9-7 9.5-7 9.5Z" />
      </svg>
    ),
  },
  {
    title: "Regional für Sie da",
    text: "In Marburg und ganz Hessen unterwegs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
];

export default function HeroFeatures() {
  return (
    <section className="border-b border-border/60 bg-cream">
      <div className="grid grid-cols-4 divide-x divide-border/60">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center px-2 py-6 text-center sm:px-5 sm:py-10"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/8 text-primary sm:mb-4 sm:h-14 sm:w-14">
              <span className="h-5 w-5 sm:h-7 sm:w-7">{feature.icon}</span>
            </div>
            <h3 className="text-[11px] font-bold leading-snug text-primary sm:text-base">
              {feature.title}
            </h3>
            <p className="mt-1.5 text-[10px] leading-relaxed text-primary/80 sm:mt-2 sm:text-sm">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
