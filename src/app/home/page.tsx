import Navbar from "@/components/HomePage/navbarHome";
import Home from "@/components/HomePage/hero";
import Events from "@/components/HomePage/events";
import Categories from "@/components/HomePage/categories";
import Carousel from "@/components/HomePage/carousel";
import Footer from "@/components/HomePage/footer";
import Upcoming from "@/components/HomePage/upcomingEvents";

const page = () => {
  const images = [];

  return (
    <div className="overflow-x-hidden">
      <div className="z-10">
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div className="justify-center flex">
        <Carousel images={images} />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Upcoming />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
