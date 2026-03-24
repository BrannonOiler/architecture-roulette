import { backendEcosystems, frontendEcosystems, universalOptions } from '@/data';
import type { FullStackConfig } from '@/types';
import { pickRandom } from './pickRandom';

export function getRandomStack(): FullStackConfig {
  // Pick frontend ecosystem first - this constrains meta-framework, state, and styling
  const frontend = pickRandom(frontendEcosystems);
  const metaFramework = pickRandom(frontend.metaFrameworks);
  const stateManagement = pickRandom(frontend.stateManagement);
  const styling = pickRandom(frontend.styling);
  const frontendTesting = pickRandom(frontend.testing);

  // Pick backend ecosystem - this constrains framework, ORM, and testing
  const backend = pickRandom(backendEcosystems);
  const backendFramework = pickRandom(backend.frameworks);
  const orm = pickRandom(backend.orms);
  const backendTesting = pickRandom(backend.testing);

  // Universal options
  const database = pickRandom(universalOptions.databases);
  const auth = pickRandom(universalOptions.auth);
  const hosting = pickRandom(universalOptions.hosting);
  const storage = pickRandom(universalOptions.storage);

  return {
    frontend,
    metaFramework,
    stateManagement,
    styling,
    frontendTesting,
    backend,
    backendFramework,
    orm,
    backendTesting,
    database,
    auth,
    hosting,
    storage,
  };
}
