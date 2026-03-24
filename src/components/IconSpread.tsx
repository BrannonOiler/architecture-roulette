import { backendEcosystems, frontendEcosystems, universalOptions } from '@/data';
import { useMemo } from 'react';

const getAllIcons = (): [string, string][] => {
  const icons: [string, string][] = [];

  // Add frontend ecosystem icons
  frontendEcosystems.forEach((eco) => {
    icons.push([eco.icon, eco.name]);
    eco.metaFrameworks.forEach((meta) => icons.push([meta.icon, meta.name]));
    eco.stateManagement.forEach((state) => icons.push([state.icon, state.name]));
    eco.styling.forEach((style) => icons.push([style.icon, style.name]));
    eco.testing.forEach((test) => icons.push([test.icon, test.name]));
  });

  // Add backend ecosystem icons
  backendEcosystems.forEach((eco) => {
    icons.push([eco.icon, eco.name]);
    eco.frameworks.forEach((fw) => icons.push([fw.icon, fw.name]));
    eco.orms.forEach((orm) => icons.push([orm.icon, orm.name]));
    eco.testing.forEach((test) => icons.push([test.icon, test.name]));
  });

  // Add universal option icons
  universalOptions.auth.forEach((auth) => icons.push([auth.icon, auth.name]));
  universalOptions.databases.forEach((db) => icons.push([db.icon, db.name]));
  universalOptions.hosting.forEach((host) => icons.push([host.icon, host.name]));
  universalOptions.storage.forEach((storage) => icons.push([storage.icon, storage.name]));

  return icons.sort((a, b) => a[1].localeCompare(b[1]));
};

export function IconSpread() {
  const icons = useMemo(() => getAllIcons(), []);

  return (
    <div className="icon-spread flex flex-wrap gap-2 p-2">
      {icons.map(([icon, name], i) => (
        <div className="flex flex-col items-center gap-1 border-2" key={i}>
          <img key={i} src={icon} alt={name} className="size-6" />
          <p className="text-center text-sm">{name}</p>
        </div>
      ))}
    </div>
  );
}
