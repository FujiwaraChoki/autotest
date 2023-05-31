import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";
import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Hero />
      </div>
      <Statistics />
      <LearnMore />
    </>
  );
};

export default Home;
