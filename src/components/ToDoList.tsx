import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  toDoState,
  IToDo,
  toDoSelector,
  categoryState,
  Categories,
} from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

export interface IForm {
  toDo: string;
}
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };

  return (
    <div>
      <select value={category} onInput={onInput}>
        <option value={Categories.To_Do}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>

      {/* nomad say it is way to sucks. it is not the best way, we have to use Recoil */}
      {/* {category === 'To_Do' && <li>hi i am todo</li>}
      {category === 'Doing' && <li>"hi i am doing"</li>}
      {category === 'Done' && <li>"hi i am done"</li>} */}
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;

// const ToDoList = () => {
//   const [inputVal, setInputVal] = useState('');
//   const [inputError, setInputError] = useState('');

//   const changeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setInputVal(value);
//   };
//   const submitFormValue = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(inputVal);
//     if (inputVal.length < 10) {
//       return setInputError('too short');
//     } else {
//       return setInputError('');
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={submitFormValue}>
//         <input
//           value={inputVal}
//           onChange={changeInputValue}
//           type="text"
//           placeholder="Write a to do"
//         />
//         <button>ADD</button>
//         {inputError ? inputError : null}
//       </form>
//     </div>
//   );
// };

// export default ToDoList;
