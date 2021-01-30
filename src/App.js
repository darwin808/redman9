import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addpeople,
  decrement,
  deletepeople,
  increment,
  updatepeople,
} from "./Actions/Actions";

function App() {
  const [name, setname] = useState("");
  const [edit, setedit] = useState("");
  const [modal, setModal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const counter = useSelector((e) => e.CounterReducer);
  const peoples = useSelector((e) => e.PeopleReducer.peoples);
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addpeople({ name, id: Math.random() }));
  };
  const opemodal = (id) => {
    setidholder(id);
    setModal(true);
  };

  const handleedit = (e) => {
    e.preventDefault();
    dispatch(updatepeople({ idholder, edit }));
  };
  return (
    <div className="App">
      {counter}
      <button onClick={() => dispatch(increment())}>ADD</button>
      <button onClick={() => dispatch(decrement())}>MINUS</button>

      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit}>
          <input
            type="text"
            value={edit}
            onChange={(e) => {
              setedit(e.target.value);
            }}
          />
        </form>
      )}

      {peoples.map((e) => (
        <div key={e.id}>
          {e.name}{" "}
          <button
            onClick={() => {
              dispatch(deletepeople(e.id));
            }}>
            del
          </button>
          <button
            onClick={() => {
              opemodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
