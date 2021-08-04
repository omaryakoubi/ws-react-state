import React from "react";
import { Button } from "react-bootstrap";

const AddTodo = ({ newTodo, handleInputChange, addTodo }) => {
  return (
    <div
      className="AddTodo"
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <input
        placeholder="Type here"
        value={newTodo}
        onChange={handleInputChange}
      />
      <Button
        style={{ marginLeft: "10px", height: "30px" }}
        onClick={() => addTodo()}
      >
        <h6
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Add
        </h6>
      </Button>
    </div>
  );
};

export default AddTodo;
