import "./styles.css";
import "./components/TodoList";
import TodoList from "./components/TodoList";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { useState } from "react";
import { v4 } from "uuid";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [textValue, setTextValue] = useState("");
  const onChangeInput = (e) => {
    setTextValue(e.target.value);
  };
  const updateTodoList = () => {
    setTodoList([...todoList, { id: v4(), name: textValue, isDone: false }]);
    setTextValue("");
  };

  return (
    <>
      <h3>Day la danh sach cong viec:</h3>
      <Textfield
        name="add-todo"
        placeholder="Add work"
        elemAfterInput={
          <Button
            isDisabled={!textValue}
            appearance="primary"
            onClick={updateTodoList}
          >
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textValue}
        onChange={onChangeInput}
      ></Textfield>
      <TodoList todoList={todoList} />
    </>
  );
}
