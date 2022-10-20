import { Container } from "./styles";
import Image from "next/image";
import { useState } from "react";
import { Title } from "../Title";


const gallery = [{
    id: 1,
    url: "/images/gallery1.png"
},
{
    id: 2,
    url: "/images/gallery2.png"
},
{
    id: 3,
    url: "/images/gallery3.png"
},
{
    id: 4,
    url: "/images/gallery4.png" 
},]

export function Photos(){
    const [mainImage, setMainImage] = useState("/images/gallery1.png");
    const [selectedImage, setSelectedImage] = useState(1);

    function handleSetMainImage(id: number){
        setMainImage(`/images/gallery${id}.png`);
        setSelectedImage(id);
    }


    return(
        <Container data-aos="fade-up">
            <figure className="main">
                <Image
                    src={mainImage}
                    alt="foto da barbearia"
                    layout="fill"
                    objectFit="cover"
                />
            </figure>

            <div className="images-container">
                {gallery.map(galleryItem => (
                    <figure key={galleryItem.id} className={galleryItem.id == selectedImage ? 'image-single selected-image' : 'image-single' } onClick={() => handleSetMainImage(galleryItem.id)}>
                        <Image
                            src={galleryItem.url}
                            alt="foto da barbearia"
                            layout="fill"
                            objectFit="cover"
                        />
                    </figure>
                ))}
            </div>

        </Container>
    );
}