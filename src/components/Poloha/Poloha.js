import React from 'react';
import TramIcon from '@material-ui/icons/TramOutlined';
import GpsIcon from '@material-ui/icons/LocationOnOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import './Poloha.scss';

const Poloha = () => {
    return (
        <div className='poloha' id='poloha'>
            <div className='poloha__header'>BRNO, TRNITÁ</div>
            <div className='poloha__content'>
                Developerský projekt Palác Trnitá zaujme svoji jedinečnou polohou. Najdete jej v hlavní rozvojové zóně města Brna, 
                v těsném sousedství historického centra, kde v příštích letech vyroste zcela nová část města. Tato takzvaná Jižní čtvrť 
                má velký potenciál v podobě docházkové vzdálenosti od centra, výhledu na Petrov, revitalizované oblasti řeky Svratky, 
                parků a také nového nádraží.
            </div>
            <div className='poloha__second-header'>JAK SE DOSTANETE K PALÁCI TRNITÁ</div>
            <div className='poloha__second-content'>
                <div className='poloha__second-content-item'>
                    <TramIcon className='poloha__second-content-item-icon' style={{fontSize: 100}}/>
                    <div className='poloha__second-content-item-header'>ADRESA PROJEKTU</div>
                    <div className='poloha__second-content-item-path'>
                        ul. Trnitá,
                        <br/>
                        Brno – Trnitá
                    </div>
                </div>
                <div className='poloha__second-content-item'>
                    <GpsIcon className='poloha__second-content-item-icon' style={{fontSize: 100}} />
                    <div className='poloha__second-content-item-header'>MHD</div>
                    <div className='poloha__second-content-item-path'>
                        Zastávka Opuštěná,
                        <br />
                        Zastávka Úzká,
                        <br />
                        Zastávka Hlavní nádraží
                    </div>
                </div>
                <div className='poloha__second-content-item'>
                    <EmailIcon className='poloha__second-content-item-icon' style={{fontSize: 100}} />
                    <div className='poloha__second-content-item-header'>GPS</div>
                    <div className='poloha__second-content-item-path'>
                        49°11'12.4" N
                        <br />
                        16°36'48.7" E
                    </div>
                </div>
            </div>
            <iframe className='poloha__map' src='https://www.google.com/maps/d/embed?mid=1AbxI63PGclSRzRPDt-gddSE3aZGTFxDO&amp;z=15' title='map' frameBorder='0'></iframe>
        </div>
    );
};

export default Poloha;
