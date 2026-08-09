//related to app.jsx480

// function Input({ setName }) {
//   return (
//     <button onClick={() => setName("Sagun")}>
//       Set Name
//     </button>
//   );
// }

// export default Input;




//form validation
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "") {
      alert("Please enter your name");
    } else {
      alert("Hello " + name);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;