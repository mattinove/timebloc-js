import { BlocType, Timebloc, getCurrentBloc, getTimeBlocs } from '../utils';
import { getBimesters, getTrimesters, getQuarters, getSemester } from '../index';

describe('getBlocs', () => {
  test('getBimesters', () => {
    const year = 2022;
    const bimesters = getBimesters();
    const otherBimesters = getBimesters(year);

    // standard checks
    expect(bimesters).toBeInstanceOf(Array);
    expect(bimesters.length).toBe(6);

    expect(otherBimesters).toBeInstanceOf(Array);
    expect(otherBimesters.length).toBe(6);
  });

  test('getTrimesters', () => {
    const year = 2020;
    const trimesters = getTrimesters();
    const otherTrimesters = getTrimesters(year);

    // standard checks
    expect(trimesters).toBeInstanceOf(Array);
    expect(trimesters.length).toBe(4);

    expect(otherTrimesters).toBeInstanceOf(Array);
    expect(otherTrimesters.length).toBe(4);
  });

  test('getQuarters', () => {
    const year = 2018;
    const otherQuarters = getQuarters(year);
    const quarters = getQuarters();

    // standard checks
    expect(quarters).toBeInstanceOf(Array);
    expect(quarters.length).toBe(3);

    expect(otherQuarters).toBeInstanceOf(Array);
    expect(otherQuarters.length).toBe(3);
  });

  test('getSemester', () => {
    const year = 2019;
    const otherSemester = getSemester(year);
    const semester = getSemester();

    // standard checks
    expect(semester).toBeInstanceOf(Array);
    expect(semester.length).toBe(2);

    expect(otherSemester).toBeInstanceOf(Array);
    expect(otherSemester.length).toBe(2);
  });
});
