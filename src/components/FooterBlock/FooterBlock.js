import React from 'react';
import footer from './FooterBlock.module.css';

const FooterBlock = ({ privacy, name, policy, faq, pcsupport, designed, desBy, developed, devBy, stick }) => {
    return (
        <footer className={footer.footer}>
            <div className={footer.wrap}>
                <strong className={footer.privacy}>
                    { privacy }
                    <span className={footer.stick}>{ stick }</span>   
                    <a href="#" target="_blank">{ name }</a>   
                    <span className={footer.stick}>{ stick }</span>   
                    { policy }   
                    <span className={footer.stick}>{ stick }</span>   
                    <a href="https://t.me/RozhkoMaksym" target="_blank" className={footer.linkFaq}>{ faq }</a>   
                    <span className={footer.stick}>{ stick }</span>   
                    { pcsupport }
                </strong>
                <strong className={footer.privacy, footer.designer}>
                    { designed } <a href="https://github.com/Maksym-Rozhko" target="_blank" className={footer.dev}>{ desBy }</a>  
                    <span className={footer.stick}>{ stick }</span>
                    { developed }
                    <a href="https://www.instagram.com/max_rozhko/" target="_blank" className={footer.dev}>{ devBy }</a>
                </strong>
            </div>
        </footer>
    );
}

export default FooterBlock;