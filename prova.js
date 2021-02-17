const range = (start, end, length = end - start) => Array.from({ length }, (_, i) => start + i);

const getTimeBlocs = (year, blocType) => {
  let timeBlocs = [];
  let typeIndex = (blocType === 'bimester') ? 1 : (blocType === 'trimester') ? 2 : (blocType === 'quarter') ? 3 : (blocType === 'semester') ? 5 : 2; // default is trimester
  const _year = (year) ? year : new Date().getFullYear();

  let nextIndex = 0;
  let bloc = 1;
  range(0,11).forEach(month => {
    if (month === nextIndex) {
      const start = new Date(Date.UTC(_year, month, 1));
      const end = new Date(Date.UTC(_year, month + (typeIndex + 1), 0, 23, 59, 59, 99));
      const index = bloc;
      
      const current = new Date();
      const isCurrent = (current.getTime() > start.getTime() && current.getTime() < end.getTime());

      timeBlocs.push({ index, start, end, isCurrent });
      nextIndex += typeIndex + 1;
      bloc += 1;
    }
  });

  return timeBlocs;
}

const getCurrentBloc = (blocType) => {
  const blocs = getTimeBlocs(null, blocType);
  return blocs.find(b => b.isCurrent) || -1;
}

console.log("\n*****\n");
const timeBlocs = getTimeBlocs(2019, 'semester');

console.log(getTimeBlocs(2020, 'trimester'));
console.log(getCurrentBloc());

console.log("\n*****\n");
