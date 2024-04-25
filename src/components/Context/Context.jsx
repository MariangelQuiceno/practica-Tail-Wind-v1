import { createContext, useContext, useState } from "react";
import {SeaNews} from '../../Scripts/SeaNews'; 

export const newsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState(SeaNews);

    return (
        <newsContext.Provider value={{ news, setNews }}>
            {children}
        </newsContext.Provider>
    );
};
