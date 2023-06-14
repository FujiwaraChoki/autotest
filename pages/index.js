import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";
import Reviews from "../components/Reviews";
import Wave from 'react-wavify'

const Home = () => {
  return (
    <>
      <button onClick={(e) => {
        fetch('/api/deleteUsers')
      }} className="fixed bottom-0 right-0 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Remove All Users
      </button>
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
