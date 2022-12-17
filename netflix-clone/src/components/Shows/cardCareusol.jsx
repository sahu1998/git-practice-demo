import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
// import popular from './popular.json';
import './cardCareusol.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
const CardCareusol = ({ category, shows }) => {
    // const [showCaption, setShowCaption] = useState(false);
    return (
        <div
        // style={{ marginBottom: '20px' }}
        >
            <div
                style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: 'white',
                    // margin: '15px 0 15px 3px'
                }}
            >{category}</div>
            <Carousel responsive={responsive}>

                {
                    shows?.map((data, index) => {
                        return (
                            <div
                                className="hoverwrap item"
                                key={index}
                                style={{ position: "relative" }}
                                role="button"
                            >
                                <div>
                                    <img
                                        src={data.path}
                                        // onDragStart={handleDragStart}
                                        alt={data.title}
                                        width="300"
                                    />
                                </div>
                                <div style={{
                                    position: 'absolute'
                                }}
                                    className="hovercap"
                                >
                                    <h6>{data.title}</h6>
                                    <p style={{fontSize: '10px'}}>hello</p>
                                    <div>
                                        <AddCircleOutlineRoundedIcon />
                                        <span style={{fontSize: '10px'}}>Add to list</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }


            </Carousel>
        </div>
    );
}

export default CardCareusol;