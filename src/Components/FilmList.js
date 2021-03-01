import React from "react";
import Film from "../Components/Film"

const FilmList = ({films}) => {

    const filmNodes = films.map(({id, filmName, link}) => {
        return(
            <ul>
                <li>
                    <Film key={id} filmName={filmName} link={link}></Film>
                </li>
            </ul>
        )
    })


    return(
            <>
            {filmNodes}
            </>
    )
}

export default FilmList