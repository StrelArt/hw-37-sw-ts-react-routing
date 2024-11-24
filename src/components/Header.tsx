import Navigation from "./Navigation.tsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useLocation} from "react-router-dom";

const extractHeroIdFromPath = (pathname: string):string | null => {
    const match = pathname.match(/\/about_me\/([^/]+)/);
    return match ? match[1] : null;
}

const Header = () => {
    const location = useLocation();
    const heroId = extractHeroIdFromPath(location.pathname) || defaultHero;
    const heroName = characters[heroId]?.name || 'Unknown Hero';

    console.log("Params heroId:", heroId);
    console.log("Resolved heroName:", heroName);


    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">
                {heroName}
            </h1>
        </header>


    );


};

export default Header;