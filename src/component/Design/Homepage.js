import React from "react";
import './Homepage.css';
import book1 from '../image/book-5.png';
import { Link } from "react-router-dom";


const Homepage = () =>{

    return(
        
            <header class="header">
                <div class ="header-1">
                    < a href="#" class="logo">
                        <i class= "fas fa-book">

                        </i>
                        Bookstore
                    </a>
                    <form action="" class="search-form">
                        <input type="search" name="" placeholder="search here..." id="search-box" />
                        <label for="search-box" class="fas fa-search"></label>
                    </form>
                     <div class="icons">
                        <div id="search-btn" class="fas fa-search"></div>
                            <i class='fas fa-search'></i>
                             <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-shopping-cart"></a>
                            <div id="login-btn" class="fas fa-user"></div>
                        </div>
                     </div>
                        <div class="header-2">
                            
                                <nav class="navbar">
                                    <li> 
                                    <Link to="/home">Home</Link>
                                    </li>
                                     
                                 </nav>
                        </div>
                    </header>
                    
        

   



            
     

    )

}
export default Homepage