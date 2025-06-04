import Button from '@/components/ui/Button'; // Simplified path
import { SymbioWaveLogo } from '@/components/icons/SymbioWaveLogo'; // You'll create this

// Placeholder for SymbioWaveLogo component (create in src/components/icons/SymbioWaveLogo.tsx)
const PlaceholderLogo = () => (
  <div className="text-4xl font-bold font-heading">
    Symbio<span className="text-accent-gold">Wave</span>
  </div>
);


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* <SymbioWaveLogo className="mx-auto h-20 md:h-28" animated={true} /> */}
          <PlaceholderLogo />
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-neutral-lightest">
            Enter the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-secondary-light to-accent-gold">Cellular Intelligence</span> Realm
          </h1>
          <p className="mt-6 max-w-xl md:max-w-2xl mx-auto text-lg md:text-xl text-neutral-light/80">
            AI for a Symbiotic Future — Powered by Artificial Cellular Intelligence.
          </p>
          <div className="mt-10">
            <Button href="/platform/aci-technology" variant="primary" size="lg">
              Discover ACI
            </Button>
          </div>
        </div>
      </section>
      <p className="mt-10 text-neutral-light/60">
        This is a foundational structure. Add more sections and components as per the project brief.
      </p>
      <p className="text-neutral-light/60">
        Remember to run &apos;npm install&apos; or &apos;yarn install&apos;.
      </p>
    </div>
  );
}
