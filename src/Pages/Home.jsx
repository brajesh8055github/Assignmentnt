import hero from '../Images/hero.jpg';

const Home = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to Communication Tracker Application
        </h1>
      </div>
    </div>
  );
};

export default Home;
