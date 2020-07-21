import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from the input
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/
    this.props.history.push(`/store/${storeName}`);
    // console.log('going to store'); 
  };
  
  render() {   
    return ( 
      <>
        <form 
          className="store-selector"
          onSubmit={this.goToStore}
        >
          <h2>Please Enter A Store</h2>
          <input 
            type="text" 
            required 
            ref={this.myInput}
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store --></button>
        </form>
      </>
    ) 
  };
}

export default StorePicker; 