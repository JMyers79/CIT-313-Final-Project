
import '../App.css';
import Accordion from '../componets/Accordion';
import Carousel from '../componets/Carousel';
import Pricing from '../componets/Pricing';
import { accordionData, carouselData } from '../data';

function Home() {
  return (
    <div className="App">
      <section className="w-full">
        <h2 className="text-2xl font-semibold mb-4 px-6">Phone Offers</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <Carousel items={carouselData} />
          </div>
          <div className="flex-1">
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Pricing />
        </div>
      </section>
      
    </div>
  );
}

export default Home;
