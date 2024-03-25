import React from 'react';
import './Projects.css';
import p1 from '../Images/HCDR.png';
import p2 from '../Images/GamePlanner.jpeg';
import p3 from '../Images/covid1.png';
import p4 from '../Images/weather.jpeg';
import p5 from '../Images/steganography.png';


function Projects() {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-container">
        <div className="project-block">
          <img src={p1} alt="p1" />
          <h3>Home Credit Default Risk</h3>
          <p>This project focuses on predicting whether a client is capable of repaying a loan or not, using the Home Credit Default Risk Kaggle Competition dataset. Implemented three neural networks using PyTorch Lightning for classification. Conducted comprehensive exploratory data analysis (EDA), including visualizations of data distributions. Model achieved an accuracy of 90%.</p><a href="https://github.com/sowmyacheedu/Home-Credit-Default-Risk">Learn More</a>
          
        </div>
        <div className="project-block">
          <img src={p2} alt="p2" />
          <h3>Game Planner</h3>
          <p>Game Planner is a website that simplifies sports room and court reservations, using the MERN Tech Stack (MongoDB,
Express, React, Node.js).Used custom databases and APIs, utilized Agile methodology for efficient project management.</p>
          <a href="https://github.com/sowmyacheedu/GamePlanner">Learn More</a>
        </div>
        <div className="project-block">
          <img src={p3} alt="p3" />
          <h3>Time Series Prediction Model for the Prediction of COVID - 19</h3>
          <p>Designed a model for predicting the number of COVID-19 patients and subsequently used for forecasting future cases.Covid cases of India in 2020 were taken for the dataset. Implemented LSTM (Long Short-Term Memory) network as the driving force to develop this model.</p>
          <a href="https://github.com/sowmyacheedu/Time-Series-Prediction-Model-for-the-Prediction-of-COVID-19">Learn More</a>
        </div>
        <div className="project-block">
          <img src={p4} alt="p4" />
          <h3>Weather Classififcation System using Images</h3>
          <p>This project introduces a novel method for classifying meteorological phenomena using ResNet, a deep convolutional neural network.
            With a dataset containing 12373 images, the ResNet model achieves an impressive accuracy of approximately 93%, surpassing other models like VGG16, Xception, and CNN. This advancement streamlines weather image classification, enhancing forecasting research.</p>
          <a href="https://github.com/sowmyacheedu/Weather_Classification_System">Learn More</a>
        </div>
        <div className="project-block">
          <img src={p5} alt="p5" />
          <h3>Image Steganography using LSB</h3>
          <p>The project combines steganography and cryptographic encryption to secure data by hiding messages within digital images. Users can embed secret messages, creating visually unchanged stego-images. With sender and receiver segments protected by a shared password, our tool facilitates seamless, secure communication while preserving data integrity.</p>
          <a href="https://github.com/sowmyacheedu/Image-Steganography-using-LSB">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
