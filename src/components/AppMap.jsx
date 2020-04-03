import React from "react";
import { Route } from "react-router-dom";
import MapContainer from "./MapContainer";
import Routing from "./Routing";
import "../App.css";
const H = window.H; // Para que funcione en React hay que ponerle window a todos los "H"
class AppMap extends React.Component {
  mapRef = React.createRef();
  platform = new H.service.Platform({
    apikey: "YatXWn5RsvdkGIog8fwYN5DEC_DTzFVTt518X6YJ5sI"
  });

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      center: {
        lat: -33.43778,
        lng: -70.65028,
        startingPoint: null,
        endingPoint: null
      }
    };
  }
  setStartingPoint(point0) {
    const service = this.platform.getSearchService();
    service.geocode(
      {
        q: point0
      },
      result => {
        if (result.items.length === 0) {
          return;
        }
        const point = `${result.items[0].position.lat},${result.items[0].position.lng}`;

        this.setState({ ...this.state, startingPoint: point });
      }
    );
  }

  setEndingPoint(point1) {
    const service = this.platform.getSearchService();
    service.geocode(
      {
        q: point1
      },
      result => {
        if (result.length === 0) {
          return;
        }
        const point = `${result.items[0].position.lat},${result.items[0].position.lng}`;
        this.setState({ ...this.state, endingPoint: point });
      }
    );
  }

  calculateRoute(point0, point1) {
    console.log("startingPoint", this.state.startingPoint);
    console.log("endingPoint", this.state.endingPoint);

    // Pasas tu Key
    const map = this.map;
    point0 = this.state.startingPoint;
    point1 = this.state.endingPoint;
    console.log("point1", point0);
    console.log("point2", point1);
    // Routing
    var routingParameters = {
      // The routing mode:
      mode: "fastest;car",
      // The start point of the route:
      waypoint0: `geo!${point0}`,
      // The end point of the route:
      waypoint1: `geo!${point1}`,
      // To retrieve the shape of the route we choose the route
      // representation mode 'display'
      representation: "display"
    };
    // Define a callback function to process the routing response:
    var onResult = function(result) {
      var route, routeShape, startPoint, endPoint, linestring;
      if (result.response.route) {
        // Pick the first route from the response:
        route = result.response.route[0];
        // Pick the route's shape:
        routeShape = route.shape;

        // Create a linestring to use as a point source for the route line
        linestring = new H.geo.LineString();

        // Push all the points in the shape into the linestring:
        routeShape.forEach(function(point) {
          var parts = point.split(",");
          linestring.pushLatLngAlt(parts[0], parts[1]);
        });

        // Retrieve the mapped positions of the requested waypoints:
        startPoint = route.waypoint[0].mappedPosition;
        endPoint = route.waypoint[1].mappedPosition;

        // Create a polyline to display the route:
        var routeLine = new H.map.Polyline(linestring, {
          style: { strokeColor: "blue", lineWidth: 3 }
        });

        // Create a marker for the start point:
        var startMarker = new H.map.Marker({
          lat: startPoint.latitude,
          lng: startPoint.longitude
        });

        // Create a marker for the end point:
        var endMarker = new H.map.Marker({
          lat: endPoint.latitude,
          lng: endPoint.longitude
        });

        // Add the route polyline and the two markers to the map:
        map.addObjects([routeLine, startMarker, endMarker]);

        // Set the map's viewport to make the whole route visible:
        map
          .getViewModel()
          .setLookAtData({ bounds: routeLine.getBoundingBox() });
      }
    };

    // Get an instance of the routing service:
    var router = this.platform.getRoutingService();

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult, function(error) {
      alert(error.message);
    });
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onSuccessPosition.bind(this));
  }
  onSuccessPosition(pos) {
    const crd = pos.coords;
    this.setState({
      ...this.state,
      center: { lat: crd.latitude, lng: crd.longitude }
    });
  }

  onMap(ref) {
    if (ref) {
      this.map = ref.leafletElement;
    }
  }
  render() {
    const center = [this.state.center.lat, this.state.center.lng];
    const zoom = 50;
    return (
      <div>
        <Route
          path="/home-page/location"
          render={() => {
            return (
              <Routing
                setStartingPoint={this.setStartingPoint.bind(this)}
                setEndingPoint={this.setEndingPoint.bind(this)}
                calculateRoute={this.calculateRoute.bind(this)}
              />
            );
          }}
        />
        <MapContainer
          onMap={this.onMap.bind(this)}
          center={center}
          zoom={zoom}
        />
      </div>
    );
  }
}

export default AppMap;
