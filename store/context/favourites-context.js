import {createContext , useState} from 'react';

export const FavouritesContext = createContext({
    ids:[],
    addFavourites: (id) => {},
    removeFavourites : (id) => {}
});

function CreateContextProvider({children}) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    const addFavourites = (id) => {
        setFavouriteMealIds(currentIds => [...currentIds, id]);
    }

    const removeFavourites = (id) => {
        setFavouriteMealIds(currentIds => currentIds.filter((mealId)=> mealId != id ));
    }

    const value={
        ids: favouriteMealIds,
        addFavourites: addFavourites,
        removeFavourites : removeFavourites
    }
    return(
        <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
    )
}

export default CreateContextProvider;