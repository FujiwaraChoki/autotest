import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";
import Reviews from "../components/Reviews";
import Wave from 'react-wavify'

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
      <Wave fill='#4F46E5'
        paused={false}
        options={{
          height: 5,
          amplitude: 10,
          speed: 0.45,
          points: 5
        }}
        style={{
          bottom: 0,
          position: 'sticky',
          marginBottom: -10
        }}
      />
    </>
  );
};

export default Home;
