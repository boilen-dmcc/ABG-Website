const offices = [
  {
    city: "Kirkuk",
    address: "International Zone, Baghdad, Iraq",
    phone: "+964 (0) 770 131 2180",
    email: "info@albarhamgroup.com"
  }
];

export const Page2Contact = () => {
  return (
    <div className="relative bg-gray-50 box-border caret-transparent py-16">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="box-border caret-transparent gap-x-16 grid grid-cols-1 gap-y-12 md:grid-cols-2">
          <div className="box-border caret-transparent">
            <p className="text-red-600 text-sm box-border caret-transparent tracking-[0.5px] leading-[21px] uppercase mb-4 font-necto_mono">
              Contact Us
            </p>
            <h2 className="text-5xl box-border caret-transparent leading-[52.8px] mb-6 font-apfel_grotezk md:text-[64px] md:leading-[70.4px]">
              We'd Love to Hear From You
            </h2>
            <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-8 mb-12">
              Whether you're planning a major infrastructure project or exploring partnership opportunities, our team is ready to provide expert guidance and support.
            </p>
            <div className="box-border caret-transparent gap-y-8 flex flex-col">
              {offices.map((office, index) => (
                <div key={index} className="box-border caret-transparent">
                  <h3 className="text-2xl font-bold box-border caret-transparent mb-3 font-apfel_grotezk">
                    {office.city}
                  </h3>
                  <p className="box-border caret-transparent mb-2">{office.address}</p>
                  <p className="box-border caret-transparent mb-2">{office.phone}</p>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-red-600 box-border caret-transparent hover:text-red-800 hover:underline"
                  >
                    {office.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white box-border caret-transparent p-8 rounded-lg shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]">
            <h3 className="text-2xl font-bold box-border caret-transparent mb-3 font-apfel_grotezk">
              Get in Touch
            </h3>
            <p className="box-border caret-transparent mb-6">
              Fill out the form and we'll respond within 24 hours.
            </p>
            <form className="box-border caret-transparent gap-y-4 flex flex-col">
              <div className="box-border caret-transparent gap-x-4 grid grid-cols-2 gap-y-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  className="box-border caret-transparent px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  className="box-border caret-transparent px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                />
              </div>
              <input
                type="email"
                placeholder="Work Email *"
                required
                className="box-border caret-transparent px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
              />
              <input
                type="text"
                placeholder="Company"
                className="box-border caret-transparent px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
              />
              <textarea
                placeholder="Message *"
                required
                rows={4}
                className="box-border caret-transparent px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
              ></textarea>
              <button
                type="submit"
                className="text-white text-base bg-red-600 caret-transparent block tracking-[normal] leading-6 text-center uppercase px-6 py-3 rounded font-necto_mono hover:bg-red-800"
              >
                Send Message
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
