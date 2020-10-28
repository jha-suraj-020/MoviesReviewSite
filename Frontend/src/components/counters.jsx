import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onDelete,
      onReset,
      onIncrement,
      onDecrement,
    } = this.props;

    return (
      <div>
        <button onClick={onReset} style={{fontSize: 18}} className="btn btn-warning font-weight-bold m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter._id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
