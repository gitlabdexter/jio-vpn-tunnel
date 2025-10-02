import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

export function Products(props) {
  const { id, image, name, description, appLink, timeLeft, rating } = props;

  // Load initial downloads from localStorage
  const [downloads, setDownloads] = useState(() => {
    const saved = localStorage.getItem(`downloads_${id}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  // Save downloads count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`downloads_${id}`, downloads);
  }, [id, downloads]);

  // Handle download click
  const handleDownload = () => {
    setDownloads(prev => prev + 1);
    window.open(appLink, '_blank'); // open download link
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
            <button className='productTime' onClick={handleDownload}>
              DOWNLOAD
            </button>
            <p className="download-text">
              Client Downloads: {downloads}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
