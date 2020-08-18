import React from "react";

const sponsorImg = "images/sponsors/sponsor_logo_1000x500.png";

const H3 = ({ children }) => <h3 className="text-xl text-center mt-10">{children}</h3>

const Sponsors = (props) => {
  return (
    <section>
      <h2 className="text-3xl text-center">Sponsors</h2>

      <H3>Gold</H3>
      <div className="rounded-lg shadow-xl p-6 pt-0 m-6 w-8/12 sm:w-6/12 md:w-6/12 lg:w-4/12 mx-auto">
        <img src={sponsorImg} className="my-auto p-3 pt-8" alt="Logo: Sponsor" />
      </div>

      <H3>Silver</H3>
      <div className="rounded-lg shadow-xl p-6 pt-0 m-6 w-7/12 sm:w-5/12 md:w-2/5 lg:w-3/12  mx-auto">
        <img src={sponsorImg} className="pt-10" alt="Logo: Sponsor" />
      </div>

      <H3>Bronze</H3>
      <div className="rounded-lg shadow-xl p-6 pt-0 m-6 w-6/12 sm:w-4/12 md:w-4/12 lg:w-1/5  mx-auto">
        <img src={sponsorImg} className="my-auto pt-3" alt="Logo: Sponsor" />
      </div>
    </section>
  )
};

export default Sponsors;