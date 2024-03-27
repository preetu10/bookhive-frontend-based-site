const ContactUs = () => {
  return (
    <div className="text-center bg-[#13131308] py-36 rounded-lg my-4 min-h-screen">
      <p className="font-bold  text-4xl my-4">Get In Touch</p>
      <p className="mx-auto text-center  text-lg">
        We are here to help. Our team is ready to assist you with any inquiries.
        Stay connected with our book-loving community. Find our contact details
        below for easy communication.
      </p>
      <section className="flex flex-row gap-8 mx-auto items-center justify-center py-8">
        <div>
          <h5 className="font-bold  text-2xl my-4">Our Location</h5>
          <p className="mx-auto text-center  text-lg">
            University of Chittagong, Chittagong 4331
          </p>
        </div>
        <div>
          <h5 className="font-bold  text-2xl my-4">Our Phone Number</h5>
          <p className="mx-auto text-center  text-lg"> Office: +600127890</p>
        </div>
        <div>
          <h5 className="font-bold  text-2xl my-4">Our Email</h5>
          <p className="mx-auto text-center  text-lg">bookhive@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
