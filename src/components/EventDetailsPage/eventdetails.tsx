import React from "react";

const EventDetails: React.FC = () => (
  <section className="p-6 mt-16">
    <h1 className="text-center text-5xl text-primary font-bold py-3">
      Event Detail
    </h1>
    <h2 className="text-2xl text-secondary font-bold px-3 py-3">
      Timing and Location
    </h2>
    <div className="flex">
      <div className="w-1/2 p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3293936704413!2d106.80308897499846!3d-6.2202229609222375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d81ff223b%3A0x7f2d1c6db9fe661f!2sISTORA%20Senayan!5e0!3m2!1sid!2sid!4v1721473722165!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          aria-hidden={false}
          tabIndex={0}
        ></iframe>
      </div>
      <div className="w-1/2  p-2">
        <div>
          <h3 className="text-xl text-secondary font-bold">Date and Time</h3>
          <p>July 24, 2024</p>
          <p>7:00 PM - 11:00 PM</p>
        </div>
        <div>
          <h3 className="text-xl text-secondary font-bold">Location</h3>
          <p>ISTORA senayan, Jakarta, Indonesia</p>
        </div>
        <div className="mt-3">
          <a
            href="/review"
            className="mt-2 mb-2 bg-primary text-white rounded-md p-2 hover:bg-[#95c0aa]"
          >
            Rate the event!
          </a>
        </div>
        <div className="mt-3">
          <a href="/checkout">
            <button className="mt-2 mb-2 bg-primary text-white rounded-md p-2 hover:bg-[#95c0aa]">
              Buy Tiket
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventDetails;
