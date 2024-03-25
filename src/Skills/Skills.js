// Skills.js

import React from 'react';
import './Skills.css';
import cp from '../Images/cpp.png';
import c from '../Images/c.png';
import j from '../Images/java.png';
import p from '../Images/python1.png';
import js from '../Images/javascript.png';
import ht from '../Images/HTML.png';
import css from '../Images/CSS.png';
import re from '../Images/react1.png';
import rest from '../Images/restapi1.png';
import node from '../Images/nodejs.png';
import express from '../Images/expressjs.png';
import mdb from '../Images/mongodb.png';
import mysql from '../Images/mysql.png';
import psql from '../Images/psql.webp';
import nsql from '../Images/nsql.webp';
import gcloud from '../Images/gcloud1.webp';
import flask from '../Images/flask.svg';
import dj from '../Images/django.png';
import dock from '../Images/dockers.png';
import vs from '../Images/vscode.jpeg';
import jupy from '../Images/jupyterhub.png';
import tab from '../Images/tableau.png';
import pb from '../Images/powerbi.jpeg';
import github from '../Images/github.png';
import jira from '../Images/jira.png';
import android from '../Images/android.png';
// import mern from './mern.png';

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
      <div className="skill-block">
          <h4>Programming Languages</h4>
          <ul className="skill-list">
            <li className="skill-item">
              <span role="img" aria-label="Python" className="skill-icon"><img src={p} alt="p" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="Java" className="skill-icon"><img src={j} alt="j" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="JavaScript" className="skill-icon"><img src={js} alt="js" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="C++" className="skill-icon"><img src={cp} alt="cp" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="C++" className="skill-icon"><img src={c} alt="c" className="skill-image"/></span>
            </li>
          </ul>
        </div>
        <div className="skill-block">
          <h4>Web Technologies</h4>
          <ul className="skill-list">
            <li className="skill-item">
              <span role="img" aria-label="HTML" className="skill-icon"><img src={ht} alt="ht" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="CSS" className="skill-icon"><img src={css} alt="css" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={mdb} alt="mdb" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={express} alt="express" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="JavaScript" className="skill-icon"><img src={re} alt="re" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="Node.js" className="skill-icon"><img src={node} alt="node" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={rest} alt="rest" className="skill-image"/></span>
            </li>
          </ul>
        </div>
        <div className="skill-block">
          <h4>Databases</h4>
          <ul className="skill-list">
            <li className="skill-item">
              <span role="img" aria-label="Python" className="skill-icon"><img src={mysql} alt="mysql" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="Java" className="skill-icon"><img src={psql} alt="psql" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="JavaScript" className="skill-icon"><img src={nsql} alt="nsql" className="skill-image"/></span>
            </li>
          </ul>
        </div>
        <div className="skill-block">
          <h4>Frameworks</h4>
          <ul className="skill-list">
            <li className="skill-item">
              <span role="img" aria-label="HTML" className="skill-icon"><img src={gcloud} alt="gcloud" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="CSS" className="skill-icon"><img src={flask} alt="flask" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={dj} alt="dj" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={dock} alt="dock" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="JavaScript" className="skill-icon"><img src={vs} alt="vs" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="Node.js" className="skill-icon"><img src={jupy} alt="jupy" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={tab} alt="tab" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={pb} alt="pb" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={github} alt="github" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={jira} alt="jira" className="skill-image"/></span>
            </li>
            <li className="skill-item">
              <span role="img" aria-label="React" className="skill-icon"><img src={android} alt="android" className="skill-image"/></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
