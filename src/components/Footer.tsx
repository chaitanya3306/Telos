import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#1C1917] text-stone-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          <div className="md:col-span-2 space-y-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              TELOS
            </span>
            <p className="text-xs text-stone-400 font-serif leading-relaxed max-w-md">
              A philosophical observatory and conceptual cartography dedicated to the rigorous exploration of teleology, consciousness, and the four foundational responses to the human condition.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-3">
              Traditions
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>Existentialism (Sartre, Beauvoir, Camus)</li>
              <li>Theism (Aquinas, Kierkegaard, Rumi)</li>
              <li>Nihilism (Nietzsche, Cioran, Brassier)</li>
              <li>Humanism (Russell, Dewey, Sagan)</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-3">
              Foundational Text
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400 font-serif italic">
              <li>Being and Nothingness (1943)</li>
              <li>Summa Theologiae (1274)</li>
              <li>Thus Spoke Zarathustra (1883)</li>
              <li>The Conquest of Happiness (1930)</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            <span>© 2026 Telos Philosophical Cartography</span>
            <span className="mx-2">·</span>
            <span>All inquiries open to contemplation</span>
          </div>
          <div>
            <span>Curated with intellectual rigor & historical fidelity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
