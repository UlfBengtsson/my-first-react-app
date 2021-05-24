import React, { Component } from "react";

class TableBody extends Component {
  state = {
    peopel: [
      {
        id: 1,
        fullName: "Ulf B",
        phoneNumber: "12313213",
        emailAdress: "a@a.a",
      },
      {
        id: 2,
        fullName: "Erik S",
        phoneNumber: "456465465",
        emailAdress: "e@e.e",
      },
      {
        id: 3,
        fullName: "Julius",
        phoneNumber: "798798798",
        emailAdress: "j@j.j",
      },
    ],
  };

  render() {
    const tableRows = this.state.peopel.map((row) => (
      <tr key={row.id}>
        <td>{row.fullName}</td>
        <td>{row.phoneNumber}</td>
        <td>{row.emailAdress}</td>
        <td></td>
      </tr>
    ));

    return <tbody>{tableRows}</tbody>;
  }
}

export default TableBody;
