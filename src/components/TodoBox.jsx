import React from "react";
import "../css/TodoBox.css";
import TodoBoxComment from "./TodoBoxComment";
export default function TodoBox({
  BoxList,
  BoxFunc,
  DeleteFunc,
  DoneFunc,
  checkDone,
}) {
  const buttonStyle = {
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    height: "40px",
    width: "50%",
    backgroundColor: "#fff",
  };
  const CompleteButtonStyle = {
    ...buttonStyle,
    border: "2px solid green",
  };
  const DeleteButtonStyle = {
    ...buttonStyle,
    border: "2px solid red",
  };
  return (
    <div className="list-wrapper">
      {BoxList.filter((e) => e.checkDone === checkDone).map((v) => {
        return (
          <div className="todo-container" key={v.key}>
            <TodoBoxComment title={v.title} content={v.content} />

            <div className="button-set">
              <button
                type="button"
                style={DeleteButtonStyle}
                onClick={() => DeleteFunc(v.key, BoxList, BoxFunc)}
              >
                삭제하기
              </button>
              <button
                type="button"
                style={CompleteButtonStyle}
                onClick={() => DoneFunc(v.key, BoxList, BoxFunc, checkDone)}
              >
                {checkDone ? "취소" : "완료"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
