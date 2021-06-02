import React from 'react';
import './Pdf.scss';

const Pdf = ({ pdfPath }) => {
    return (
        <div className='pdf'>
            <object data={pdfPath + '#view=Fit'} type='application/pdf' width='100%' height='100%'>
                <div className='pdf__error'>
                    <img className='pdf__error-img' src='/imgs/pdf-error.png' alt='pdf-error'/>
                    <div><a className='pdf__error-btn' download={pdfPath} href={pdfPath}>STÁHNOUT ZDE</a></div>
                </div>
            </object>
        </div>
    );
};

export default Pdf;