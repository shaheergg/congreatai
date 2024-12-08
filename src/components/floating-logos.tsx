import Marquee from "react-fast-marquee";

const FloatingLogos = ({ connectors }: { connectors: string[] }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee speed={50} direction="right">
        <div className="flex items-center space-x-4 w-max">
          {connectors.map((connector, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={connector}
                alt=""
                className="h-12 w-12 object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default FloatingLogos;
