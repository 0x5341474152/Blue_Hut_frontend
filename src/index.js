import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css"
import {
  CategoryProvider,
  DateProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
  HotelProvider,
  AlertProvider
} from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <DateProvider>
          <FilterProvider>
            <AuthProvider>
              <WishlistProvider>
                <HotelProvider>
                  <AlertProvider>
                    <App />
                  </AlertProvider>
                </HotelProvider>
              </WishlistProvider>
            </AuthProvider>
          </FilterProvider>
        </DateProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);