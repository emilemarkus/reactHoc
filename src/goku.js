import React, { Component } from "react";
import countHits from "./countHits";

class Goku extends Component {
  render() {
    const { name, handleClick, hocState, life, reduceHandler } = this.props;

    return (
      <div className="col">
        <img
          src="https://i.pinimg.com/originals/97/35/2a/97352a18b151610dc66f3f693e0b9196.png"
          alt="vegeta"
          height="400px"
        />
        <br />
        <button className="btn btn-warning" onClick={handleClick}>
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
              <td>{life}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Goku);
