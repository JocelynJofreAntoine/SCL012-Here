import React, { Component } from "react";
import _ from "lodash";
import "./Routing.css";


class Routing extends Component {
  handleChangeStarting = e => {
    const point0 = e.target.value;
    this.props.setStartingPoint(point0);
  };

  handleChangeEnding = e => {
    const point1 = e.target.value;
    this.props.setEndingPoint(point1);
  };

  render() {
    return (
      <div>
        <input
          key="inputStarting"
          onChange={evt => {
            evt.persist();
            if (!this.debouncedFnStart) {
              this.debouncedFnStart = _.debounce(() => {
                this.handleChangeStarting(evt);
                this.debouncedFnStart = null;
              }, 1000);
            }
            this.debouncedFnStart();
          }}
          type="text"
          placeholder="¿Dónde estás?"
        />
        <input
          key="inputEnding"
          onChange={evt => {
            evt.persist();
            if (!this.debouncedFnEnd) {
              this.debouncedFnEnd = _.debounce(() => {
                this.handleChangeEnding(evt);
                this.debouncedFnEnd = null;
              }, 1000);
            }
            this.debouncedFnEnd();
          }}
          type="text"
          placeholder="¿A dónde quieres ir?"
        />
        <button onClick={e => this.props.calculateRoute()}>Buscar ruta</button>
      </div>
    );
  }
}

export default Routing;
