import {LOGO_URL} from "../constant";


const Header = () => {

  return (
    <div className="flex items-center justify-between sticky top-0 z-50 bg-[#fcfcfc] p-2">
      <img className="w-[109px] h-auto" style={{ width: "109px" }} src={LOGO_URL} alt="PokemonLogo" />
    </div>
  );
};

export default Header;