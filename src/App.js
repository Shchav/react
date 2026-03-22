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

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
