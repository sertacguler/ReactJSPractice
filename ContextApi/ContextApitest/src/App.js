import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'sertac',
    age: 28,
    cool: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div classname="family">
    <Person />
  </div>

)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Name :  {context.state.name}</p>
              <p>Age :  {context.state.age}</p>
              <p>Cool :  {context.state.cool}</p>
              <button onClick={context.growYearOlder}>proop</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p> I'm the app </p>
          <Family />
        </div >
      </MyProvider>
    );
  }
}

export default App;
