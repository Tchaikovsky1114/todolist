import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { toDoState, IToDo, Categories, deleteSelector } from '../atom';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 0.6rem;
  border-radius: 20px;
  border: 1px solid burlywood;
  background-color: gold;
  box-sizing: border-box;
  margin: 0px 1px;
  &:hover {
    background-color: yellow;
    cursor: pointer;
  }
`;
const List = styled.li`
  list-style: none;
`;
const Text = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
  margin-right: 5px;
`;
const ToDo = ({ id, category, text }: IToDo) => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev: any) => {
      const targetIndex = prev.findIndex((toDo: any) => toDo.id === id);

      const newToDo: any = { id, category: name as any, text };

      return [
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ];
      // const newToDos = [prev];
      // newToDos.splice(targetIndex, 1, newToDo);
      // return [newToDos];
    });
  };
  const handleDeleteToDo = (e: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((prev: any) => {
      const targetIndex = prev.findIndex((toDo: any) => toDo.id === id);
      // console.log(e.currentTarget.value);
      // console.log(toDos[targetIndex].id + '');
      // console.log(prev[targetIndex].id + '');
      // if (e.currentTarget.value === prev[targetIndex].id + '') {
      return [...prev.slice(0, targetIndex), ...prev.slice(targetIndex + 1)];
      // }
    });
  };

  return (
    <>
      {
        <List key={id}>
          <Text>{text}</Text>
          {category !== Categories.DOING && (
            <Button name={Categories.DOING} onClick={onClick}>
              Doing
            </Button>
          )}
          {category !== Categories.To_Do && (
            <Button name={Categories.To_Do} onClick={onClick}>
              To Do
            </Button>
          )}
          {category !== Categories.DONE && (
            <Button name={Categories.DONE} onClick={onClick}>
              Done
            </Button>
          )}
          <Button
            value={id}
            onClick={handleDeleteToDo}
            style={{
              backgroundColor: 'orangered',
              border: '1px solid orangered',
            }}
          >
            Delete
          </Button>
        </List>
      }
    </>
  );
};

export default ToDo;
