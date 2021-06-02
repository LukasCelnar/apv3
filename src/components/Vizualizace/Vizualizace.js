import React from 'react';
import './Vizualizace.scss';
import images from './images.json';
import { useLocation } from 'react-router-dom';

const Vizualizace = () => {

    const code = useLocation().pathname.split('/')[1]

    const renderVizualizace = () => {
        return images.map((item, i) => {
            switch (item.type) {
                case 'img':
                    const imgPath = `/assets/${code}/${item.img}`
                    return <div key={i} className={`vizualizace__div-${item.id}`}><a href={imgPath}><img className='vizualizace__img' src={imgPath} alt={item.img} /></a></div>;
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
