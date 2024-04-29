'use client'
import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const filenames = import.meta.glob('./assets/*.json')

import sgCards from './sgcards';

import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

function App() {
  // var files = [];
  // Object.keys(filenames).forEach(key => {
  //   let filenameTmp = key.substr(0, key.lastIndexOf('.'));
  //   filenameTmp = filenameTmp.substr(filenameTmp.lastIndexOf('/') + 1);
  //   filenameTmp
  //   files.push(filenameTmp);
  // });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ py: 5 }}>
        <Alert severity="info" variant="outlined" sx={{ mb: 3 }}>
          <AlertTitle>Bienvenue sur Sui Generis !</AlertTitle>
          L'objectif de cette page est de condenser les erreurs les plus fréquentes en matière de règles et de conventions de la langue française.
        </Alert>
        {/* <Box> sx={{ flexGrow: 1 }} */}
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={filenames}
            sx={{ width: '100%', my: 3 }}
            renderInput={(params) => <TextField {...params} label="Article" />}
            onChange={(event) => {
              console.log(event.target.innerText);
            }}    
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.defaultMuiPrevented = true;
                console.log('k');
              }
            }}
          /> */}
          {/* <Masonry sx={{ width: 'unset', pt: 2 }} columns={2} spacing={3} sequential> */}
            <Stack spacing={{ sm: 2 }} useFlexGap flexWrap="wrap">
                  {sgCards()}
            </Stack>
          {/* </Masonry> */}
        {/* </Box> */}
      </Container>
      <Paper>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Item sx={{ mr: 4 }} xs={{p: 5}}>Sui Generis</Item>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App
