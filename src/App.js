import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  constructor() {
    super();
    console.log("Constructor has been called. Setting up state");
    this.state = {
      counters: [
        { id: 1, value: 69 },
        { id: 2, value: 0 },
        { id: 3, value: 0 }, //props are immutable
        { id: 4, value: 0 },
      ],
    };
  }

  handleCreate() {
    const { counters } = this.state;
    if (counters.length === 0) {
      const newCounters = [{ id: 1, value: 0 }];
      this.setState({ counters: newCounters });
    } else {
      const lastId = counters[counters.length - 1].id;
      const newCounters = Object.assign([], counters);
      newCounters.push({ id: lastId + 1, value: 0 });
      this.setState({ counters: newCounters });
    }
  }

  handleDelete(counterId) {
    const newCounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newCounters });
  }
  handleDeleteAll() {
    this.setState({ counters: [] });
  }

  handleReset(counterId) {
    const newCounters = this.state.counters.map((c) => {
      if (c.id === counterId) {
        c.value = 0;
      }
      return c;
    });
    this.setState({ counters: newCounters });
  }
  handleResetAll() {
    const newCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newCounters });
  }

  handleIncrement(counter) {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    /* 
    get index to access that in newCounters to copy, 
    can't use filter because that only gives the counter 
    object and is redundant since u have to access id again 
    but counters is array so index accessing is easier
    */
    newCounters[index] = { ...counter };
    //make copy of counter because if not make copy then counter is still linked
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  }

  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <button
            onClick={this.handleDeleteAll.bind(this)}
            className="btn btn-danger"
          >
            Delete All
          </button>
          <button
            onClick={this.handleResetAll.bind(this)}
            className="btn btn-secondary m-2"
          >
            Reset All
          </button>
          <button
            onClick={this.handleCreate.bind(this)}
            className="btn btn-success m-5"
          >
            Create new object
          </button>
          <Counters
            onReset={this.handleReset.bind(this)}
            onIncrement={this.handleIncrement.bind(this)}
            onDelete={this.handleDelete.bind(this)}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
