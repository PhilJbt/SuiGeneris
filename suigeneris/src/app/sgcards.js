'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';

import sgCard from './sgcard';


const sgCards = () => {
    const webpackContext = require.context('/public/res', false, /\.json$/);
    const filenames = webpackContext.keys();
    const key_value_pairs = filenames.map(name => [name.match(/\/(\w+)\.json$/)[1], webpackContext(name)]);
    const messages = Object.fromEntries(key_value_pairs);

    let dictArticles = [];
    for (const [key, value] of Object.entries(messages))
        dictArticles.push(value);
        
    dictArticles.sort(function(a, b) {
        return parseFloat(b.date) - parseFloat(a.date);
    });

    let populateCards = dictArticles.map(function(item) {
        return (
            <React.Fragment>
                <Grid xs={6}>
                    <Card>{sgCard(item)}</Card>
                </Grid>
            </React.Fragment>
        );
    });      

    return (
        <React.Fragment>
            {populateCards}
        </React.Fragment>
      );
};

export default sgCards;