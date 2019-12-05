import React, { Component, useState, Fragment, useRef } from "react";
import styled from "react-emotion";
import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import uniqueId from "lodash.uniqueid";

const Container = styled("div")`
  margin: 3em auto 0 auto;
  padding: 0 1em;
  width: 75%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  input[type="text"] {
    border-radius: ${props =>
      props.todos.length ? "0.25em 0.25em 0 0" : "0.25em"};
  }
`;
const List = styled("ul")`
  list-style: none;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top: none;
  margin: 0;
  padding-left: 0;
`;

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const pRef = useRef();

  function handleNewChange(e) {
    setNewTodo(e.target.value);
  }
  function handleNewSubmit(e) {
    e.preventDefault();

    setTodos(prevState => [
      ...prevState,
      { id: uniqueId(), text: newTodo, completed: false }
    ]);

    setNewTodo("");
  }

  function handleDelete(id, e) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  }

  function handleCompletedToggle(id, e) {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <Container todos={todos}>
      <p ref={pRef}>test</p>
      <button
        onClick={() => {
          pRef.current.style.height = "1000px";
        }}
      >
        klikaj 💥
      </button>
      <NewTodo
        onSubmit={handleNewSubmit}
        value={newTodo}
        onChange={handleNewChange}
      />
      {!!todos.length && (
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={handleCompletedToggle}
              onDelete={handleDelete}
            />
          ))}
        </List>
      )}
    </Container>
  );
}
