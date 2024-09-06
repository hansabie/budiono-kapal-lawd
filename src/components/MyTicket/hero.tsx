import type { NextPage } from "next";
import Ticket from "@/components/MyTicket/ticket";

const Home: NextPage = () => {
  return (
    <main>
      <div className="p-8">
        <section className="mb-8">
          <h2 className="mt-20 text-5xl text-center text-primary font-bold mb-4">
            My Tickets
          </h2>
          <div className="space-y-4 text-secondary">
            <Ticket
              image="/images/pespor.png"
              title="Pestapora"
              date="20 Sep - 22 Sep 2024"
              time="15:00 - 23:59"
            />
            <Ticket
              image="/images/joyland.png"
              title="Joyland"
              date="22 Nov - 24 Nov 2024"
              time="17.00 - 23.00"
            />
            <Ticket
              image="/images/wtf.png"
              title="We The Fest"
              date="19 July - 21 July 2024"
              time="15.00 - 22.00"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-secondary">
            Recommended for you
          </h2>
          <div className="flex space-x-4">
            <div className="w-1/3 p-4 bg-[#c0dacb] rounded">
              <img
                src="/images/synchronize.webp"
                alt="Recommendation 1"
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg text-primary font-bold mt-2">
                Synchronize Fest
              </h3>
              <p className="text-md text-primary mt-2">4 Oct - 6 Oct 2024</p>
            </div>
            <div className="w-1/3 p-4 bg-[#c0dacb] rounded">
              <img
                src="/images/lalala.jpg"
                alt="Recommendation 2"
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg text-primary font-bold mt-2">
                Lalala Fest
              </h3>
              <p className="text-md text-primary  mt-2">23 Aug - 25 Aug 2024</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
