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

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 27,
      text: '+++'
    }
  }

  nextYear = () => {
    console.log('+++');
    // this.state.years++;
    // this.setState({
    //   years: this.state.years + 1
    // })
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Shepard" link="vk.com" />
    </div>
  );
}

export { Header };
export default App;
