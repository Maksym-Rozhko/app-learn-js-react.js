import React from 'react';
import s from './SectionImg.module.css';



const SectionImg = () => {

    return (
        <div className={s.content} >
           <div className={s.container}>
               <h2 className={s.header}>It's time to have some fun</h2>
               <p className={s.paragraph}>Races are still in development, test and leave your feedback, I will be very grateful to you.</p>
               <a className={s.link} target="_blank" href="https://maksym-rozhko.github.io/raceJS/"> RaceJS - - - Click here Follow and Try</a>
               <p className={s.paragraph}>Сlicking on the link below will take you to my resume where you can find a convenient way to leave your feedback.</p>
               <a className={s.link} target="_blank" href="https://maksym-rozhko.github.io/rsschool-cv/"> My CV - - Click here </a>
           </div>
        </div>
    );
}

export default SectionImg;