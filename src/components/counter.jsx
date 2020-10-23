import React, { Component } from "react";

class Counter extends Component {
  handleBadgeChange() {
    let badgeClasses = "badge m-2 badge-";
    const count = this.props.counter.value;
    badgeClasses += count === 0 ? "warning" : "primary";
    return badgeClasses;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }

  render() {
    console.log('Counter rendered')
    const { onDelete, onReset, onIncrement, counter } = this.props;
    return (
      <div>
        <h4>{this.props.counter.id}</h4>
        <span className={this.handleBadgeChange()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-info btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onReset(counter.id)}
          disabled={counter.value === 0 ? true : false}
        >
          Reset
        </button>
      </div>
    );
  }
}
export default Counter;
