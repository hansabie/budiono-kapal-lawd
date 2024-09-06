import Footer from "@/components/HomePage/footer";
import NavbarSearch from "@/components/SearchEventPage/navbarSearch";
import Hero from "@/components/SearchEventPage/hero";

const page = () => {
  return (
    <div>
      <div className="z-10">
        <NavbarSearch />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
