import React, { Component } from 'react'
import s from './Header.module.css'

const Index = ({ children }) => {
    return <h1 className={s.header}>{ children }</h1>;
}

export default Index;
