import React, { useState } from "react";
import Alert from "../../../components/Alert";
import Loader from "../../../components/Loader";

const LocationListingForm = () => {
  const initial_state = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    whatsapp_phone: "",
    gender: "",
    location: "",
    area: "",
    house_type: "",
    light_situation: "",
    meter_situation: "",
    water_situation: "",
    house_age: "",
    home_size: "",
    rent: "",
    expiry_month: "",
    intent_to_leave: "",
    accessibility: "",
    parking: "",
    security: "",
    building: "",
    compound: "",
    landlord_wahala: "",
    main_road_access: "",
    internet: "",
    repair: "",
    neighborhood_situation: "",
    noise_situation: "",
    kitchen_size: "",
    bathroom_size: "",
    balcony: "",
    flooding: "",
    shared: "",
    nearest_bus_stop: "",
    comments: "",
  };
  const [formData, setFormData] = useState(initial_state);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const staticOptions = {
    gender: ["Male", "Female"],
    house_type: [
      "Self-Con/Studio",
      "Mini Flat/1Bed",
      "2Bed Apartment",
      "3Bed Apartment",
      "4Bed Apartment",
      "5Bed Apartment",
    ],
    light_situation: ["Good", "Moderate", "Poor", "Unsure"],
    meter_situation: ["Personal Meter", "Shared Meter", "No Meter"],
    water_situation: [
      "Steady running water",
      "Water but not running",
      "No water",
    ],
    house_age: [
      "newly built",
      "1-3 years",
      "4-7 years",
      "7-15 years",
      "very old",
    ],
    home_size: ["small", "medium", "spacious", "unusually spacious"],
    rent: [
      "below 600k",
      "600k",
      "700k",
      "800k",
      "900k",
      "1m",
      "1.1m-1.5m",
      "1.5m-2.5m",
      "2.5m-4m",
      "over 4m",
    ],
    expiry_month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    intent_to_leave: [
      "ready now",
      "1-2months",
      "3-5months",
      "5-11months",
      "over a year",
    ],
    accessibility: ["accessible by car", "not accessible by car"],
    parking: ["gated car parking", "street car parking", "no parking"],
    security: [
      "gate security",
      "estate security",
      "no security but secure",
      "unsure",
    ],
    building: [
      "bungalow",
      "BQ boys quarters",
      "one storey building",
      "two storey building",
      "three storey building",
      "four storey building",
      "more than four storey",
    ],
    compound: ["no compound", "tiny", "medium", "large"],
    landlord_wahala: ["none", "small", "medium", "large"],
    main_road_access: [
      "main road nearby",
      "3-5 minutes drive to main road",
      "6-10 minutes drive to main road",
    ],
    internet: ["strong", "moderate", "poor"],
    repair: ["no repair", "little repair", "moderate repair", "major repair"],
    neighborhood_situation: [
      "mostly working class",
      "mostly young people",
      "mostly students",
      "unsure",
    ],
    noise_situation: ["Quiet", "Moderate", "Noisy"],
    kitchen_size: ["small", "medium", "large"],
    bathroom_size: ["small", "medium", "large"],
    balcony: ["no", "small", "normal"],
    flooding: [
      "no",
      "road water if rain",
      "little flooding if rain",
      "flooding if rain",
    ],
    shared: ["Yes", "No", "no but can be shared"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);

    const form_data = new FormData();
    Object.keys(formData).map((key) => {
      form_data.append(key, formData[key]);
    });

    const fileBatchSize = 5;
    for (let i = 0; i < images.length; i += fileBatchSize) {
      const batch = images.slice(i, i + fileBatchSize);
      batch.forEach((file) => form_data.append("images", file));
    }

    try {
      fetch("https://nesthub-server.vercel.app/api/listing/location", {
        method: "POST",
        body: form_data,
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (json.success) {
            setFormData(initial_state);
            setImages([]);
            setOpen(true);
            setMessage("Listing submitted successfully!");
            setShow(false);
          } else {
            setOpen(true);
            setMessage("Failed to submit listing.");
            setShow(false);
          }
        });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Abuja Listing Form">
      <Alert open={open} message={message} />
      <h1>NestHub Other Locations Listing Form</h1>
      <h3>NOTE: THIS FORM IS FOR YOU TO LIST WHERE YOU CURRENTLY LIVE!! </h3>
      {Object.keys(formData).map((key) => (
        <div key={key} className="form-group">
          <label htmlFor={key}>{key.replace(/_/g, " ").toUpperCase()}:</label>
          {staticOptions[key] ? (
            <select
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-label={key.replace(/_/g, " ")}
            >
              <option value="">Select an option</option>
              {staticOptions[key].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={key}
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-label={key.replace(/_/g, " ")}
            />
          )}
        </div>
      ))}
      <div className="form-group">
        <label htmlFor="images">IMAGES:</label>
        <input
          id="images"
          type="file"
          name="images"
          multiple
          onChange={handleFileChange}
          aria-label="Upload Images"
        />
      </div>
      <div className="image-reviewer">
        {images.map((image, index) => (
          <div key={index} className="image-preview">
            <img
              src={URL.createObjectURL(image)}
              alt={`Preview ${index + 1}`}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="black_button"
        aria-label="Submit Listing"
      >
        {!show && "Submit Listing"} {show && <Loader />}
      </button>
    </form>
  );
};

export default LocationListingForm;
