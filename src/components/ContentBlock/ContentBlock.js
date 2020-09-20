import React from 'react';
import content from './ContentBlock.module.css';
import { ReactComponent, ReactComponent as ReactLogoSvg } from './img/logo.svg';

const ContentBlock = ({ children }) => {

    return (
        <div className={content.content} >
            <div className={content.wrap}>
                { children }
                <ReactComponent className={content.reactLogo, content.loader} />
            </div>
        </div>
    );
}

export default ContentBlock;