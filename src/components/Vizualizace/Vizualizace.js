import React from 'react';
import './Vizualizace.scss';
import images from './images.json';

const Vizualizace = () => {

    const renderVizualizace = () => {
        return images.map((item, i) => {
            switch (item.type) {
                case 'img':
                    return <div key={i} className={`vizualizace__div-${item.id}`}><a href={`imgs/${item.img}`}><img className='vizualizace__img' src={`/imgs/${item.img}`} alt={item.img} /></a></div>;
                case 'header':
                    if (item.empty) {
                        return <div key={i} className={`vizualizace__div-${item.id} vizualizace__header vizualizace__header-empty`}></div>;
                    } else {
                        return <div key={i} className={`vizualizace__div-${item.id} vizualizace__header`}><div>{item.text}</div></div>;
                    }
                default:
                    return null;
            }
        })
    }

    return (
        <div className='vizualizace'>
            {renderVizualizace()}
        </div>
    );
};

export default Vizualizace;
