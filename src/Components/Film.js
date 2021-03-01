import React from "react";

const Film = ({filmName, link}) => {
    return (
        <>
        <a href={link}>{filmName}</a>
        </>
    )
}

export default Film