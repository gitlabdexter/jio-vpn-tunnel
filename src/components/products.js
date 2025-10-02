import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export function Products({ id, image, name, description, rating, appLink }) {
  const [downloadCount, setDownloadCount] = useState(0);

  // Load saved count when component mounts
  useEffect(() => {
    const savedCount = localStorage.getItem(`downloads_${id}`);
    if (savedCount !== null) {
      setDownloadCount(parseInt(savedCount, 10));
    }
  }, [id]);

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`downloads_${id}`, downloadCount.toString());
  }, [id, downloadCount]);

  const handleDownload = () => {
    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    localStorage.setItem(`downloads_${id}`, newCount.toString());
    window.open(appLink, "_blank"); // open APK link
  };

  return (
    <div className="productList">
      <div className="productCard">
        <img src={image} alt="app-img" className="productImage" />
        <div className="productCard__content">
          <h3 className="productName">{name}</h3>

          <div className="displayStack__1">
            <select className="productPrice">
              {description.map((desOption, index) => (
                <option key={index} value={desOption}>
                  {desOption}
                </option>
              ))}
            </select>
            <div className="productRating">
              {[...Array(rating)].map((_, index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
          </div>

          <div className="displayStack__2">
            <p>Downloads: {downloadCount}</p>
            <button className="productTime" onClick={handleDownload}>
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
