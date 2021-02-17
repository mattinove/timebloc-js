import { 
  BlocType, 
  getTimeBlocs, 
  getCurrentBloc, 
} from "./utils";


// GET ALL
export const getBimesters = (year?: number) => { 
  return getTimeBlocs(year, BlocType.bimester);
}
export const getTrimesters = (year?: number) => {
  return getTimeBlocs(year, BlocType.trimester); 
}
export const getQuarters = (year?: number) => { 
  return getTimeBlocs(year, BlocType.quarter);
}
export const getSemester = (year?: number) => { 
  return getTimeBlocs(year, BlocType.semester);
}

// GET CURRENT
export const getCurrentBimester = () => {
  return getCurrentBloc(BlocType.bimester);
}
export const getCurrentTrimester = () => {
  return getCurrentBloc(BlocType.trimester);
}
export const getCurrentQuarter = () => {
  return getCurrentBloc(BlocType.quarter);
}
export const getCurrentSemester = () => {
  return getCurrentBloc(BlocType.semester);
}