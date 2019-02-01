import React from "react";
import { render } from "react-dom";
import Map from "./Map";

class App extends React.Component {
  state = { markerPosition: { lat: 52.237049, lng: 21.017532 } };
  render() {
    const { markerPosition } = this.state;
    return (
      <div>
        <Map markerPosition={markerPosition} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
