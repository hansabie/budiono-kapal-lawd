import Footer from "@/components/HomePage/footer";
import Hero from "@/components/MyTicket/hero";
import Navbar from "@/components/MyTicket/navbarMyTicket";

const Page = () => {
  return (
    <div>
      <div>
        <Navbar />
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

export default Page;
