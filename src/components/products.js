import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export function Products({ id, image, name, description, rating, appLink, timeLeft, downloads }) {
  const [downloadCount, setDownloadCount] = useState(downloads);

  // Load saved count from localStorage on mount
  useEffect(() => {
    const savedCount = localStorage.getItem(`downloads_${id}`);
    if (savedCount) {
      setDownloadCount(parseInt(savedCount, 10));
    }
  }, [id]);

  // Save count whenever it updates
  useEffect(() => {
    localStorage.setItem(`downloads_${id}`, downloadCount);
  }, [id, downloadCount]);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    window.open(appLink, "_blank"); // open APK link in new tab
  };

  return (
    <div className='productList'>
      <div className='productCard'>
        <img src={image} alt='app-img' className='productImage' />
        <div className='productCard__content'>
          <h3 className='productName'>{name}</h3>

          <div className='displayStack__1'>
            <select className='productPrice'>
              {description.map((desOption, index) => (
                <option key={index} value={desOption}>
                  {desOption}
                </option>
              ))}
            </select>
            <div className='productRating'>
              {[...Array(rating)].map((_, index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
          </div>

          <div className='displayStack__2'>
            <p>Downloads: {downloadCount}</p>
            <button className='productTime' onClick={handleDownload}>
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
