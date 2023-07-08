import React, { useState } from "react";
import "../css/default.css";
import InputField from "./InputField";
import TodoBox from "./TodoBox";
export default function Layout() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inputTag = [
    { key: 1, name: "제목", value: title, Func: setTitle },
    { key: 2, name: "내용", value: content, Func: setContent },
  ];
  const initList = [
    {
      key: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      checkDone: false,
    },
    {
      key: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      checkDone: true,
    },
  ];
  const [TodoBoxList, setTodoBox] = useState(initList);
  const AddFunc = (BoxList, setBox) => {
    const addList = {
      key: Date.now(),
      title: title,
      content: content,
      checkDone: false,
    };
    setBox([...BoxList, addList]);
  };

  const DoneFunc = (key, BoxList, setBox, setCheck) => {
    const newList = BoxList.map((value) => {
      if (value.key === key) value.checkDone = !setCheck;
      return value;
    });
    setBox(newList);
  };

  const DeleteFunc = (key, BoxList, setBox) => {
    const newList = BoxList.filter((value) => value.key !== key);
    setBox(newList);
  };

  return (
    <div className="layout">
      <header>
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <form className="add-form">
        <div className="input-group">
          {inputTag.map((e) => {
            return (
              <InputField
                key={e.key}
                fieidName={e.name}
                fieldValue={e.value}
                setFieldFunc={e.Func}
              />
            );
          })}
        </div>
        <button
          type="button"
          className="add-button"
          onClick={() => AddFunc(TodoBoxList, setTodoBox)}
        >
          추가하기
        </button>
      </form>
      <div className="list-container">
        <h2 className="big-label">Working.. 🔥</h2>
        <TodoBox
          BoxList={TodoBoxList}
          BoxFunc={setTodoBox}
          DeleteFunc={DeleteFunc}
          DoneFunc={DoneFunc}
          checkDone={false}
        />
        <h2 className="big-label">Done..! 🎉</h2>
        <TodoBox
          BoxList={TodoBoxList}
          BoxFunc={setTodoBox}
          DeleteFunc={DeleteFunc}
          DoneFunc={DoneFunc}
          checkDone={true}
        />
      </div>
    </div>
  );
}
