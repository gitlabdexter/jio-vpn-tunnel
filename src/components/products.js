import { useState, useEffect } from "react";

export function Products({ image, name, description, rating, appLink, timeLeft, downloads }) {
  const [downloadCount, setDownloadCount] = useState(downloads);

  // Load saved count from localStorage (so it doesn't reset on refresh)
  useEffect(() => {
    const savedCount = localStorage.getItem(name);
    if (savedCount) {
      setDownloadCount(parseInt(savedCount, 10));
    }
  }, [name]);

  // Save count to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem(name, downloadCount);
  }, [downloadCount, name]);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    window.open(appLink, "_blank"); // open the download link
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description.join(", ")}</p>
      <p>⭐ {rating}</p>
      <p>Downloads: {downloadCount}</p>
      <button onClick={handleDownload}>DOWNLOAD</button>
    </div>
  );
}
