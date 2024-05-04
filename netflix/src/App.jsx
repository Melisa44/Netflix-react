import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header.jsx';
import HomeBan from "./components/HomeBan";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeBan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/dashboard" element={
          <React.Fragment>
            <Banner/>
            <List title="Netflix Originals" param="originals"/>
            <List title="Trending Now" param="trending"/>
            <List title="Now Playing" param="now_playing"/>
            <List title="popular" param="popular"/>
            <List title="Top Rated" param="top_rated"/>
            <List title="Upcoming" param="upcoming"/>
          </React.Fragment>
        }/>
      </Routes>
    </React.Fragment>
  );
}

export default App;

