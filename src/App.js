import { Products } from './components/products';
import contents from './contentData/content';
import siteOptions from './contentData/siteOption';
import CoverPage from './components/cover_page';
import FooterDetails from './components/footer_details';

export default function App() {
  return (
    <>
      {/* Render cover page(s) */}
      {siteOptions.map(option => (
        <CoverPage 
          key={option.id}
          image={option.image}
          siteName={option.siteName}
          description={option.description}
          siteLink={option.siteLink}
        />
      ))}

      {/* Render product list */}
      <div className='AppContainer'>
        {contents.map(item => (
          <Products 
            key={item.id}
            id={item.id}                     // ✅ pass id so downloads are tracked
            image={item.image}
            name={item.name}
            description={item.description}
            appLink={item.appLink}
            timeLeft={item.timeLeft}
            rating={item.rating}
          />
        ))}
      </div>

      {/* Render footer - use first siteOption only */}
      {siteOptions.length > 0 && (
        <FooterDetails siteName={siteOptions[0].siteName} />
      )}
    </>
  );
}
