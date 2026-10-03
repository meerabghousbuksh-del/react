import { useState } from "react";
function Task2() {
const [message, setMessage] = useState("Hello");
function changeMessage() {
setMessage("Welcome to React");
}
function changeMessage() {
  setMessage(message === "Hello" ? "Welcome to React" : "Hello");
}
return (
<div>
<h1>{message}</h1>
<button onClick={changeMessage}>
Change Message
</button>
</div>
);
}
export default Task2;