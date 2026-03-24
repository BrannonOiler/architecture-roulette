import type { FullStackConfig } from '@/types';

//? Uppercase the letters that would exist in something like a "MERN" or "LAMP" stack initialism, lowercase the rest.
export function toInitialism(stack: FullStackConfig): string {
  //# "R" - the frontend ecosystem
  const frontendAbbr = stack.frontend.id[0].toUpperCase();
  const metaFrameworkAbbr = stack.metaFramework.id[0].toLowerCase();
  const stateAbbr = stack.stateManagement.id[0].toLowerCase();
  const stylingAbbr = stack.styling.id[0].toLowerCase();
  const frontendTestingAbbr = stack.frontendTesting.id[0].toLowerCase();

  //# "E" - the backend ecosystem
  const backendAbbr = stack.backend.id[0].toUpperCase();
  const backendFrameworkAbbr = stack.backendFramework.id[0].toLowerCase();
  const authAbbr = stack.auth.id[0].toLowerCase();
  const ormAbbr = stack.orm.id[0].toLowerCase();
  const backendTestingAbbr = stack.backendTesting.id[0].toLowerCase();

  //# "N" - the hosting or runtime environment
  const hostingAbbr = stack.hosting.id[0].toUpperCase();

  //# "M" - the database
  const databaseAbbr = stack.database.id[0].toUpperCase();
  const storageAbbr = stack.storage.id[0].toLowerCase();

  return [
    frontendAbbr,
    metaFrameworkAbbr,
    stateAbbr,
    stylingAbbr,
    frontendTestingAbbr,
    backendAbbr,
    backendFrameworkAbbr,
    authAbbr,
    ormAbbr,
    backendTestingAbbr,
    hostingAbbr,
    databaseAbbr,
    storageAbbr,
  ].join('');
}
