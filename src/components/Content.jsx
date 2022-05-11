import React from 'react';
import './Content.css';

const Content = () => {
  return(
    <div className="game-container">
      <div className='game1'>
          {/*
          <a href="game1.css" />
          <a href="game1.html" />
          */}
            <video
              className=""
              width={300}
              height={180}
              autoPlay=""
              loop=""
              muted=""
              >
              <source src="images/game-hover-videos/audiogame.io-AddictingGames.com.gif" />
              Your browser does not support the video tag.
            </video>
            <img
              className="img-hover game1-img-position"
              src="images/game-images/game1-still-image.png"
            />
          {/*<a/><a/>*/}
          <div id="game-popup-box"></div>
      </div>
      
      <div className='game2'>2</div>
      <div className='game3'>3</div>
      <div className='game4'>4</div>
      <div className='game5'>5</div>
      <div className='game6'>6</div>
      <div className='game7'>7</div>
      <div className='game8'>8</div>
      <div className='game9'>9</div>
      <div className='game10'>10</div>
    </div>
  );
}

export default Content;