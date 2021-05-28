import React, { useCallback, useEffect, useState } from 'react'
import { URL } from "../constants/url";
import {
    useParams,
    useHistory
} from "react-router-dom";
import Slider from "react-slick";
import { NextArrow } from '../components/NextArrow';
import { PrevArrow } from '../components/PrevArrow';
import { FiChevronLeft } from 'react-icons/fi';

export default function DetailsView() {
    const [currentProperty, setCurrentProperty] = useState({});
    const { id } = useParams();
    const history = useHistory();
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch(URL);
            const responseJSON = await response.json();
            if(response.ok) {
                const filteredProperty = responseJSON.properties.filter(property => property.id === +id );
                setCurrentProperty(filteredProperty[0]);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleGoBack = useCallback(() => {
        history.goBack()
    }, [])

    return (
        <div className="container">
            <h3>Property Details</h3>
            <div className="details-view-container">
                <div className="address-row-container">
                    <button onClick={handleGoBack} className="back-button">
                        <FiChevronLeft size={25} />
                    </button>
                    {currentProperty.address ? 
                        <>
                            <h4>{currentProperty.address.address1}</h4>
                            <h5>{currentProperty.address.city}, {currentProperty.address.state} {currentProperty.address.zip}</h5>
                        </>
                    : null }
                </div>
                <div className="carousel-container">
                    <Slider {...settings}>
                        {!!currentProperty.resources && currentProperty.resources.photos.map(photo =>
                            <div key={photo.id}>
                                <img className="slick-image" alt={photo.id} src={photo.url} />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
