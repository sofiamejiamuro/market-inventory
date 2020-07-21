import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import sampleFishes from '../sample-fishes';

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

  render() {
    return ( 
      <div className="catch-of-the-day"> 
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
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