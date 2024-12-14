import React, { useState, useEffect } from "react";
import "./livelisting.css"; // Assuming styles are in Listings.css
import Header from "../../components/Header";

const LiveListingPage = () => {
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [category, setCategory] = useState("Abuja");
  const [lightboxImage, setLightboxImage] = useState(null); // State for lightbox image

  const handleImageClick = (image) => {
    setLightboxImage(image); // Set clicked image for lightbox
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null); // Close lightbox
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/listing/${category}`)
      .then((res) => res.json())
      .then((json) => setListings(json.listing));
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleRowClick = (listing) => {
    setSelectedListing(listing);
  };

  const handleCloseModal = () => {
    setSelectedListing(null);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="listings-container monserat">
        <h1 style={{ marginTop: "0rem", textAlign: "center" }}>Live Listing</h1>
        <div className="category-selector">
          <button
            className={category === "Abuja" ? "active" : ""}
            onClick={() => handleCategoryChange("Abuja")}
          >
            Abuja
          </button>
          <button
            className={category === "Lagos" ? "active" : ""}
            onClick={() => handleCategoryChange("Lagos")}
          >
            Lagos
          </button>
          <button
            className={category === "Other" ? "active" : ""}
            onClick={() => handleCategoryChange("Other")}
          >
            Other Locations
          </button>
        </div>

        <div class="listing_table">
          <table className="listings-table">
            <thead>
              <tr>
                <th>Ref. No</th>
                <th>House Type</th>
                <th>Area</th>
                <th>Rent</th>
                <th>Building</th>
                <th>Nearest Bus Stop</th>
                <th>Intent to Leave</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing._id} onClick={() => handleRowClick(listing)}>
                  <td>{listing.ref_no}</td>
                  <td>{listing.house_type}</td>
                  <td>{listing.area}</td>
                  <td>{listing.rent}</td>
                  <td>{listing.building}</td>
                  <td>{listing.nearest_bus_stop}</td>
                  <td>{listing.intent_to_leave}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedListing && (
          <div className="modal-container">
            <div className="modal-content">
              <button className="close-button" onClick={handleCloseModal}>
                &times;
              </button>
              <h2>Apartment Details</h2>
              <p>
                <strong>Ref. No:</strong> {selectedListing.ref_no}
              </p>
              <p>
                <strong>First Name:</strong> {selectedListing.first_name}
              </p>
              <p>
                <strong>Last Name:</strong> {selectedListing.last_name}
              </p>
              <p>
                <strong>Email:</strong> {selectedListing.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedListing.phone}
              </p>
              <p>
                <strong>WhatsApp Phone:</strong>{" "}
                {selectedListing.whatsapp_phone}
              </p>
              <p>
                <strong>Gender:</strong> {selectedListing.gender}
              </p>
              <p>
                <strong>Location:</strong> {selectedListing.location}
              </p>
              <p>
                <strong>Area:</strong> {selectedListing.area}
              </p>
              <p>
                <strong>House Type:</strong> {selectedListing.house_type}
              </p>
              <p>
                <strong>Rent:</strong> {selectedListing.rent}
              </p>
              <p>
                <strong>Nearest Bus Stop:</strong>{" "}
                {selectedListing.nearest_bus_stop}
              </p>
              <p>
                <strong>Building:</strong> {selectedListing.building}
              </p>
              <p>
                <strong>Intent to Leave:</strong>{" "}
                {selectedListing.intent_to_leave}
              </p>
              <div className="image-preview-container">
                {selectedListing.images.map((image, index) => (
                  <div
                    key={index}
                    className="image-preview"
                    onClick={() => handleImageClick(image)}
                  >
                    <img src={image} alt={`Preview ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {lightboxImage && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={handleCloseLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={handleCloseLightbox}>
              &times;
            </button>
            <img src={lightboxImage} alt="Enlarged View" />
          </div>
        </div>
      )}
    </>
  );
};

export default LiveListingPage;
