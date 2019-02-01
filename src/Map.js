import React from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "300px"
};

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [52.237049, 21.017532],
      zoom: 10,
      crs: L.CRS.EPSG4326
    });

    L.tileLayer
      .wms("http://wms.um.warszawa.pl/serwis?", {
        layers: "WMS/Historia_granica_1916",
        format: "image/png",
        transparent: "true",
        info_format: "text/html",
        version: "1.1.1",
        uppercase: true
      })
      .addTo(this.map);

    L.tileLayer
      .wms("http://wms.um.warszawa.pl/serwis?", {
        layers: "WMS/Komunikacja_StacjeMetro",
        format: "image/png",
        transparent: "true",
        info_format: "text/html",
        version: "1.1.1",
        uppercase: true
      })
      .addTo(this.map);

    // add marker
    this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }

  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
