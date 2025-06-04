import Button from '@/components/ui/Button'; // Simplified path
import { SymbioWaveLogo } from '@/components/icons/SymbioWaveLogo';
import { motion, animate, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { useEffect, useRef, useState } from 'react'; // Added useState

// Define DivisionType (can be moved to a types file later)
export interface DivisionType {
  id: string;
  name: string;
  tagline: string;
  details: string;
}

// Simplified AnimatedCounter (can be a separate component later)
interface AnimatedCounterProps {
  targetValue: number;
  duration?: number; // Optional: animation duration in seconds
  className?: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ targetValue, duration = 2, className, prefix = "", suffix = "" }) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = countRef.current;
    if (node) {
      const controls = animate(0, targetValue, {
        duration: duration,
        onUpdate(value) {
          node.textContent = prefix + Math.round(value).toLocaleString() + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [targetValue, duration, prefix, suffix]);

  return <motion.span ref={countRef} className={className}>{prefix}0{suffix}</motion.span>;
};

import ModelCard from '@/components/ui/ModelCard'; // Import ModelCard
import DivisionCard from '@/components/ui/DivisionCard'; // Import DivisionCard
import EcosystemDiagram from '@/components/feature/EcosystemDiagram'; // Import EcosystemDiagram
import PhysarumIcon from '@/components/icons/models/PhysarumIcon';
import QuorumIcon from '@/components/icons/models/QuorumIcon';
import ImmuneIcon from '@/components/icons/models/ImmuneIcon';
import NeuralCrestIcon from '@/components/icons/models/NeuralCrestIcon';
import BioElectricSignalIcon from '@/components/icons/models/BioElectricSignalIcon';
import GeneticAlgorithmIcon from '@/components/icons/models/GeneticAlgorithmIcon';
import SwarmIntelligenceIcon from '@/components/icons/models/SwarmIntelligenceIcon';
import MycelialNetworkIcon from '@/components/icons/models/MycelialNetworkIcon';
import BacterialForagingIcon from '@/components/icons/models/BacterialForagingIcon';
import EcologicalNicheIcon from '@/components/icons/models/EcologicalNicheIcon';

export default function HomePage() {
  const [activeDivisionDetails, setActiveDivisionDetails] = useState<DivisionType | null>(null);

  const handleDivisionSelection = (divisionData: DivisionType | null) => {
    setActiveDivisionDetails(divisionData);
  };

  const heroStats = [ // Renamed from stats to heroStats for clarity
    { label: "ACI Models Deployed", value: 150000, suffix: "+" },
    { label: "Businesses Connected", value: 1250, suffix: "+" },
    { label: "CO2 Reduced (Tons)", value: 800, suffix: "+" }
  ];

  const aciModels = [
    {
      id: "physarum-optimizer",
      name: "Physarum Network Optimizer",
      description: "Optimizes complex networks by mimicking the adaptive pathfinding of slime mold.",
      icon: <PhysarumIcon className="w-12 h-12" />,
    },
    {
      id: "quorum-sensing-engine",
      name: "Quorum-Sensing Consensus Engine",
      description: "Achieves distributed consensus in multi-agent systems using bacterial communication principles.",
      icon: <QuorumIcon className="w-12 h-12" />,
    },
    {
      id: "immune-anomaly-detector",
      name: "Immune-Inspired Anomaly Detector",
      description: "Detects anomalies in data streams by simulating the adaptive immune response.",
      icon: <ImmuneIcon className="w-12 h-12" />,
    },
    {
      id: "neural-crest-planner",
      name: "Neural Crest Path Planner",
      description: "Guides autonomous agents through dynamic environments, inspired by neural crest cell migration.",
      icon: <NeuralCrestIcon className="w-12 h-12" />,
    },
    {
      id: "bio-electric-signal-processor",
      name: "Bio-Electric Signal Processor",
      description: "Processes and interprets complex biological signals for advanced diagnostics and control.",
      icon: <BioElectricSignalIcon className="w-12 h-12" />,
    },
    {
      id: "genetic-algorithm-optimizer",
      name: "Genetic Algorithm Optimizer",
      description: "Evolves optimal solutions for challenging problems using principles of natural selection.",
      icon: <GeneticAlgorithmIcon className="w-12 h-12" />,
    },
    {
      id: "swarm-intelligence-coordinator",
      name: "Swarm Intelligence Coordinator",
      description: "Coordinates large groups of autonomous agents to perform complex tasks efficiently.",
      icon: <SwarmIntelligenceIcon className="w-12 h-12" />,
    },
    {
      id: "mycelial-network-modeler",
      name: "Mycelial Network Modeler",
      description: "Models and analyzes information flow in decentralized networks, inspired by fungal mycelium.",
      icon: <MycelialNetworkIcon className="w-12 h-12" />,
    },
    {
      id: "bacterial-foraging-algorithm",
      name: "Bacterial Foraging Algorithm",
      description: "Optimizes solutions by simulating the nutrient foraging behavior of E. coli bacteria.",
      icon: <BacterialForagingIcon className="w-12 h-12" />,
    },
    {
      id: "ecological-niche-modeler",
      name: "Ecological Niche Modeler",
      description: "Identifies optimal operational conditions for systems by analogizing to ecological niches.",
      icon: <EcologicalNicheIcon className="w-12 h-12" />,
    },
  ];

  const symbioWaveDivisions: DivisionType[] = [
    {
      id: "symbio-core",
      name: "SymbioCore",
      tagline: "Central hub with pulsing API connections.",
      details: "The operational backbone of the SymbioWave ecosystem, facilitating seamless integration and communication between all divisions and external partners. Manages core API services and data flow."
    },
    {
      id: "symbio-labs",
      name: "SymbioLabs",
      tagline: "Research visualization with evolving algorithms.",
      details: "Dedicated to cutting-edge research and development in ACI. Explores new bio-inspired models, visualizes complex algorithmic interactions, and pushes the boundaries of AI."
    },
    {
      id: "symbio-xchange",
      name: "SymbioXchange",
      tagline: "Network of interconnected business nodes.",
      details: "A decentralized marketplace and collaboration platform where businesses can access ACI solutions, share data securely, and form synergistic partnerships."
    },
    {
      id: "symbio-automate",
      name: "SymbioAutomate",
      tagline: "Flowing automation workflows.",
      details: "Provides intelligent automation solutions powered by ACI, streamlining complex business processes, optimizing resource allocation, and enhancing operational efficiency."
    },
    {
      id: "symbio-edge",
      name: "SymbioEdge",
      tagline: "Edge devices with real-time data streams.",
      details: "Extends ACI capabilities to edge computing devices, enabling real-time data processing, localized decision-making, and rapid responses in dynamic environments."
    },
    {
      id: "symbio-impact",
      name: "SymbioImpact",
      tagline: "Sustainability metrics with growing green elements.",
      details: "Focuses on leveraging ACI to address global challenges, particularly in sustainability. Develops solutions for environmental monitoring, resource optimization, and climate change mitigation."
    },
    {
      id: "symbio-ventures",
      name: "SymbioVentures",
      tagline: "Investment flows and startup ecosystem.",
      details: "Nurtures innovation by investing in promising startups and research initiatives that align with the SymbioWave vision. Fosters a vibrant ecosystem of ACI-driven enterprises."
    },
    {
      id: "symbio-alliance",
      name: "SymbioAlliance",
      tagline: "Global partnership network.",
      details: "Manages strategic alliances and collaborations with academic institutions, industry leaders, and research organizations worldwide to accelerate the adoption and impact of ACI."
    }
  ];

  console.log('[SymbioWave] HomePage: All local constants defined, preparing to render JSX.');

  return (
    <> {/* Use a fragment to return multiple sections */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden animate-breathing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SymbioWaveLogo animated={true} className="mx-auto h-20 md:h-28 mb-8" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-neutral-lightest">
            Enter the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-secondary-light to-accent-gold">Cellular Intelligence</span> Realm
          </h1>
          <p className="mt-6 max-w-xl md:max-w-2xl mx-auto text-lg md:text-xl text-neutral-light/80">
            AI for a Symbiotic Future — Powered by Artificial Cellular Intelligence.
          </p>
          <div className="mt-10 mb-16"> {/* Added mb-16 for spacing before stats */}
            <Button href="/discover-aci" variant="primary" size="lg">
              Discover ACI Technology
            </Button>
          </div>

          {/* Stats Ticker Container */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {heroStats.map((stat, index) => ( // Used heroStats
              <div key={index} className="p-6 bg-neutral-dark/50 rounded-xl shadow-lg">
                <AnimatedCounter
                  targetValue={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl md:text-4xl font-bold text-accent-gold"
                />
                <p className="mt-2 text-sm md:text-base text-neutral-light/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACI Technology Showcase Section */}
      <motion.section
        id="aci-showcase"
        className="py-16 md:py-24 bg-neutral-dark/30" // Added a subtle background for contrast
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-12 text-neutral-lightest"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Revolutionizing AI with Cellular Intelligence
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of grid is visible
          > {/* Adjusted grid for up to 4 columns, and gap */}
            {aciModels.map((model) => (
              <ModelCard // ModelCard already has whileInView, this parent stagger will coordinate them
                key={model.id}
                id={model.id}
                name={model.name}
                description={model.description}
                icon={model.icon} // Pass the icon prop
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SymbioWave Ecosystem Section */}
      <motion.section
        id="ecosystem"
        className="py-16 md:py-24 bg-neutral-dark/50" // Slightly different background for variety
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-6 text-neutral-lightest"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            The SymbioWave Ecosystem
          </motion.h2>
          <motion.p
            className="text-center text-lg text-neutral-light/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Explore the interconnected divisions driving innovation and symbiotic growth. Each specialized unit contributes to a holistic, intelligent network.
          </motion.p>

          {/* Interactive Diagram */}
          <div className="my-8 md:my-12"> {/* Adjusted margin for the diagram container */}
            <EcosystemDiagram
              divisions={symbioWaveDivisions}
              onDivisionSelect={handleDivisionSelection}
            />
          </div>

          {/* Conditional Display for Division Details or All Cards */}
          <div className="mt-8 md:mt-12 min-h-[280px] md:min-h-[240px]"> {/* Adjusted min-h for layout consistency */}
            <AnimatePresence mode="wait">
              {activeDivisionDetails ? (
                <motion.div
                  key={activeDivisionDetails.id} // Important for AnimatePresence
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-2xl mx-auto p-4 bg-neutral-dark/50 rounded-lg shadow-xl"
                >
                  <DivisionCard
                    id={activeDivisionDetails.id}
                    name={activeDivisionDetails.name}
                    tagline={activeDivisionDetails.tagline}
                    details={activeDivisionDetails.details}
                    className="border border-secondary-medium/50 shadow-secondary-medium/20" // Enhanced styling for selected
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="all-divisions-grid" // Important for AnimatePresence
                  initial="hidden" // Use variants for consistency if preferred
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.07, duration: 0.3 } }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {symbioWaveDivisions.map((division) => (
                    <DivisionCard // DivisionCard already has whileInView, parent stagger enhances it
                      key={division.id}
                      id={division.id}
                      name={division.name}
                      tagline={division.tagline}
                      details={division.details}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* About & Team Section */}
      <motion.section
        id="about"
        className="py-16 md:py-24 bg-neutral-dark/40" // Slightly different background
        initial={{ opacity: 0, y: 50 }} // Base animation for the section itself
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }} // Trigger earlier for section
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-12 text-neutral-lightest"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            About SymbioWave & Our Team
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-center text-neutral-light/90 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            At SymbioWave, our mission is to unlock the next frontier of artificial intelligence by harnessing the principles of living systems. We are pioneering Artificial Cellular Intelligence (ACI) to create AI that is adaptive, emergent, and truly symbiotic with human endeavor and the natural world, fostering a future where technology and biology evolve in harmony.
          </motion.p>

          <motion.div
            className="my-12" // Added margin for spacing
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-heading text-primary-light mb-6 text-center">Our Genesis</h3>
            <p className="text-neutral-light/80 mb-6 max-w-2xl mx-auto text-center md:text-left">
              Born from a collective fascination with the intricate intelligence of biological ecosystems, SymbioWave was founded on the conviction that nature holds the blueprint for truly intelligent systems. We saw the limitations of traditional AI and envisioned a new paradigm: Artificial Cellular Intelligence. Our journey began with a small team of interdisciplinary scientists and engineers dedicated to translating the wisdom of cells, neural networks, and ecological webs into revolutionary AI models that can solve the world's most complex challenges with unprecedented efficiency and adaptability.
            </p>
          </motion.div>

          <motion.div
            className="my-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-heading text-primary-light mb-8 text-center">Meet Our Visionaries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Team Member 1 */}
              <motion.div
                className="bg-neutral-dark/50 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-accent-gold mb-2">Dr. Aris Thorne</h4>
                <p className="text-secondary-light/90 text-sm mb-2">Chief ACI Architect & Co-Founder</p>
                <p className="text-neutral-light/70 text-xs">
                  Aris is the visionary behind SymbioWave's core ACI frameworks, drawing inspiration from over two decades in computational biology and complex systems theory. He believes ACI will redefine problem-solving.
                </p>
              </motion.div>
              {/* Team Member 2 */}
              <motion.div
                className="bg-neutral-dark/50 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-accent-gold mb-2">Dr. Lena Hanson</h4>
                <p className="text-secondary-light/90 text-sm mb-2">Head of Bio-Inspired Algorithms</p>
                <p className="text-neutral-light/70 text-xs">
                  Lena leads the translation of biological phenomena into powerful ACI models. Her work in swarm intelligence and neural development is foundational to our adaptive learning systems.
                </p>
              </motion.div>
              {/* Team Member 3 */}
              <motion.div
                className="bg-neutral-dark/50 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-accent-gold mb-2">Jax Revon</h4>
                <p className="text-secondary-light/90 text-sm mb-2">Lead Ethics & Symbiotic Integration</p>
                <p className="text-neutral-light/70 text-xs">
                  Jax ensures SymbioWave's technologies are developed and deployed responsibly, focusing on creating a harmonious interface between ACI, human users, and societal values.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="my-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-heading text-primary-light mb-8 text-center">Our Guiding Principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { title: "Symbiotic Innovation", detail: "Fostering co-evolution between AI and natural systems." },
                { title: "Ethical Consciousness", detail: "Prioritizing responsible and beneficial AI deployment." },
                { title: "Biological Wisdom", detail: "Learning from life's adaptability and resilience." },
                { title: "Future Forward", detail: "Pioneering ACI to shape a sustainable and intelligent future." }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-neutral-dark/50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-accent-purple mb-1">{value.title}</h4>
                  <p className="text-neutral-light/70 text-xs">{value.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Deep Dive Section */}
      <motion.section
        id="technology"
        className="py-16 md:py-24 bg-primary-deep/10" // Slightly different background
        initial={{ opacity: 0, y: 50 }} // Section level animation
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Quicker for section itself
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-12 text-neutral-lightest"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Technology Deep Dive
          </motion.h2>

          {/* ACI vs Traditional AI */}
          <motion.div
            className="mb-12" // Spacing for the overall sub-section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-heading text-primary-light mb-4 text-center md:text-left">ACI: A Paradigm Shift from Traditional AI</h3>
            <p className="text-neutral-light/80 mb-6 md:text-lg text-center md:text-left max-w-3xl mx-auto md:mx-0">
              Artificial Cellular Intelligence transcends the limitations of conventional AI by mirroring the adaptive, decentralized, and emergent properties of biological systems. Where traditional AI often relies on vast, static datasets and predefined algorithms, ACI thrives on dynamic learning, self-organization, and resource efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Adaptive Learning", detail: "ACI models continuously evolve and adapt to new data and changing environments, much like living organisms, without requiring complete retraining." },
                { title: "Emergent Behavior", detail: "Complex problem-solving capabilities arise from the interaction of simpler ACI components, leading to novel and robust solutions." },
                { title: "Intrinsic Resource Efficiency", detail: "Inspired by nature's economy, ACI systems are designed for optimal performance with minimal computational overhead." }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-neutral-dark/50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-accent-gold mb-2">{item.title}</h4>
                  <p className="text-neutral-light/70 text-sm">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Architecture */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            
<h3 className="text-2xl font-heading text-primary-light mb-4 text-center md:text-left">The SymbioCore Architecture</h3>
            <p className="text-neutral-light/80 mb-6 md:text-lg text-center md:text-left max-w-3xl mx-auto md:mx-0">
              Our proprietary SymbioCore platform underpins all ACI models. It features a decentralized network of bio-emulators, known as 'CytoNodes,' which simulate cellular interactions and collective intelligence. A dynamic 'Mycelial Mesh' ensures resilient data flow and task distribution, allowing for scalable and fault-tolerant ACI deployments across diverse applications.
            </p>
            <motion.div
              className="h-64 bg-neutral-dark/50 flex items-center justify-center rounded-lg text-neutral-light/50 my-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>Conceptual Architecture Diagram - Visualization Coming Soon</p>
            </motion.div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
          <h3 className="text-2xl font-heading text-primary-light mb-4 text-center md:text-left">ACI: A Paradigm Shift from Traditional AI</h3>
          <p className="text-neutral-light/80 mb-6 md:text-lg text-center md:text-left max-w-3xl mx-auto md:mx-0">
            Artificial Cellular Intelligence transcends the limitations of conventional AI by mirroring the adaptive, decentralized, and emergent properties of biological systems. Where traditional AI often relies on vast, static datasets and predefined algorithms, ACI thrives on dynamic learning, self-organization, and resource efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Adaptive Learning", detail: "ACI models continuously evolve and adapt to new data and changing environments, much like living organisms, without requiring complete retraining." },
              { title: "Emergent Behavior", detail: "Complex problem-solving capabilities arise from the interaction of simpler ACI components, leading to novel and robust solutions." },
              { title: "Intrinsic Resource Efficiency", detail: "Inspired by nature's economy, ACI systems are designed for optimal performance with minimal computational overhead." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-neutral-dark/50 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-accent-gold mb-2">{item.title}</h4>
                <p className="text-neutral-light/70 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Architecture */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-heading text-primary-light mb-4 text-center md:text-left">The SymbioCore Architecture</h3>
          <p className="text-neutral-light/80 mb-6 md:text-lg text-center md:text-left max-w-3xl mx-auto md:mx-0">
            Our proprietary SymbioCore platform underpins all ACI models. It features a decentralized network of bio-emulators, known as 'CytoNodes,' which simulate cellular interactions and collective intelligence. A dynamic 'Mycelial Mesh' ensures resilient data flow and task distribution, allowing for scalable and fault-tolerant ACI deployments across diverse applications.
          </p>
          <motion.div
            className="h-64 bg-neutral-dark/50 flex items-center justify-center rounded-lg text-neutral-light/50 my-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>Conceptual Architecture Diagram - Visualization Coming Soon</p>
          </motion.div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-heading text-primary-light mb-4 text-center md:text-left">Measuring True Intelligence</h3>
          <p className="text-neutral-light/80 mb-6 md:text-lg text-center md:text-left max-w-3xl mx-auto md:mx-0">
            We evaluate ACI performance beyond standard benchmarks, focusing on metrics that capture true adaptive intelligence and real-world impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Adaptability Quotient (AQ)", detail: "Measures an ACI model's ability to maintain performance under novel or rapidly changing conditions." },
              { title: "Emergence Complexity Score (ECS)", detail: "Quantifies the richness of emergent behaviors and problem-solving strategies developed by the ACI system." },
              { title: "Symbiotic Efficiency Index (SEI)", detail: "Assesses the resource optimization and positive feedback achieved in human-ACI collaborative tasks." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-neutral-dark/50 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-accent-purple mb-2">{item.title}</h4>
                <p className="text-neutral-light/70 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Papers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-heading text-primary-light mb-6 mt-10 text-center md:text-left">Pioneering Research</h3>
          <p className="text-neutral-light/80 mb-6 md:text-lg text-center md:text-left max-w-3xl mx-auto md:mx-0">
            Our commitment to advancing ACI is reflected in our ongoing research and publications in leading scientific journals and conferences.
          </p>
          <div className="space-y-4">
            {[
              { title: "\"The Emergence of Collective Problem-Solving in Simulated Cellular Automata\"", detail: "Dr. Lena Hanson, Dr. Aris Thorne - Journal of Emergent AI Systems, Vol. 3, 2024" },
              { title: "\"PathNet: A Physarum-Inspired Algorithm for Dynamic Routing in Edge Networks\"", detail: "Dr. Aris Thorne, et al. - Proceedings of the International Conference on Bio-Inspired Computing, 2023" }
            ].map((paper, index) => (
              <motion.div
                key={paper.title}
                className="bg-neutral-dark/50 p-4 rounded-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-md font-semibold text-secondary-light">{paper.title}</h4>
                <p className="text-neutral-light/70 text-xs">{paper.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>

    {/* Contact Section */}
    <motion.section
      id="contact"
      className="py-16 md:py-24 bg-neutral-dark/60" // Slightly different background
      initial={{ opacity: 0, y: 50 }} // Section level animation
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-heading text-center mb-12 text-neutral-lightest"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Connect With Us
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center space-y-10"> {/* Increased space-y */}
          <motion.p
            className="text-lg text-center text-neutral-light/80 mb-10 max-w-2xl mx-auto" // Classes from Step 2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            We are eager to discuss how Artificial Cellular Intelligence can revolutionize your operations or to explore collaborative opportunities. Reach out to begin the conversation.
          </motion.p>
          <motion.div
            className="p-8 bg-neutral-medium/30 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-primary-light mb-3">Direct Lines & Digital Assistance</h3>
            <p className="text-neutral-light/70 text-sm mb-1">
              Connect with our team via email at <a href="mailto:connect@symbiowave.com" className="text-secondary-light hover:underline">connect@symbiowave.com</a> or call us at <a href="tel:+15557962460" className="text-secondary-light hover:underline">+1 (555) SYM-BIO0 (796-2460)</a>.
            </p>
            <p className="text-neutral-light/70 text-sm">
              Our AI-powered assistant (bottom-right) is also available 24/7 for initial queries and information routing. (Note: Chatbot is a future feature).
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-neutral-medium/30 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-primary-light mb-3">Request a Demo or Propose a Partnership</h3>
            <p className="text-neutral-light/70 text-sm mb-1">
              Interested in seeing ACI in action? Request a personalized demonstration tailored to your industry needs.
            </p>
            <p className="text-neutral-light/70 text-sm">
              Have a proposal for collaboration or wish to join our SymbioAlliance? We welcome innovative partnerships. Please use our inquiry forms (links below - forms are future features).
            </p>
            <div className="mt-4">
              <a href="#request-demo-form" className="text-secondary-light hover:underline mr-4 text-sm">Demo Request Form &rarr;</a>
              <a href="#partnership-form" className="text-secondary-light hover:underline text-sm">Partnership Inquiry Form &rarr;</a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Live Impact Dashboard Section */}
    <motion.section
      id="impact-dashboard"
      className="py-16 md:py-24 bg-neutral-dark/70"
      initial={{ opacity: 0, y: 50 }} // Section level animation
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-heading text-center mb-16 text-neutral-lightest"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        > {/* Increased mb for heading */}
          Live Impact Dashboard
        </motion.h2>

        {/* Animated Metrics/Counters */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        > {/* Increased mb for metrics section */}
          {[
            { label: "Global Businesses Connected", value: 1250, suffix: "+" },
            { label: "Resources Optimized (USD)", value: 570, prefix: "$", suffix: "M+" }, // Example value
            { label: "CO2 Emissions Reduced (Tons)", value: 800, suffix: "K+" }, // Example value
            { label: "Active ACI Models Deployed", value: 150000, suffix: "+" }
          ].map((impactStat, index) => (
            <motion.div // Each stat card animates in
              key={index}
              className="p-6 bg-neutral-medium/40 rounded-xl shadow-lg text-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              // transition is handled by parent's staggerChildren
            >
              <AnimatedCounter
                targetValue={impactStat.value}
                prefix={impactStat.prefix || ""}
                suffix={impactStat.suffix || ""}
                className="text-4xl md:text-5xl font-bold text-accent-purple" // Different color for impact stats
                duration={2.5 + index * 0.3} // Slightly varied duration
              />
              <p className="mt-3 text-sm md:text-base text-neutral-light/70">{impactStat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* World Map Placeholder */}
        <div>
          <motion.h3
            className="text-2xl font-heading text-center my-8 text-neutral-lightest"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Global ACI Deployments
          </motion.h3>
          <motion.div
            className="h-72 md:h-96 bg-neutral-medium/20 flex items-center justify-center rounded-lg border border-dashed border-neutral-light/30 text-neutral-light/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg">Global Deployment Map Visualization - Coming Soon</p>
          </motion.div>
        </div>

        {/* Success Story Placeholders */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl font-heading text-center my-8 text-neutral-lightest"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Success Stories
          </motion.h3>
          {/* The individual cards already have whileInView, a parent stagger can be added if needed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { id: "aeroglide", company: "AeroGlide Logistics", quote: "SymbioWave's Physarum Network Optimizer dynamically rerouted our global supply chain, cutting fuel costs by 18% and delivery times by 22%. It's like our logistics network came alive!", link: "#aeroglide-story" },
                { id: "voltagrid", company: "VoltaGrid Energy", quote: "Using the Immune-Inspired Anomaly Detector, we've preempted critical grid failures with 99.7% accuracy, ensuring stable power for millions and saving millions in potential downtime.", link: "#voltagrid-story" },
                { id: "agrisynth", company: "AgriSynth BioPharma", quote: "The Ecological Niche Modeler helped us identify optimal conditions for new therapeutic crop cultivation, boosting yields by 30% and accelerating our research into novel plant-based medicines.", link: "#agrisynth-story" }
            ].map((story, index) => (
              <motion.div
                key={story.id}
                className="bg-neutral-medium/40 p-6 rounded-lg shadow-md hover:shadow-primary-light/20 transition-shadow duration-300 flex flex-col justify-between" // Added flex for content alignment
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Adjusted delay
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <h4 className="text-xl font-semibold text-accent-gold mb-2">{story.company}</h4>
                  <p className="text-neutral-light/80 italic mt-2 text-sm mb-4">"{story.quote}"</p>
                </div>
                <a href={story.link} className="text-primary-light hover:underline mt-auto inline-block text-xs font-semibold self-start"> {/* mt-auto to push to bottom, self-start for alignment */}
                  Read Full Case Study &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
