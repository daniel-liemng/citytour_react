import React, { Component } from "react";
import "./TourList.scss";

import Tour from "../Tour/Tour";
import tourData from "./tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    // this.setState({
    //   tours: this.state.tours.filter(tour => tour.id !== id)
    // });

    // Other way
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;
    return (
      <section className="tour-list">
        {tours &&
          tours.map(tour => (
            <Tour tour={tour} key={tour.id} removeTour={this.removeTour} />
          ))}
      </section>
    );
  }
}

export default TourList;
