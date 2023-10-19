import homeStyle from "../../../styles/home.module.css";
const Banner = () => {
  return (
    <div className={homeStyle.banner}>
      <div className="">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Your Personal Assistant
        </h1>
        <p className="text-white">
          One-stop solution for your services. Order any service, anytime.
        </p>
      </div>
    </div>
  );
};

export default Banner;
