import React, {useState} from "react"
import FilmList from "../Components/FilmList"
import Footer from "./Footer"
import Header from "./Header"
import '../App.css';

const UpcomingFilmBox = () => {
    const [films, setFilms] = useState(
        [
          {
            id: 1,
            filmName:"Godzilla vs. Kong",
            link: "https://www.imdb.com/title/tt5034838/?ref_=cs_ov_tt"
          },
          {
            id: 2,
            filmName: "Mortal Kombat" ,
            link: "https://www.imdb.com/title/tt0293429/?ref_=cs_ov_tt"
          },
          {
            id: 3,
            filmName:"Black Widow",
            link: "https://www.imdb.com/title/tt3480822/?ref_=cs_ov_tt"
          },
          {
            id: 4,
            filmName: "Fast & Furious 9" ,
            link:"https://www.imdb.com/title/tt5433138/?ref_=cs_ov_tt"
          }
        ]
      )


    return(
        <>
    <Header></Header>
    <FilmList films={films}></FilmList>
    <Footer></Footer>

        </>

    )
}

export default UpcomingFilmBox