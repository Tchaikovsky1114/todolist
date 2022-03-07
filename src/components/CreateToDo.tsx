import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atom';

export interface IForm {
  toDo: string;
}
const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { handleSubmit, register, setError, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), category, text: toDo }, ...prev]);
    setValue('toDo', '');
  };
  return (
    <div>
      <h1>ToDoList</h1>
      <hr />
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(handleValid)}
      >
        <input
          {...register('toDo', {
            required: 'toDo is required',
          })}
          type="text"
          placeholder="Write a to do"
        />

        <button>ADD</button>
      </form>
    </div>
  );
};

export default CreateToDo;
