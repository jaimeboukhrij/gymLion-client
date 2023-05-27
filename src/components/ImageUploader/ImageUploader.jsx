import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';

const ImageUploader = ({ profImg }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (imageUrl) {
            profImg(imageUrl);
        }
    }, [imageUrl, profImg]);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ysg6er97');

        // Realizar la solicitud de carga a Cloudinary
        fetch('https://api.cloudinary.com/v1_1/djpeqlbo6/image/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Obtener la URL de la imagen desde la respuesta de Cloudinary
                const imageUrl = data.secure_url;
                setImageUrl(imageUrl);
            })
            .catch((error) => {
                console.error('Error al cargar la imagen:', error);
            });
    };

    return (
        <input type="file" accept="image/*" onChange={handleUpload} />

    );
};

export default ImageUploader;
