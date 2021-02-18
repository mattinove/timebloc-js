export enum BlocType {
  bimester,
  trimester,
  quarter,
  semester,
}
export interface Timebloc {
  index: number;
  utcStart: Date;
  utcEnd: Date;
  isCurrent: boolean;
}
export const range = (start: number, end: number, length = end - start) => {
  return Array.from({ length }, (_, i) => start + i);
};
export const getBlocIndex = (blocType: BlocType) => {
  switch (blocType) {
    case BlocType.bimester:
      return 1;
    case BlocType.trimester:
      return 2;
    case BlocType.quarter:
      return 3;
    case BlocType.semester:
      return 5;
    default:
      return 2;
  }
};
export const getTimeBlocs = (year: number, blocType: BlocType) => {
  const timeBlocs: Timebloc[] = [];
  const typeIndex: number = getBlocIndex(blocType);
  let nextIndex: number = 0;
  let bloc: number = 1;

  range(0, 11).forEach((month) => {
    if (month === nextIndex) {
      const utcStart = new Date(Date.UTC(year, month, 1));
      const utcEnd = new Date(Date.UTC(year, month + (typeIndex + 1), 0, 23, 59, 59, 999));
      const index = bloc;

      const current = new Date();
      const isCurrent = current.getTime() > utcStart.getTime() && current.getTime() < utcEnd.getTime();

      timeBlocs.push({
        index,
        utcStart: utcStart,
        utcEnd: utcEnd,
        isCurrent,
      });
      nextIndex += typeIndex + 1;
      bloc += 1;
    }
  });
  return timeBlocs;
};

export const getCurrentBloc = (year: number, blocType: BlocType) => {
  const blocs = getTimeBlocs(year, blocType);
  const currentBlocs = getTimeBlocs(new Date().getFullYear(), blocType);
  const current = currentBlocs.find(b => b.isCurrent);
  const result = (current) ? blocs.find(b => b.index === current.index) : undefined;
  return result;
};
