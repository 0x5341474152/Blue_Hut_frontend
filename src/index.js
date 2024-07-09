import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AlertProvider as Alertp } from './contexts/AlertContext';
import { AuthProvider as Authp } from './contexts/AuthContext';
import { CategoryProvider as Categoryp } from './contexts/CategoryContext';
import { DateProvider as Datep } from './contexts/DateContext';
import { FilterProvider as Filterp } from './contexts/FilterContext';
import { WishlistProvider as Wishlistp } from './contexts/WishlistContext';
import { HotelProvider as Hotelp } from './contexts/HotelContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      
        <Categoryp>
          <Datep>
            <Filterp>
            <Authp>
              <Wishlistp>
                <Hotelp>
                  <Alertp>
                    <App />
                  </Alertp>
                </Hotelp>
              </Wishlistp>
              </Authp>
            </Filterp>
          </Datep>
        </Categoryp>
      
    </Router>
  </React.StrictMode>
);
