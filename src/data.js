// src/data.js

import travelGif from './assets/Travel App.gif'
import TenziesGif from './assets/Tenzies App.gif'
import gymGif from './assets/gym App.gif'
import cryptoGif from './assets/cryptoApp.gif'

export const projects = [
    {
      title: "CryptoWorld",
      subtitle: "React",
      description:
        "A cryptocurrency application made with react where users can get information and news about any coin they want.",
      image: cryptoGif,
      link: "",
    },
    {
      title: "Gym Application",
      subtitle: "React",
      description:
        "A gym application built with react, which users can use to workout or get exercises based on equipment or target muscle.",
      image: gymGif,
      link: "",
    },
    {
      title: "Tenzies Game",
      subtitle: "React",
      description:
        "A tenzies game built using react. Players keep picking a particular die number until all the dice are the same",
      image: TenziesGif,
      link: "",
    },
    {
      title: "Tourist Application",
      subtitle: "React",
      description:
        "A tourist guide application in which users can get all the hotels, restaurants and attractions based on a particular location.",
      image: travelGif,
      link: "",
    },
  ];