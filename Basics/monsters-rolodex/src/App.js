import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monters:[
        { name: 'hola',
          id: 'aa1'
        }
      ]
    };

  }

  render(){
    return (
      <div className="App">{
        this.state.monters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      }</div>
    );
  }
}

export default App;
