import type { Metadata } from 'next';
import { Inter, Poppins, Source_Code_Pro } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/layout/Header'; // Simplified path
import Footer from '@/components/layout/Footer'; // Simplified path
// import { cn } from '@/lib/utils'; // You'll need to create utils.ts

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '900'], variable: '--font-poppins', display: 'swap' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-source-code-pro', display: 'swap' });

export const metadata: Metadata = {
  title: 'SymbioWave - ACI',
  description: 'Pioneering Artificial Cellular Intelligence.',
  icons: { icon: '/symbiowave-favicon.svg' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${sourceCodePro.variable} bg-organic-gradient text-neutral-light antialiased`}>
        <Header />
        <main className="overflow-hidden pt-20"> {/* Added pt-20 for fixed header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
