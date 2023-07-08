import React from "react";

export default function TodoBoxButton({
  keyValue,
  BoxList,
  BoxFunc,
  DeleteFunc,
}) {
  const buttonStyle = {
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    height: "40px",
    width: "50%",
  };
  const CompleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#fff",
    border: "2px solid green",
  };
  const DeleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#fff",
    border: "2px solid red",
  };
  return (
    <>
      <button
        type="button"
        style={DeleteButtonStyle}
        onClick={() => DeleteFunc(keyValue, BoxList, BoxFunc)}
      >
        삭제하기
      </button>
      <button type="button" style={CompleteButtonStyle}>
        완료
      </button>
    </>
  );
}
