// src/data.js

import travelGif from './assets/Travel App.gif'
import realEstateGif from './assets/Real Estate.gif'
import gymGif from './assets/gym App.gif'
import cryptoGif from './assets/cryptoApp.gif'
import inventoryGif from './assets/inventory App.gif'
import appointmentGif from './assets/appointment App.gif'

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
    {
      title: "Inventory Management Application",
      subtitle: "Mern stack",
      description:
        <p>An inventory management application where a user can manipulate their inventory by creating, editing and deleting items <br/> (give about 50 seconds or more for the api to load and do not refresh)</p>,
      image: inventoryGif,
      link: "https://stockx-jmyy.onrender.com",
    },
    {
      title: "Doctor Appointment Application",
      subtitle: "Typescript Mern stack",
      description:
        <p>An application where users can log in as either a doctor or patient and either book appointments or receive appointments <br/> (give about 50 seconds or more for the api to load and do not refresh)</p>,
      image: appointmentGif,
      link: "https://healhub-ug2z.onrender.com/",
    },
  ];