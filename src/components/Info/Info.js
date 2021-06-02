import React from 'react';
import './Info.scss';

const Info = () => {
    return (
        <div className='info' id='info'>
           <div className='info__header'>PALÁC TRNITÁ - STŘEŠNÍ BYT (B6/08.04)</div>
           <div className='info__content'>
                <img className='info__img info__img-left' alt='main-picutre1' src='/imgs/main1.jpg'/>
                <div className='info__specs'>
                    <div className='info__specs-header'>4+kk</div>
                    <div className='info__specs-content' style={{display: 'flex'}}>
                        <div className='info__specs-content-left-column' style={{width: '65%'}}>
                            <div>Podlaží</div>
                            <div>Užitná plocha</div>
                            <div>Celková plocha</div>
                            <div>Balkon</div>
                            <div>Terasa</div>
                            <div>Sklepní kóje</div>
                            <div>Garážové stání</div>
                            <div>K nastěhování</div>
                        </div>
                        <div className='info__specs-content-right-column' style={{width: '35%'}}>
                            <div>8.NP a 9.NP</div>
                            <div>106,6 m²</div>
                            <div>115,5 m²</div>
                            <div>20,3 m²</div>
                            <div>31,4 m²</div>
                            <div>Ano</div>
                            <div>Ano 2x</div>
                            <div>Podzim 2022</div>
                        </div>
                    </div>
                    <div className='info__specs-footer'>12 999 000 Kč</div>
                </div>
                <img className='info__img info__img-right' alt='main-picture2' src='/imgs/main2.jpg'/>
           </div>
        </div>
    );
};

export default Info;
