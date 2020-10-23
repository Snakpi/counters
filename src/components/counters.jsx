import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log('Counters rendered')
    const { onDelete, onReset, onIncrement, counters } = this.props;
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onReset={onReset}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
