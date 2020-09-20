import React, { Component } from 'react'
import s from './Paragraph.module.css'

const Index = ({ children }) => {
    return <p className={s.paragraph}>{ children }</p>;
}

export default Index;
