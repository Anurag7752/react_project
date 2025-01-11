import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import   Welcone from './components/welcome';
import  Hello from './components/Hello';
import Message from './components/Message';
import counter from './components/counter';
import functionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import parentCpmponents from './components/parentCpmponents';
import UserGreeting from './components/UserGreeting';
import stylessheet from './components/stylesheet';

class App extends Component {
  render(){
    return (
      <div className='App'>

        <stylesheet />
        {/* <UserGreeting/>
        <parentComponent/> */}
        {/* <fuunctionClick/>
        <ClassClick/> */}
        {/* <counter/> */}
        {/* <Message/> */}
      {/* <div className='App'>
        <Greet name="Bruce" heroname="Batman"/>
        <p>This is children props</p>
        <Greet name="Madhav" heroname="Superman"/>
        <button>Action</button>
        <Greet name="Diana" heroname="Wonder Women"/>
        <Welcome name="Bruce" heroname="Batman"/>
        <Welcome  name="Madhav" heroname="Superman"/>
        <Hello/> */}
      </div>
   );
  }
}


export default App;





// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/Card'

// function App() {
//   const [count, setCount] = useState(0)
//   let myObj = {
//     username: "hitesh",
//     age: 21
//   }
//   let newArr = [1, 2, 3]

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
//       <Card username="chaiaurcode" btnText="click me" />
//       <Card username="hitesh" />
//     </>
//   )
// }

// export default App