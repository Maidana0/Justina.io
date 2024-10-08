import PropTypes from "prop-types";
import { useLocation } from "wouter";

const CardButton = ({ image, title, addClassName, link }) => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation()
  return (
    <div className={`card rounded-2xl bg-light backdrop-blur-sm border border-orange  min-size-[150px] md:size-[185px] flex items-center justify-center p-2 card-shadow cursor-pointer hover:border-fucsia hover:bg-white transition duration-200 ease ${addClassName}`} onClick={() => setLocation(link)}>
      <div className="flex flex-col gap-5 items-center">
        <div className="bg-lightGreen border border-black rounded-full size-20 flex items-center justify-center">
          <img src={image} alt={title} className="size-14 md:size-16" />
        </div>
        <div>
          <p className="text-center font-poppins font-semibold text-lg">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

CardButton.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardButton;
