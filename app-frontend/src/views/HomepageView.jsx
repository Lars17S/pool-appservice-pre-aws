import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
// import Services from "../components/Services";
import Slider from "../components/Slider";

const HomepageView = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      {/* <Services filters={{}} sort={""} /> */}
      <Footer />
    </div>
  );
};

export default HomepageView;
