import { Products } from './components/products';
import contents from './contentData/content';
import siteOptions from './contentData/siteOption';
import CoverPage from './components/cover_page';
import FooterDetails from './components/footer_details';

export default function App() {
  return (
    <>
      {siteOptions.map(option => (
        <CoverPage 
          key={option.id}
          image={option.image}
          siteName={option.siteName}
          description={option.description}
          siteLink={option.siteLink}
        />
      ))}

      <div className='AppContainer'>
        {contents.map(content => (
          <Products 
            key={content.id}
            image={content.image}
            name={content.name}
            description={content.description}
            appLink={content.appLink}
            timeLeft={content.timeLeft}
            downloads={content.downloads}
            rating={content.rating}
          />
        ))}
      </div>

      {/* If you want only one footer, show first */}
      <FooterDetails siteName={siteOptions[0].siteName} />
    </>
  );
}
