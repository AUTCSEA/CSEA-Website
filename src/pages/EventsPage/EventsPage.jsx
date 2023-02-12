import React from "react";
import Slider from "react-slick";
import "./EventsPage.css"



const EventsPage = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="events-container">
      <div className="events-container__inner">
        <h1 className="events-container__header">Upcoming Events</h1>
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider> */}
      </div>
    </div>
  );
};

export default EventsPage;
