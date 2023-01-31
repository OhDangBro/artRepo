import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import './FauxFinish.css';
import PhotoAlbum from "react-photo-album";
import Container from '@mui/material/Container';
import FauxOne from "./img/faux1.jpg"
import FauxTwo from "./img/faux2.jpg"
import FauxThree from "./img/faux3.jpg"
import FauxFour from "./img/faux4.jpg"
import FauxFive from "./img/faux5.jpeg"

const photosBreakfast = [
{
src: FauxOne,
width: 200,
height: 150
},
{
src: FauxTwo,
width: 400,
height: 225
},
{
src: FauxThree,
width: 200,
height: 150
},
{
src: FauxFour,
width: 400,
height: 225
},
{
src: FauxFive,
width: 200,
height: 150
},

];

const FauxFinish = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

return (
<>
<h2 align="center">Breakky</h2>
<Container>
<PhotoAlbum layout="rows" photos={photosBreakfast} onClickImage={(index) => {setPhotoIndex(index); setIsOpen(true);}} />
{isOpen && (
<Lightbox
mainSrc={photosBreakfast[photoIndex].src}
nextSrc={photosBreakfast[(photoIndex + 1) % photosBreakfast.length].src}
prevSrc={photosBreakfast[(photoIndex + photosBreakfast.length - 1) % photosBreakfast.length].src}
onCloseRequest={() => setIsOpen(false)}
onMovePrevRequest={() => setPhotoIndex((photoIndex + photosBreakfast.length - 1) % photosBreakfast.length)}
onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % photosBreakfast.length)}
/>
)}
</Container>
</>
);
};

export default FauxFinish;