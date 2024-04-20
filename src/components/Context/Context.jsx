import { createContext, useContext, useState } from "react";
import {noticiasFaunaMarina} from '../../Scripts/Noticias'; 

export const newsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState(noticiasFaunaMarina);

    return (
        <newsContext.Provider value={{ news, setNews }}>
            {children}
        </newsContext.Provider>
    );
};
