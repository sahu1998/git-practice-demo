import { fontWeight } from "@mui/system";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.css";

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import SearchAppBar from "../Navbar";
import ResponsiveAppBar from "../Navbar/test";
const style = {
    position: 'absolute',
    right: '5%',
    bottom: '32%',
    left: '5%',
    // paddingTop: '1.25rem',
    // paddingBottom: '1.25rem',
    color: '#fff',
    // textAlign: 'center'
    textShadow: '3px 3px 4px #000',
    lineHeight: '25px'

}

const navbarStyle = {
    position: "absolute",
    bottom: "40px",
    right: "40px",

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
};


const Banner = () => {

    return (
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="false"

                style={{ marginBottom: '3%' }}
            >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="https://image.tmdb.org/t/p/w1280/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg" className="d-block w-100" alt="..." />
                        <div className="d-none d-md-block" style={style}>
                            <div style={{ fontSize: '32px', margin: '21.44px 0px' }}>Avengers: Infinity War</div>
                            <p style={{ fontSize: '18px' }}>As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.
                            </p>
                            <div>
                                <AddCircleOutlineRoundedIcon />
                                <span style={{ fontSize: '18px' }}>Add to list</span>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://image.tmdb.org/t/p/w1280/wXsQvli6tWqja51pYxXNG1LFIGV.jpg" className="d-block w-100" alt="..." />
                        <div className="d-none d-md-block" style={style}>
                            <div style={{ fontSize: '32px', margin: '21.44px 0px' }}>The Lion King</div>
                            <p style={{ fontSize: '18px' }}>
                                A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?
                            </p>
                            <div>
                                <AddCircleOutlineRoundedIcon />
                                <span style={{ fontSize: '18px' }}>Add to list</span>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://image.tmdb.org/t/p/w1280/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg" className="d-block w-100" alt="..." />
                        <div className="d-none d-md-block" style={style}>
                            <div style={{ fontSize: '32px', margin: '21.44px 0px' }}>How To Train Your Dragon: The Hidden World</div>
                            <p style={{ fontSize: '18px' }}>As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.
                            </p>
                            <div>
                                <AddCircleOutlineRoundedIcon />
                                <span style={{ fontSize: '18px' }}>Add to list</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"
                    style={{ width: '2%' }}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"
                    style={{ width: '2%' }}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
}

export default Banner;