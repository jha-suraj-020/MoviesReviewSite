import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onDelete, onIncrement, onDecrement } = this.props;

    return (
      <div className="row">
        <div className="col-2">
          <span style={{ fontSize: 18 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary m-2"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary m-2"
            disabled={ counter.value<1 ? "disabled" : ""}
            onClick={() => onDecrement(counter)}
          >
            -
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(counter._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  formatCount() {
    const { counter } = this.props;
    return counter.value === 0 ? "Zero" : counter.value;
  }

  getBadgeClasses() {
    const { counter } = this.props;
    let classes = "badge m-2 ";
    classes += counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
}

export default Counter;
