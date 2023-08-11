// src/data.js

import travelGif from './assets/Travel App.gif'
import realEstateGif from './assets/Real Estate.gif'
import gymGif from './assets/gym App.gif'
import cryptoGif from './assets/cryptoApp.gif'

export const projects = [
    {
      title: "CryptoWorld",
      subtitle: "React",
      description:
        "A cryptocurrency application made with react where users can get information and news about any coin they want.",
      image: cryptoGif,
      link: "https://coinwarrior.netlify.app",
    },
    {
      title: "Gym Application",
      subtitle: "React",
      description:
        "A gym application built with react, which users can use to workout or get exercises based on equipment or target muscle.",
      image: gymGif,
      link: "https://gerard-gym.netlify.app",
    },
    {
      title: "Real Estate Application",
      subtitle: "NextJs",
      description:
        "A NextJs Application in which users can view and filter various properties that are for rent or sale",
      image: realEstateGif,
      link: "https://gerard-realtor.netlify.app",
    },
    {
      title: "Tourist Application",
      subtitle: "React",
      description:
        "A tourist guide application in which users can get all the hotels, restaurants and attractions based on a particular location.",
      image: travelGif,
      link: "https://gerard-travel-advisor.netlify.app",
    },
  ];