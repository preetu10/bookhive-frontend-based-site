const AboutUs = () => {
  return (
    <div className="text-center  my-12 min-h-screen">
      <p className="font-bold  text-4xl my-4">Welcome to Book Hive!</p>
      <p className="mx-auto text-center  text-lg">
        We are passionate about providing facilities according to our users
        requirement and their desires for books.{" "}
      </p>
      <p className="mx-auto text-center  text-lg">
        Book Hive is an online platform dedicated to book enthusiasts, providing
        a hub for readers to discover, discuss, and engage with a wide range of
        literary works. Whether you are an avid reader seeking your next
        favorite novel or an author looking to connect with your audience, Book
        Hive offers a vibrant community and a plethora of features to cater to
        your literary needs.
      </p>
      <p className="font-bold  text-4xl my-4">Key Features and Characteristics</p>
      <ul className="text-start text-lg list-disc px-8 py-3">
        <li>
          <span className="font-bold">Book Discovery</span>: Explore an extensive collection of books
          via our website.
        </li>
        <li>
          <span className="font-bold">Save to Wishlist</span>: Users can save their desired books to
          read later so that they can get the book easily and it saves their
          time.
        </li>
        <li>
          <span className="font-bold">Mark as Read</span>: Users can mark the books which they have
          read, and thus they can easily identify which books have been read by
          them.
        </li>
        <li>
          <span className="font-bold"> Details of Books</span>: Detailed information of all books are
          provided here including image of cover page of book, publisher,
          author, number of total pages, rating, and reviews.
        </li>
        <li>
          <span className="font-bold">Analyzing Reading Capability</span>: Through our Pages to Read
          section, a reader can easily analyze his capability of reading by
          seeing the bar chart including total page number of his read books.
        </li>
      </ul>
      <p className="font-bold  text-4xl my-4">Why Choose Us?</p>
      <ul className="text-start text-lg list-disc px-8 py-3">
        <li>
          <span className="font-bold">Quality Content</span>: 
          We curate only the best books and resources to ensure a rewarding experience for our users.
        </li>
        <li>
          <span className="font-bold">User-Friendly Interface</span>: 
          Our website is designed with you in mind, offering a seamless and intuitive browsing experience.
        </li>
        <li>
          <span className="font-bold">Constant Innovation</span>: 
          We are always striving to improve and innovate, bringing you new features and updates to enhance your journey with us.
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
