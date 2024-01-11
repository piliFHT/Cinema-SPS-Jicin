import React, { useState } from "react";
import "../App.scss";

function ReservationComp() {
  const [reservedSeats, setReservedSeats] = useState([]);
  
  const handleClick = (id) => {
    setReservedSeats((prevSeats) => {
      if (prevSeats.includes(id)) {
        // If the seat is already reserved, remove it
        return prevSeats.filter((seatId) => seatId !== id);
      } else {
        // If the seat is not reserved, add it
        return [...prevSeats, id];
      }
    });
  };

  const isSeatReserved = (id) => reservedSeats.includes(id);

  const poleSedadel = [
    { seat: "Sedadlo A1", id: "A1" },
    { seat: "Sedadlo A2", id: "A2" },
    { seat: "Sedadlo A3", id: "A3" },
    { seat: "Sedadlo A4", id: "A4" },
    { seat: "Sedadlo A5", id: "A5" },
    { seat: "Sedadlo A6", id: "A6" },
    { seat: "Sedadlo A7", id: "A7" },
    { seat: "Sedadlo A8", id: "A8" },
    { seat: "Sedadlo A9", id: "A9" },
    { seat: "Sedadlo A10", id: "A10" },
    { seat: "Sedadlo B1", id: "B1" },
    { seat: "Sedadlo B2", id: "B2" },
    { seat: "Sedadlo B3", id: "B3" },
    { seat: "Sedadlo B4", id: "B4" },
    { seat: "Sedadlo B5", id: "B5" },
    { seat: "Sedadlo B6", id: "B6" },
    { seat: "Sedadlo B7", id: "B7" },
    { seat: "Sedadlo B8", id: "B8" },
    { seat: "Sedadlo B9", id: "B9" },
    { seat: "Sedadlo B10", id: "B10" },
    { seat: "Sedadlo C1", id: "C1" },
    { seat: "Sedadlo C2", id: "C2" },
    { seat: "Sedadlo C3", id: "C3" },
    { seat: "Sedadlo C4", id: "C4" },
    { seat: "Sedadlo C5", id: "C5" },
    { seat: "Sedadlo C6", id: "C6" },
    { seat: "Sedadlo C7", id: "C7" },
    { seat: "Sedadlo C8", id: "C8" },
    { seat: "Sedadlo C9", id: "C9" },
    { seat: "Sedadlo C10", id: "C10" },
    { seat: "Sedadlo D1", id: "D1" },
    { seat: "Sedadlo D2", id: "D2" },
    { seat: "Sedadlo D3", id: "D3" },
    { seat: "Sedadlo D4", id: "D4" },
    { seat: "Sedadlo D5", id: "D5" },
    { seat: "Sedadlo D6", id: "D6" },
    { seat: "Sedadlo D7", id: "D7" },
    { seat: "Sedadlo D8", id: "D8" },
    { seat: "Sedadlo D9", id: "D9" },
    { seat: "Sedadlo D10", id: "D10" },
  ];
  
  const listSedadel = [];
  let row = [];

  for (let i = 0; i < poleSedadel.length; i++) {
    const x = poleSedadel[i];

    row.push(
      <div key={i} className="col-2 seat-col">
        <label>{x.seat}</label>
        <br />
        <button
          onClick={() => handleClick(x.id)}
          style={{
            background: isSeatReserved(x.id) ? "rgb(0,200,75)" : "red",
            color: isSeatReserved(x.id) ? "white" : "black",
            
          }}
          className="rounded-top"
        >
          {x.id}
        </button>
      </div>
    );

    if ((i + 1) % 10 === 0 || i === poleSedadel.length - 1) {
      listSedadel.push(<div key={i} className="row seat-row">{row}</div>);
      row = [];
    }
  }

  return (
    <>
      <div className="text-center d-flex flex-column min-vh-100">
        <h2>Rezervace</h2>
        <div className="container hron">Plátno</div>
        <div className="container seats-container">{listSedadel}</div>
      </div>
    </>
  );
}

export default ReservationComp;
