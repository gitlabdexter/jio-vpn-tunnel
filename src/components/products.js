import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

export function Products(props) {
  const [downloads, setDownloads] = useState(props.downloads || 0);

  const handleDownload = () => {
    setDownloads(downloads + 1);
    window.open(props.appLink, '_blank'); // open APK in new tab
  };

  return (
    <div className='productList'>
      <div className='productCard'>
        <img src={props.image} alt='app-img' className='productImage' />
        <div className='productCard__content'>
          <h3 className='productName'>{props.name}</h3>

          <div className='displayStack__1'>
            <select className='productPrice'>
              {props.description.map((desOption, index) => (
                <option key={index} value={desOption}>
                  {desOption}
                </option>
              ))}
            </select>

            <div className='productRating'>
              {[...Array(props.rating)].map((_, index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
          </div>

          {/* Downloads counter */}
          <p className='downloadsCount'>Downloads: {downloads}</p>

          <div className='displayStack__2'>
            <button className='productTime' onClick={handleDownload}>
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
