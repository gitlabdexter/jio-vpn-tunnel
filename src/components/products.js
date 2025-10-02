import React, { useState } from "react";

export const Products = ({ image, name, description, rating, downloads, appLink }) => {
  const [downloadCount, setDownloadCount] = useState(downloads || 0);
  const [selectedOption, setSelectedOption] = useState(description[0] || "");

  const handleDownload = () => {
    setDownloadCount(downloadCount + 1);

    // Create hidden link for file download
    const link = document.createElement("a");
    link.href = appLink;
    link.setAttribute("download", name); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>

      {/* Dropdown for types (OVPN, UDP, etc.) */}
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {description.map((desc, index) => (
          <option key={index} value={desc}>
            {desc}
          </option>
        ))}
      </select>

      {/* Ratings */}
      <p>{"★".repeat(rating)}{"☆".repeat(5 - rating)}</p>

      {/* Download button */}
<div className="displayStack__2">
  <a className="appLink" href={props.appLink} onClick={handleDownload}>
    <button className="download-button">DOWNLOAD</button>
  </a>
  <p className="download-text">
    Client Download: {downloadCount}
  </p>
</div>
  );
};
