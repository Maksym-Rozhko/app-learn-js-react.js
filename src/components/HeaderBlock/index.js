import React from 'react';
import s from  './HeaderBlock.module.css';

// const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    
//     const styleCover = hideBackground ? { backgroundImage: 'none' } : {};

//     return (
//         <div className={s.cover} style={styleCover}>
//             <div className={s.wrap}>
//                 { title && <h1 className={ s.header }>{ title }</h1> } 
//                 <ReactComponent className={ s.reactLogo } />
//                 { descr && <p className={ s.descr }>{ descr }</p> }
//             </div>
//         </div>
//     );
// }

const HeaderBlock = ({ hideBackground = false, children }) => {
    
    const styleCover = hideBackground ? { backgroundImage: 'none' } : {};

    return (
        <div className={s.cover} style={styleCover}>
            <div className={s.wrap}>
                { children }
            </div>
        </div>
    );
}

export default HeaderBlock;