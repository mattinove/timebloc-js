import { BlocType, getTimeBlocs, getCurrentBloc, Timebloc } from './utils';

// -- YEAR'S TIMEBLOCS 

/**
 * Get the list of bimester for the specified year or date. If no date is provided returns the bimesters of current year.
 * @param ref A date or a number that represent the time reference.
 */
export function getBimesters(ref?: number | Date): Timebloc[] {
  const year: number = (ref) ? (typeof (ref) === 'number') ? ref : ref.getFullYear() : new Date().getFullYear();
  return getTimeBlocs(year, BlocType.bimester);
}

/**
 * Get the list of trimesters for the specified year or date. If no date is provided returns the trimesters of current year.
 * @param ref A date or a number that represent the time reference.
 */
export function getTrimesters(ref?: number | Date): Timebloc[] {
  const year: number = (ref) ? (typeof (ref) === 'number') ? ref : ref.getFullYear() : new Date().getFullYear();
  return getTimeBlocs(year, BlocType.trimester);
}

/**
 * Get the list of quarters for the specified year or date. If no date is provided returns the quarters of current year.
 * @param ref A date or a number that represent the time reference.
 */
export function getQuarters(ref?: number | Date): Timebloc[] {
  const year: number = (ref) ? (typeof (ref) === 'number') ? ref : ref.getFullYear() : new Date().getFullYear();
  return getTimeBlocs(year, BlocType.quarter);
}

/**
 * Get the list of semesters for the specified year or date. If no date is provided returns the semesters of current year.
 * @param ref A date or a number that represent the time reference.
 */
export function getSemesters(ref?: number | Date): Timebloc[] {
  const year: number = (ref) ? (typeof (ref) === 'number') ? ref : ref.getFullYear() : new Date().getFullYear();
  return getTimeBlocs(year, BlocType.semester);
}

// -- CURRENT TIMEBLOC

/**
 * Returns the current bimester
 */
export function getCurrentBimester(): Timebloc | undefined {
  const year: number = new Date().getFullYear();
  return getCurrentBloc(year, BlocType.bimester);
};

/**
 * Returns the current trimester
 */
export function getCurrentTrimester(): Timebloc | undefined {
  const year: number = new Date().getFullYear();
  return getCurrentBloc(year, BlocType.trimester);
};

/**
 * Returns the current quarter
 */
export function getCurrentQuarter(): Timebloc | undefined {
  const year: number = new Date().getFullYear();
  return getCurrentBloc(year, BlocType.quarter);
};

/**
 * Returns the current semester
 */
export function getCurrentSemester(): Timebloc | undefined {
  const year: number = new Date().getFullYear();
  return getCurrentBloc(year, BlocType.semester);
};


// -- SPECIFIC TIMEBLOC

/**
 * Returns a specific bimester that refers to a year or a date if a correct index is specified, undefined otherwise. If no ref is specified returns a specific bimester of current year.
 * @param index A number between 1 and 6 that specifies one bimester.
 * @param ref A date object or a number that represents the year.
 */
export function getBimester(index: number, ref?: number | Date): Timebloc | undefined {
  const year: number = (ref) ? (typeof ref === 'number') ? ref : ref.getFullYear() : new Date().getFullYear();
  return getBimesters(year).find(b => b.index === index);
};

/**
 * Returns a specific trimester that refers to a year or a date if a correct index is specified, undefined otherwise. If no ref is specified returns a specific trimester of current year.
 * @param index A number between 1 and 4 that specifies one trimester.
 * @param ref A date object or a number that represents the year.
 */
export function getTrimester(index: number, ref?: number | Date): Timebloc | undefined {
  const year: number = (ref) ? (typeof ref === 'number') ? ref : ref.getFullYear() : new Date().getFullYear();
  return getTrimesters(year).find(b => b.index === index);
};

/**
 * Returns a specific quarter that refers to a year or a date if a correct index is specified, undefined otherwise. If no ref is specified returns a specific quarter of current year.
 * @param index A number between 1 and 3 that specifies one quarter. 
 * @param ref A date object or a number that represents the year.
 */
export function getQuarter(index: number, ref?: number | Date): Timebloc | undefined {
  const year: number = (ref) ? (typeof ref === 'number') ? ref : ref.getFullYear() : new Date().getFullYear();
  return getQuarters(year).find(b => b.index === index);
};

/**
 * Returns a specific semester that refers to a year or a date if a correct index is specified, undefined otherwise. If no ref is specified returns a specific semester of current year.
 * @param index A number between 1 and 2 that specifies one semester.
 * @param ref A date object or a number that represents the year.
 */
export function getSemester(index: number, ref?: number | Date): Timebloc | undefined {
  const year: number = (ref) ? (typeof ref === 'number') ? ref : ref.getFullYear() : new Date().getFullYear();
  return getSemesters(year).find(b => b.index === index);
};