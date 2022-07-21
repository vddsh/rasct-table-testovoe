export interface IStudentTests {
  label: string;
  score?: number;
  speed: string;
  total: number;
  expSpeed: string;
  concept: string;
  date: string;
  absent: boolean;
}

export interface IStudent {
  name: string;
  id: number;
  class: string;
  score: string;
  speed: string;
  parents: string[];
  tests: IStudentTests[];
}

export interface ServerResponse<T> {
  totalPages: number;
  data: T[];
  totalCount: number;
}

export interface DropDownTableProps {
  index: number;
  data: IStudentTests;
}

export interface GenerateTableDataProps {
  index: number;
  student: IStudent;
}

export interface SearchPropsTypes {
  setSearch: any;
  data?: ServerResponse<IStudent>;
}
