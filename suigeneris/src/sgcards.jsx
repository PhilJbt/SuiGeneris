'use client'
import * as React from 'react';
import fs from 'fs'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';

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

    let populateCards = dictArticles.map(function(item) {
        return (
            <Grid xs={6} key={btoa(item.id)}>
                <Card>{sgCard(item)}</Card>
            </Grid>
        );
    });      

    return (
        <React.Fragment>
            {populateCards}
        </React.Fragment>
      );
};

export default sgCards;