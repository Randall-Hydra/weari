import React from 'react'
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbaar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src="./assets/Logo/try.png" alt="logo" />
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" className='search_prod' />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <a href="/">Connexion</a>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingBagIcon id="icon"/>
            </Badge>
            <p>Panier</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbaar;