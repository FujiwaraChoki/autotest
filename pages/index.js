import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";
import Statistics from "../components/Statistics";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Hero />
      </div>
      <div className="flex justify-center items-center">
        <LearnMore />
      </div>
      <div className="flex justify-center items-center">
        <Reviews />
      </div>
    </>
  );
};

export default Home;
