import React from 'react';
import { FC } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './main-page.css';
import Button from '../../components/button/button';

const MainPage: FC = () => {
  return (
    <main className="main-page">
      <Header fullView={true} />
      <section className="main-content">
        <section className="intro">
          <h1 className="intro-title">
            Get your next<br></br> trip idea
          </h1>
        </section>
        <section className="search-idea">
          <div className="search-img img-style"></div>
          <div className="search-text block-style">
            <h3 className="search-title">Search for an idea</h3>
            <p className="search-text">Find your next trip idea by searching for a location or activity</p>
            <Button text="Explore" redirectTo="/explore" onClick={() => console.log('Search button clicked')} />
          </div>
        </section>
        <section className="save-idea">
          <div className="save-text block-style">
            <h3 className="save-title">Save ideas you like</h3>
            <p className="save-text">Save the trip ideas you like and access them later</p>
            <Button text="Explore" redirectTo="/explore" onClick={() => console.log('Search button clicked')} />
          </div>
          <div className="save-img img-style"></div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default MainPage;
