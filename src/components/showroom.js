import React, { useState } from 'react';
import CARS from '../constants/cars';
import Canvas from './canvas';
import CarInfo from './carInfo';

const Showroom = () => {
  const [currentCar, setCurrentCar] = useState(0);

  function nextCar() {
    if (currentCar !== CARS.length - 1) {
      const newCar = currentCar + 1;
      console.log(newCar);
      setCurrentCar(newCar);
    } else {
      window.location.reload();
    }
  }

  return (
    <div className="container">
      <div className="header">
        <span className="brand">Tuan Auto</span>
      </div>
      <div className="showroom">
        <div className="left">
          <Canvas currentCar={currentCar} />
        </div>
        <div className="right">
          <CarInfo currentCar={currentCar} nextCar={nextCar} />
        </div>
      </div>
      <div className="footer">
        <div>
          developed by <a href="https://github.com/tua2">Tuan Nguyen</a> ·
          3D car assets by <a href="https://sketchfab.com/OneSteven">iSteven</a> .
    
        </div>
      </div>
    </div>
  );
};

export default Showroom;
