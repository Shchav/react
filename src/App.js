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
      position: ''
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

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname},
          age - {years},
          position - {position}</h1>
        <a href={link}>My profile</a>
        <from>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </from>
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
