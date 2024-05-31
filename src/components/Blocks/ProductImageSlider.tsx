import { GetServerSideProps } from 'next';
import CustomCarousel from '@/components/Carousel/CustomCarousel';
import { Heading } from '@/components/Heading';

interface HomePageProps {
  carouselItems: { src: string; alt: string }[];
  deviceType: string;
  responsive: any;
  dotListClass: string;
  customTransition: any;
}

const carouselItems = [
  {
    src: 'https://images.pexels.com/photos/9588211/pexels-photo-9588211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Item 1',
  },
  {
    src: 'https://images.pexels.com/photos/9588206/pexels-photo-9588206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Item 2',
  },
  {
    src: 'https://images.pexels.com/photos/9588206/pexels-photo-9588206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Item 3',
  },
  {
    src: 'https://images.pexels.com/photos/9588211/pexels-photo-9588211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Item 4',
  },
];

const ProductImageSlider: React.FC<HomePageProps> = ({
  deviceType,
  responsive,
  dotListClass,
  customTransition,
}) => {
  return (
    <div>
      <Heading as="h2" className="mt-2 text-center">
        Screenshots
      </Heading>
      <div className="px-12 mt-6">
        <CustomCarousel
          responsive={responsive}
          deviceType={deviceType}
          dotListClass={dotListClass}
          customTransition={customTransition}
        >
          {carouselItems && carouselItems.length > 0 ? (
            carouselItems.map((item, index) => (
              <div key={index} className="px-4">
                <img className="rounded-lg" src={item.src} alt={item.alt} />
              </div>
            ))
          ) : (
            <div>No items to display</div>
          )}
        </CustomCarousel>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  // Fetch or define your items data here

  // Determine the device type based on user agent or other logic
  const userAgent = context.req ? context.req.headers['user-agent'] : navigator.userAgent;
  const deviceType = /Mobile|Android|iP(ad|hone)/i.test(userAgent) ? 'mobile' : 'desktop';

  return {
    props: {
      carouselItems: carouselItems.length > 0 ? carouselItems : null,
      deviceType,
    },
  };
};

export default ProductImageSlider;
