import {LOGO_URL} from "../constant";


const Header = () => {

  return (
    <div className="flex justify-between sticky top-0 bg-[#fcfcfc]">
      <img className="w-[109px] h-[86px]" src={LOGO_URL} alt="PokemonLogo" />
    </div>
  );
};

export default Header;