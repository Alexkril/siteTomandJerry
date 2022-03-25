import React from "react";
import s from './sliderFoto.module.scss'
import { Carousel } from 'antd';
import img1 from '../../../assets/galery/img11.jpeg'
import img2 from '../../../assets/galery/img111.jpeg';
import img3 from '../../../assets/galery/img44.jpeg';
import img4 from '../../../assets/galery/img444.jpeg';
import img5 from '../../../assets/galery/img33.jpeg';
import img6 from '../../../assets/galery/img333.jpeg';

const SliderFoto = () => {

    const contentStyle = {

        height: '300px',
        color: '#000000',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#868686',
        margin: '0 auto',

    };

    return (
        <div className={s.carouselContainer}>
            <Carousel  vertical verticalSwiping >

                <div>
                    <h3 style={contentStyle}>
                        <img src={img1} alt="" />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={img2} alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={img3} alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={img4} alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={img5} alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={img6} alt="" /></h3>
                </div>

            </Carousel>


        </div>
    )
}
export default SliderFoto