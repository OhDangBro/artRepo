import React, { useState, useCallback } from "react";
import './FauxFinish.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photo";


function FauxFinish() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (

<section className="FauxFinishSection">
  
    
<Container className="fauxContainer" maxWidth="lg">
        <Box>
        <h1 className="fauxHeader"> Faux Finishes:</h1>
{/* <p>Faux refers to the art of transforming ordinary surfaces into works of beauty through imitating the appearance of materials like wood, stone, leather, and more.</p>
<p>With the technique of faux painting, one can easily add a touch of warmth and elegance to any room. From crackling, linen texture, and sponge painting to ragging and granite finish, the options are endless.</p>
<p>Not only does this enhance the look of your space, but it can also solve practical problems like hiding old wall imperfections and preventing fingerprints.</p> */}
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
        </Box>
   
      </Container>
    </section>
    
  );
}


export default FauxFinish;
