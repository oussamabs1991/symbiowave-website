export default function Footer() {
  return (
    <footer className="bg-primary-deep/50 border-t border-primary-medium/30 py-8 text-center">
      <p className="text-sm text-neutral-light/70">
        © {new Date().getFullYear()} SymbioWave Technologies Inc. All rights reserved.
      </p>
      <p className="text-xs text-neutral-light/50 mt-1">
        Conceptual Website Foundation
      </p>
    </footer>
  );
}
