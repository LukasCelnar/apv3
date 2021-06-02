import React from 'react';
import './Kontakt.scss';

const Kontakt = () => {
    return (
        <div className='kontakt' id='kontakt'>
            <div className='kontakt__content'>
                <img className='kontakt__content-img' src='/imgs/profile.jpg' alt='profile' />
                <div>
                    <div className='kontakt__content-header'>David Celnar</div>
                    <div className='kontakt__content-title'>Manažer prodeje</div>
                    <div className='kontakt__content-email'>celnar@ms-invest.cz</div>
                    <div className='kontakt__content-phone-number'>+420 602 712 097</div>
                </div>
            </div>
            <div className='kontakt__copyright'>© 2020 COPYRIGHT</div>
        </div>
    )
}

export default Kontakt;
