import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className="nav-bar-flexbox">
          <img className="logo-size" src="images/project-aa-logo-small.jpg" />


            <a href="aura-member.css"><a href="aura-member.html">
                <img className="aura-member-size" src="images/nav-bar/button_aura-member3.png" />
            </a></a>  


            <a href="prize-booth.css"><a href="prize-booth.html">
                <img className="prize-booth-size" src="images/nav-bar/button_prize-booth.png" />
            </a></a>

            {/*
            <form action="">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  style={{ backgroundColor: "cyan" }}
                />
                <input
                  type="text"
                  placeholder="Password"
                  name="psw"
                  style={{ backgroundColor: "cyan" }}
                />
                <button type="submit" style={{ backgroundColor: "mediumpurple" }}>
                  Login
                </button>
                <button type="submit" style={{ backgroundColor: "mediumpurple" }}>
                  Register
                </button>
            </form>
            */}


            <div>
              <img className="ticket-icon-size" src="images/tickets/aura-ticket-transparent.png" />
              <div className="ticket-counter">7,777</div>
            </div>


            <div>
              <a href="aura-coins.css"><a href="aura-coins.html">
                <img className="aura-coin" src="/images/AC/AC-gold-coin.png" />
              </a></a>
              <div className="coin-counter">777</div>
            </div>

            <div>
              <a href="cart.css"><a href="cart.html">
                <img className="cart-size" src="images/nav-bar/cart-icon.png" />
              </a></a>
            </div>
        </div>
    )
}

export default Header;