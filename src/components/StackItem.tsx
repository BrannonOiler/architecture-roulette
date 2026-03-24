import type { TechOption } from '@/types';
import clsx from 'clsx';
import { ExternalLinkSVG } from './ExternalLinkSVG';

interface StackItemProps {
  label: string;
  tech: TechOption;
  isOpen: boolean;
  onToggle: () => void;
}

export function StackItem({ label, tech, isOpen, onToggle }: StackItemProps) {
  return (
    <div className="rounded border border-(--color-gray-dark) bg-(--color-gray)">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between px-3 py-2 text-left"
      >
        <span className="text-sm font-bold text-black">{label}</span>
        <div className="flex items-center gap-2">
          <img src={tech.icon} alt="" className="h-5 w-5" />
          <span className="font-bold text-black">{tech.name}</span>
          <span className={clsx('scale-y-50 text-xs text-(--color-gray-darker)')}>
            {isOpen ? '▲' : '▼'}
          </span>
        </div>
      </button>

      {/* Accordion content */}
      <div
        className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-(--color-gray-dark) bg-(--color-gray-lighter) px-3 py-2">
            <p className="mb-2 text-sm text-black">{tech.description}</p>
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-(--color-link) underline hover:text-(--color-link-hover)"
            >
              Learn more
              <ExternalLinkSVG />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
