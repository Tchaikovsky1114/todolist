import React from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { toDoSelector, categoryState, Categories } from '../atom';
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
      {/* nomad say it is way to sucks. it is not the best way, we have to use Recoil */}
      {/* {category === 'To_Do' && <li>hi i am todo</li>}
      {category === 'Doing' && <li>"hi i am doing"</li>}
      {category === 'Done' && <li>"hi i am done"</li>} */}
      <CreateToDo />
      <h1
        style={{
          color: 'white',
          textAlign: 'left',
          display: 'block',
          marginTop: '50px',
          padding: '3px',
          width: '50%',
          borderRadius: '5px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          marginLeft: '0.225rem',
        }}
      >
        Workstate
      </h1>
      <hr />
      <select
        style={{
          margin: '10px 0px',
          boxShadow: '2px 2px 5px',
          width: '100px',
          borderRadius: '20px',
        }}
        value={category}
        onInput={onInput}
      >
        <option value={Categories.To_Do}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}

      <div></div>
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
