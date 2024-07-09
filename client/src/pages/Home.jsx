import CardWelcome from "../components/molecules/CardWelcome";
import Carrousel from "../components/organisms/Carousel";
import MyOptions from "../components/organisms/MyOptions";

const Home = () => {
  return (
    <section className="container flex flex-col justify-center px-10 pt-24 gap-6">
      <CardWelcome />
      <Carrousel />
      <MyOptions />
    </section>
  );
};

export default Home;
