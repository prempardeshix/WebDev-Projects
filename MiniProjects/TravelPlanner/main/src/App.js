// import logo from './logo.svg';
import "./App.css";
import Card from "./Card";
import Tours from "./Tours";
import { useState } from "react";

function App() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore quibusdam molestias, esse dicta possimus atque similique doloremque praesentium expedita quidem unde culpa corrupti totam illo earum harum reprehenderit? Libero aspernatur laudantium nobis officia sit aperiam excepturi voluptatum molestiae veritatis!";

  // function removeTour(name) {

  // }

  return (
    <div>
      <h1 className="header">Plan with ❤️</h1>
      <Tours>
        <Card image="jaipur.jpg" name="Jaipur" rate="75650" info={lorem}></Card>
        <Card image="agra.jpg" name="Agra" rate="75650" info={lorem}></Card>
        <Card image="goa.jpg" name="Goa" rate="75650" info={lorem}></Card>
        <Card
          image="darjelling.jpg"
          name="Darjelling"
          rate="75650"
          info={lorem}
        ></Card>
        <Card
          image="varanasi.jpg"
          name="Varanasi"
          rate="75650"
          info={lorem}
        ></Card>
        <Card
          image="rajasthan.jpg"
          name="Rajasthan"
          rate="75650"
          info={lorem}
        ></Card>
      </Tours>
    </div>
  );
}

export default App;
