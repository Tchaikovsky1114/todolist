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
      <h1 style={{ fontSize: '2rem' }}>ToDoList</h1>
      <hr />
      <form
        style={{
          marginTop: '15px',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit(handleValid)}
      >
        <input
          style={{
            padding: '10px',
            width: '40%',
            minWidth: '150px',
            borderRadius: '20px 0px 0px 20px',
            margin: 0,
            boxShadow: '2px 2px 4px',
            borderRight: 0,
            border: '1px solid black',
            backgroundColor: 'rgba(255,255,255,0.9)',
          }}
          {...register('toDo', {
            required: 'toDo is required',
          })}
          type="text"
          placeholder="Write today's a to do"
        />

        <button
          style={{
            backgroundColor: 'rgba(255,255,255,0.85)',
            marginLeft: '1px',

            width: '20%',
            borderRadius: '0px 20px 20px 0px',
            borderLeft: 0,
            boxShadow: '2px 2px 3px',
            padding: '10px',
            border: '1px solid black',
            fontWeight: 600,
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default CreateToDo;
