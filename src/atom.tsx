import { atom, selector } from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export enum Categories {
  'To_Do' = 'To_Do', //string을 빼면 0부터 시작하는 인덱스값이 된다.
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.To_Do,
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',

  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});

export const deleteSelector = selector({
  key: 'deleteSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);

    return toDos.splice(0);
  },
});

// export const deleteToDo = atom({
//   key: 'delete',
//   default: '',
// });
