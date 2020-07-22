import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes:{},
    order:{}
  }; 

  addFish = fish => {
    console.log('Adding a fish');
    // In react setState API is used
    // 1. Take a copy of the existing state, to AVOID MUTATION
    const fishes = {...this.state.fishes};
    // 2. Add new fish to fishes
    console.log(fishes);
    fishes[`fish${Date.now()}`] = fish;
    console.log(fishes);
    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes
      //fishes
    })
  };

  loadSampleFishes = () => {
    this.setState({
      fishes:sampleFishes
    })
    //console.log('sample fishes');
  }

  addToOrder = (key) => {
    // 1.Take a copy of the state
    const order = { ...this.state.order }
    // 2.Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3.Call setState to update our state object
    this.setState({
      order
    }) 
  }

  render() {
    return ( 
      <div className="catch-of-the-day"> 
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
              <Fish 
                key={key} 
                details={this.state.fishes[key]}  
                addToOrder={this.addToOrder}
                index={key}
              />
            )}
          </ul>
        </div>
        <Order/>
        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}/>
      </div>
    ) 
  }
}

export default App;