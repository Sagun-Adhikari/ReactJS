// function App(){
//   return(
// <>
// <h1 classname="hehe">this is class</h1>
// <p>i am learning react</p>
// <input type="text" placeholder="hehe" />
// </>
//   );
// }
// export default App;

// import { BrowserRouter, Router } from "react-router-dom";




//using js in react


// function App(){
//   let name='sagun adikari';
//   let a=6;
//   let b=7;
//   return(
// <>
// <p>hello {name}</p>
// <p>the sum of {a} and {b} is {a+b}</p>
// </>
//   );
// }
// export default App;




// using function in jsx
// function App(){
//   const name="sagun"
//   function greet(){
//     return "hello,";
//   }
//   return(
//     <>
// <h1>{greet()}{name}</h1>
// </>
//   );
// }
// export default App;


// using component is react
// import Header from "./Header";
// import Footer from "./footer";
// function App(){
//   return(
// <>
// <Header/>
// <Footer/>

// </>
//   );
// }
// export default App;


//passing data from app to header

// import Header from "./Header";
// import Footer from "./footer";
// function App(){
//   return(
// <>
// <Header name="headerr"/>
// <Footer/>

// </>
//   );
// }
// export default App;



//passing multiple data from app to header

// import Header from "./Header";
// import Footer from "./footer";
// function App(){
//   return(
// <>
// <Header name="headerr" madeby="sagun"/>
// <Footer/>

// </>
//   );
// }
// export default App;



//event handling
// function App(){
//   function click(){
//     console.log("Button clicked");
//   }
//   return(
// <>
// <button onClick={click}>click me</button>
// </>
//   );
// }
// export default App;


// event1: alert when button clicked
// function App(){
//     function click(){
//         alert("button is clicked");
//     }
//     return(
//         <>
//         <button onClick={click}>clickkk</button>
//         </>
//     );
// }
// export default App;



//onmouse over

// function App(){
//     function click(){
//         console.log("mouse is over meeeee")
//     }
//     return(
//         <>
//         <button onMouseOver={click}>clickkk</button>
//         </>
//     );
// }
// export default App;



//form submmition
// function App(){
//    function submit(event){
//     alert("form is summited");

//    }
//     return(
//         <>
        
//         <form onSubmit={submit}>
//         <input type="text" />
//         <button>Submit</button>
//       </form>
//         </>
//     );
// }
// export default App;




//reach list(using map)
// function App(){
//   const student=["sagun","rajesh","sandip","jems"]
//   return(
//     <>
//     {student.map((student) => (
//       <h1>{student}</h1>
//     ))}
//     </>
//   );
// }
// export default App;



//react conditional redndering


// function App() {

//   const isLoggedIn = true;

//   if (isLoggedIn) {
//     return <h1>Welcome Back!</h1>;
//   }
//   else {
//     return <h1>Please Login</h1>;
//   }

// }

// export default App;



//show hide cconditional
// function App() {

//   const show = true;

//   return (
//     <>
//       <h1>Hello</h1>

//       {show && <h2>This is visible</h2>}
      
//     </>
//   );

// }

// export default App;




//from
// function App() {
// function submit(event){
//    event.preventDefault();
//    const username=event.target.username.value;
//    const password= event.target.password.value;
//   console.log("Username:", username);
//   console.log("Password:", password);
// }


//   return (
//     <>
//     <form onSubmit={submit}>
//   username
//   <input type="text" name="username"/>
//   password
//   <input type="password" name="password"></input>
//   <button> submit</button>
//       </form>
//     </>
//   );

// }

// export default App;




//useeffect::doing sidework when main page is working something else
  //changing page title
// import { useEffect } from "react";

// function App() {

//   useEffect(() => {

//     document.title = "React App";

//   }, []);

//   return (
//     <>
//       <h1>Hello React</h1>
//     </>
//   );
// }

// export default App;



//multiple states

// import { useState } from "react";
//  function App(){
//    const [name, setName] = useState("Sagun");
//   const [age, setAge] = useState(20);
//   return(
// <>
//  <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>

//       <button onClick={() => setName("React Developer")}>
//         Change Name
//       </button>

//       <button onClick={() => setAge(age + 1)}>
//         Increase Age
//       </button>
// </>
//   );
//  }
//  export default App;

//What is React Router?

// React Router is a library that
//  allows navigation between different components/pages in a React application.


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





//page swithing
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";

// function App(){

//   return(
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="./pages/about"  element={<About />} />

//         <Route path="./pages/contact" element={<Contact />} />
//       </Routes>
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to="./pages/about">About</Link>
//         <Link to="./pages/contact">Contact</Link>
//     </nav>
     

//     </BrowserRouter>

//   );
// }
// export default App;











//CSS

//inlinne css
// function App() {
//   return (
//     <h2
//       style={{
//         color: "blue",
//         backgroundColor: "yellow",
//       }}
//     >
//       Hello React
//     </h2>
//   );
// }

// export default App;

//external css
// import "./App.css";

// function App() {
//   return <h1>Hello React</h1>;
// }

// export default App;




//props
//props stand for proeprties used to pass values from parent to the child pages

// import Student from "./Student";

// function App() {
//   return (
//     <>
//       <h1>My App</h1>

//       <Student name="sagun adhikari"  age="20"/>
//     </>
//   );
// }

// export default App;




//rendering list
// function App(){
//   const student=["sagun","Rajesh","jems","sandip"];
//    student.map(function(s){
//       console.log(s)
   
//     });
//   return (
//     <>
   
//     </>
//   );
// }
// export default App;



//if want to write in html body
// function App() {

//   const students = ["Sagun", "Ram", "Shyam"];

//   return (
//     <>
//       <h1>Students</h1>

//       {students.map(function(student) {
//         return <h2>{student}</h2>;
//       })}
//     </>
//   );
// }

// export default App;



//render 2d array
// function App() {
//   const students = [
//     { name: "Sagun", age: 21 },
//     { name: "Ram", age: 20 },
//     { name: "Shyam", age: 22 }
//   ];

//   return (
//     <>
//       <h1>Students</h1>

//       {students.map((student) => (
//         <div>
//           <h2>{student.name}</h2>
//           <p>Age: {student.age}</p>
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;



//use one usestate for multiple chilld component
// import { useState } from "react";
// import Input from "./Input";
// import Display from "./Display";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <>
//       <Input setName={setName} />

//       <Display name={name} />
//     </>
//   );
// }

// export default App;

//page swithing
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";

// function App(){

//   return(
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="./pages/about"  element={<About />} />

//         <Route path="./pages/contact" element={<Contact />} />
//       </Routes>
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to="./pages/about">About</Link>
//         <Link to="./pages/contact">Contact</Link>
//     </nav>
     

//     </BrowserRouter>

//   );
// }
// export default App;




import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="./pages/about"  element={<About />} />
      <Route path="./pages/contact" element={<Contact />} />
    </Routes>
     <nav>
        <Link to="/">Home</Link>
        <Link to="./pages/about">About</Link>
        <Link to="./pages/contact">Contact</Link>
    </nav>
    </BrowserRouter>
  );
}
export default App;