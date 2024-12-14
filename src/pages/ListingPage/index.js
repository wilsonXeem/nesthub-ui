import React from "react";
import "./listing.css";
import Header from "../../components/Header";
import AbujaListingForm from "./components/AbujaListingForm";
import LagosListingForm from "./components/LagosListingForm";
import { useParams } from "react-router-dom";
import LocationListingForm from "./components/LocationListingForm";

function ListingPage() {
  const { location } = useParams();
  return (
    <>
      <Header />
      <div className="listing_form monserat">
        <div className="listing_form_left">
          <h1>List your own place: Find your next place</h1>
          <p>Find your next apartment by listing your current apartment.</p>
          <p>
            Enter only correct information about where you currently live (or a
            house you have access to).
          </p>
          <p>
            Remember you won't get this same house next so there's no reason to
            upsell the house for the next person or lie.
          </p>
          <h2 style={{ marginBottom: "0rem" }}>How it Works;</h2>
          <ol>
            <li>List Your Place</li>
            <li>Gain access to database to find your next place</li>
            <li>Connect with your next place's current tenant</li>
          </ol>
          {location === "abuja" && (
            <p>
              Not looking in Abuja, <a href="/listing/lagos">LIST IN LAGOS</a>
            </p>
          )}
          {location === "lagos" && (
            <p>
              Not looking in Abuja, <a href="/listing/abuja">LIST IN ABUJA</a>
            </p>
          )}
          {location === "location" && (
            <p>
              Not looking in Abuja, <a href="/listing/abuja">LIST IN ABUJA</a>
            </p>
          )}
          <p>
            Not looking in Abuja or Lagos,{" "}
            <a href="/listing/location">LIST HERE</a>
          </p>
        </div>
        {location === "abuja" && <AbujaListingForm />}
        {location === "lagos" && <LagosListingForm />}
        {location === "location" && <LocationListingForm />}
      </div>
    </>
  );
}

export default ListingPage;
