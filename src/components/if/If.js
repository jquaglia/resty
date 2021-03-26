// import React from 'react';

export const If = ({ condition, children }) => condition ? children : null;
export const isObjectEmpty = object => !!Object.keys(object).length;