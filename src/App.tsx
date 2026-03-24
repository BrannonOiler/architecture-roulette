import clsx from 'clsx';
import { useMemo, useState } from 'react';

import { StackItem } from '@/components';
import { TECH_STACK_CATEGORIES } from '@/data';
import type { FullStackConfig, TechOption, TechStackCategory } from '@/types';
import { getRandomStack, toInitialism } from '@/utils';

function App() {
  const [fullStackConfig, setFullStackConfig] = useState<FullStackConfig | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [openItems, setOpenItems] = useState<Set<TechStackCategory>>(new Set());

  const stackInitialism = useMemo(
    () => (fullStackConfig ? toInitialism(fullStackConfig) : ''),
    [fullStackConfig]
  );

  const handleGenerate = () => {
    setIsGenerating(true);
    setOpenItems(new Set());

    setTimeout(() => {
      setFullStackConfig(getRandomStack());
      setIsGenerating(false);
    }, 750);
  };

  const toggleItem = (key: TechStackCategory) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);

      return next;
    });
  };

  const toggleAll = () => {
    if (!fullStackConfig) return;

    if (openItems.size === TECH_STACK_CATEGORIES.length) setOpenItems(new Set());
    else setOpenItems(new Set(TECH_STACK_CATEGORIES));
  };

  const stackItems: { key: TechStackCategory; label: string; tech: TechOption }[] = useMemo(
    () =>
      fullStackConfig
        ? [
            { key: 'frontend', label: 'Frontend', tech: fullStackConfig.frontend },
            { key: 'metaFramework', label: 'Meta Framework', tech: fullStackConfig.metaFramework },
            {
              key: 'stateManagement',
              label: 'State Management',
              tech: fullStackConfig.stateManagement,
            },
            { key: 'styling', label: 'Styling', tech: fullStackConfig.styling },
            {
              key: 'frontendTesting',
              label: 'Frontend Testing',
              tech: fullStackConfig.frontendTesting,
            },
            { key: 'backend', label: 'Backend', tech: fullStackConfig.backend },
            {
              key: 'backendFramework',
              label: 'Backend Framework',
              tech: fullStackConfig.backendFramework,
            },
            { key: 'auth', label: 'Auth', tech: fullStackConfig.auth },
            { key: 'orm', label: 'ORM', tech: fullStackConfig.orm },
            {
              key: 'backendTesting',
              label: 'Backend Testing',
              tech: fullStackConfig.backendTesting,
            },
            { key: 'hosting', label: 'Hosting', tech: fullStackConfig.hosting },
            { key: 'database', label: 'Database', tech: fullStackConfig.database },
            { key: 'storage', label: 'Storage', tech: fullStackConfig.storage },
          ]
        : [],
    [fullStackConfig]
  );

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-(--color-bg)">
      {/* Header */}
      <header className="border-b border-black bg-(--color-gray-lighter) shadow-sm">
        <div className="mx-auto flex items-center gap-4 px-4 py-2">
          <span className="text-sm font-bold text-black">Architecture Roulette</span>
        </div>
      </header>

      {/* [DEV] - Icon Spread for Testing */}
      {/* <IconSpread /> */}

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center bg-(--color-bg) px-6 py-12">
        <div className="w-full max-w-2xl">
          {fullStackConfig && !isGenerating && (
            <div className="mac-window mb-8 rounded bg-(--color-gray)">
              {/* Mac OS Title Bar with stripes */}
              <div className="mac-title-bar flex items-center justify-between rounded-t border-b border-(--color-gray-dark) px-2 py-1">
                {/* Close box */}
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-black">
                    {"Let's build an app with the "}
                    {stackInitialism.split('').map((char, i) => (
                      <span
                        key={i}
                        className={clsx(
                          'text-(--color-initialism)',
                          char === char.toLowerCase() && 'align-baseline text-[0.50em]'
                        )}
                      >
                        {char.toUpperCase()}
                      </span>
                    ))}
                    {' stack!'}
                  </h2>
                </div>
                <button onClick={toggleAll} className="mac-button text-xs">
                  {openItems.size === stackItems.length ? 'Collapse all' : 'Expand all'}
                </button>
              </div>

              {/* Stack items */}
              <div className="grid gap-4 p-4">
                {[
                  { label: 'FRONTEND', range: [0, 5] },
                  { label: 'BACKEND', range: [5, 10] },
                  { label: 'HOSTING', range: [10, 11] },
                  { label: 'DATABASE / STORAGE', range: [11, stackItems.length] },
                ].map(({ label, range }) => (
                  <fieldset key={label} className="border border-(--color-gray-light) p-2">
                    <legend className="px-2 text-xs text-(--color-gray-darker) uppercase">
                      {label}
                    </legend>
                    <div className="flex flex-col gap-1">
                      {stackItems.slice(...range).map(({ key, label, tech }) => (
                        <StackItem
                          key={key}
                          label={label}
                          tech={tech}
                          isOpen={openItems.has(key)}
                          onToggle={() => toggleItem(key)}
                        />
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>
            </div>
          )}

          {/* Initial view before {fullStackConfig} is generated */}
          {!fullStackConfig && !isGenerating && (
            <div className="mac-window mb-8 rounded bg-(--color-gray)">
              <div className="mac-title-bar flex items-center gap-2 rounded-t border-b border-(--color-gray-dark) px-2 py-1">
                <span className="text-sm font-bold text-black">Architecture Roulette</span>
              </div>
              <div className="p-6 text-center">
                <p className="text-base font-bold text-black">
                  Tired of having to choose a tech stack?
                </p>
                <p className="mt-2 text-sm text-(--color-gray-darker)">
                  Click the button below to generate a random tech stack!
                </p>
              </div>
            </div>
          )}

          {/* Loading view while generating new {fullStackConfig} */}
          {isGenerating && (
            <div className="mac-window mb-8 rounded bg-(--color-gray)">
              <div className="mac-title-bar flex items-center gap-2 rounded-t border-b border-(--color-gray-dark) px-2 py-1">
                <span className="text-sm font-bold text-black">Please Wait...</span>
              </div>
              <div className="p-6 text-center">
                <p className="text-base font-bold text-black">Generating tech stack...</p>
              </div>
            </div>
          )}

          {/* Generate button */}
          <div className="flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="mac-button px-8 py-2 text-sm disabled:cursor-not-allowed disabled:text-(--color-gray-dark)"
            >
              <span className="flex items-center gap-2">
                {isGenerating ? 'Generating...' : fullStackConfig ? 'Spin Again' : 'Generate Stack'}
              </span>
            </button>
          </div>

          {/* Disclaimer */}
          {fullStackConfig && !isGenerating && (
            <div className="mt-12">
              <p className="text-center text-xs text-(--color-gray-darkest)">
                <em>
                  Disclaimer: this is a randomly-generated tech stack. Therefore, components of the
                  stack may not be fully compatible with each other. Please use this as a fun
                  exercise to explore new technologies and combinations you might not have
                  considered before!
                </em>
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
