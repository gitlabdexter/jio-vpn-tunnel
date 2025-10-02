import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export function Products(props) {
  const [downloads, setDownloads] = useState(props.downloads || 0);

  // Load saved download count on mount
  useEffect(() => {
    const savedDownloads = JSON.parse(localStorage.getItem("downloads")) || {};
    if (savedDownloads[props.id]) {
      setDownloads(savedDownloads[props.id]);
    }
  }, [props.id]);

  // Handle download click
  const handleDownload = () => {
    const newCount = downloads + 1;
    setDownloads(newCount);

    // Save in localStorage
    const savedDownloads = JSON.parse(localStorage.getItem("downloads")) || {};
    savedDownloads[props.id] = newCount;
    localStorage.setItem("downloads", JSON.stringify(savedDownloads));

    // Redirect to APK file
    window.location.href = props.appLink;
  };

  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img src={props.image} alt="app-img" className="productImage" />
        <div className="productCard__content">
          <h3 className="productName">{props.name}</h3>

          <div className="displayStack__1">
            <select className="productPrice">
              {props.description.map((desOption, index) => (
                <option key={index} value={desOption}>
                  {desOption}
                </option>
              ))}
            </select>

            <div className="productRating">
              {[...Array(props.rating)].map((_, index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
          </div>

          <div className="displayStack__2">
            <button className="productTime" onClick={handleDownload}>
              DOWNLOAD
            </button>
          </div>

          {/* 👇 Styled downloads counter */}
          <p className="downloadCount">📥 {downloads} downloads</p>
        </div>
      </div>
    </div>
  );
}
