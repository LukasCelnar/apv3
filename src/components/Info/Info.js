import React, {useEffect, useState} from 'react';
import './Info.scss';
import {useLocation} from 'react-router-dom';
import { Redirect } from 'react-router';

/* const code = useLocation().pathname.split('/')[1] */

//import infoData from '/assets/B60804/infoData.json'

const Info = () => {
    const [infoData, setInfoData] = useState(null)

    const code = useLocation().pathname.split('/')[1];
    
    useEffect(() => {
        
        fetch(`/dynamic/${code}/infoData.json`)
        .then(res => res.json())
        .then(data => setInfoData(data))
        .catch(err => {
            console.log(err)
        })
    }, [infoData, code])
    
    const renderSpecsContent = () => {
        const specsContent = {keys: [], values: []}
        for (const key in infoData.specs.content) {
            specsContent.keys.push(<div key={key}>{key}</div>);
            specsContent.values.push(<div key={key}>{infoData.specs.content[key]}</div>);
        }
        return specsContent;
    }

    if (!infoData) {
        return null
    }


    return (
        <div className='info' id='info'>
           <div className='info__header'>{infoData.header}</div>
           <div className='info__content'>
                <img className='info__img info__img-left' alt='main-picutre1' src='/static/main1.jpg'/>
                <div className='info__specs'>
                    <div className='info__specs-header'>{infoData.specs.header}</div>
                    <div className='info__specs-content' style={{display: 'flex'}}>
                        <div className='info__specs-content-left-column' style={{width: '65%'}}>
                            {renderSpecsContent().keys}
                        </div>
                        <div className='info__specs-content-right-column' style={{width: '35%'}}>
                            {renderSpecsContent().values}
                        </div>
                    </div>
                    <div className='info__specs-footer'>{infoData.specs.price}</div>
                </div>
                <img className='info__img info__img-right' alt='main-picture2' src='/static/main2.jpg'/>
           </div>
        </div>
    );
};

export default Info;
