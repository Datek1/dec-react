import React, {useEffect, useState} from 'react';
import {placeServices} from "../../../services/placeServices";
import Album from "./album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        placeServices.getAllAlbums().then(value => setAlbums(value.data))
    }, [])
    return (
        <div className={'wrapper'}>
            {
                albums.map(value => <Album key={value.id} albums={value}/>)
            }
        </div>
    );
};

export default Albums;