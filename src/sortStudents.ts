
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];
  let direction: number;

  if (order === 'asc') {
    direction = 1;
  } else {
    direction = -1;
  }

  switch (sortBy) {
    case SortType.Name:
      copy.sort((a, b) => {
        return a.name.localeCompare(b.name) * direction;
      });
      break;

    case SortType.Surname:
      copy.sort((a, b) => {
        return a.surname.localeCompare(b.surname) * direction;
      });
      break;

    case SortType.Age:
      copy.sort((a, b) => {
        return (a.age - b.age) * direction;
      });
      break;

    case SortType.Married:
      copy.sort((a, b) => {
        return (Number(a.married) - Number(b.married)) * direction;
      });
      break;

    case SortType.AverageGrade:
      copy.sort((a, b) => {
        const averageA
          = a.grades.reduce((suma, ocena) => suma + ocena, 0) / a.grades.length;
        const averageB
          = b.grades.reduce((suma, ocena) => suma + ocena, 0) / b.grades.length;

        return (averageA - averageB) * direction;
      });

      break;

    default:
      break;
  }

  return copy;
}
