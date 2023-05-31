import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";
import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Hero />
      </div>
      <LearnMore />
      <Statistic />
    </>
  );
};

export default Home;
