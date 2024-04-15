'use client'
import * as React from 'react';
import fs from 'fs'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import sgCard from './sgcard';

import articles from './assets/articles.json?raw';

const sgCards = () => {
    const articlesJson = JSON.parse(articles);

    let dictArticles = [];
    for (const [key, value] of Object.entries(articlesJson)) {
        let tmp = value;
        tmp.id = key;
        dictArticles.push(tmp);
    }

    dictArticles.sort(function(a, b) {
        return parseFloat(b.date) - parseFloat(a.date);
    });

    let populateCards = dictArticles.map(function(elem) {
        return (
            <Grid item xs={6} key={btoa(elem.id)}>
                {sgCard(elem)}
            </Grid>
        );
    });      

    return (
        <React.Fragment>
            <Grid container spacing={2} alignItems="stretch">
                {populateCards}
            </Grid>
        </React.Fragment>
      );
};

export default sgCards;