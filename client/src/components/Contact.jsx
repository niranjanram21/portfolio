import React from 'react';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b2f1052-bf0b-4279-84ac-f84a369503a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 md:mb-16 lgLmb-6">
          <h2 className="mb-2 text-center text-2xl font-bold bg-gradient-to-r from-red-600 to-gray-600 bg-clip-text text-transparent md:mb-6 lg:text-3xl">Get in touch</h2>
        </div>

        <form onSubmit={onSubmit} className="mx-auto grid max-w-screen-sm gap-6 sm:grid-cols-2" >
          <div>
            <label htmlFor="name" className="mb-2 inline-block text-sm text-gray-500 sm:text-base">Your Name</label>
            <input
              id="name"
              name="name"

              className="w-full rounded border bg-transparent px-3 py-2 text-gray-500 outline-none ring-red-300 transition duration-100 focus:ring"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-500 sm:text-base">Email</label>
            <input
              id="email"
              name="email"

              className="w-full rounded border bg-transparent px-3 py-2 text-gray-500 outline-none ring-red-300 transition duration-100 focus:ring"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 inline-block text-sm text-gray-500 sm:text-base">Enter your query</label>
            <textarea
              id="message"
              name="message"
              className="h-48 w-full rounded border bg-transparent px-3 py-2 text-gray-500 outline-none ring-red-300 transition duration-100 focus:ring"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-flex text-slate-100 bg-gradient-to-r from-red-600 to-slate-800 bg-opacity-20 border-0 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 rounded-full text-sm transition ease-in-out delay-50  hover:scale-110 duration-150 ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
