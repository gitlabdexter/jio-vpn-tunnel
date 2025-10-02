 import { Products } from './components/products';
 import contents from './contentData/content';
 import siteOptions from './contentData/siteOption';
 import CoverPage from './components/cover_page';
 import FooterDetails from './components/footer_details';

 export default function App() {
     return(
        <>
        {siteOptions.map(siteOptions => (
                    <CoverPage 
                        key={siteOptions.id}
                        image={siteOptions.image}
                        siteName={siteOptions.siteName}
                        description={siteOptions.description}
                        siteLink={siteOptions.siteLink}
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

            <FooterDetails
            key={siteOptions.id}
            siteName={siteOptions.siteName}/>
            </>
     )
 }
