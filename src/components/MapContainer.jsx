import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const hereTileUrl = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?apiKey=YatXWn5RsvdkGIog8fwYN5DEC_DTzFVTt518X6YJ5sI &api:320`;
    return (
      <Map
        ref={this.props.onMap}
        center={this.props.center}
        zoom={this.props.zoom}
      >
        <TileLayer attribution="&copy; Here 2019" url={hereTileUrl} />
        <Marker draggable={true} position={this.props.center} />
      </Map>
    );
  }
}

export default MapContainer;
