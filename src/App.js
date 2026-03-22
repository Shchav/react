import { Component } from 'react'
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}
// const Field = () => {
//   const holder = 'Enter here';
//   const styleField = {
//     width: '300px'
//   };
//   return <input placeholder={holder} type='text' style={styleField} />
// }
function Btn() {
  const logged = true;
  const res = () => {
    return 'Log in';
  }
  const p = <p>{res()}</p>
  return <button>{!logged ? p : 'Exit'}</button>
}

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styleField = {
      width: '300px'
    };
    return <input
      placeholder={holder}
      type='text'
      style={styleField} />;
  }
}

function WhoAmI(props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
    </div>
  );
}

export { Header };
export default App;
