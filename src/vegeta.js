import React, { Component } from "react";
import countHits from "./countHits";

class Vegeta extends Component {
  render() {
    const { name, handleClick, hocState, life, reduceHandler } = this.props;
    const lifeValue = life > 0 ? <td>{life}%</td> : <td>Mort</td>;
    const disabled = life > 0 ? false : true;

    return (
      <div className="col">
        <img
          src="https://i.pinimg.com/736x/d3/88/f4/d388f4ef18879f6375ba95c2c60d92c9.jpg"
          alt="vegeta"
          height="400px"
        />
        <br />
        <button
          disabled={disabled}
          className="btn btn-warning"
          onClick={handleClick}
        >
          {name} frappe
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"> Coups </th>
              <th scope="col"> Vie </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Vegeta);
