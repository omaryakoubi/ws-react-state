import { Alert, Button } from "react-bootstrap";

const TodoItem = ({ todos, deleteTodo }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      {todos.map((todo, index) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Alert style={{ height: "40px" }} key={index} variant="dark">
              <h6
                style={{
                  textAlign: "center",
                }}
              >
                {todo}
              </h6>
            </Alert>
            <Button
              style={{ height: "40px", marginLeft: "10px" }}
              variant="danger"
              value={todo}
              onClick={deleteTodo}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
