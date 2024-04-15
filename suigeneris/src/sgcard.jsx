'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import LinkIcon from '@mui/icons-material/Link';
import InfoIcon from '@mui/icons-material/Info';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import { blue } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import Paper from '@mui/material/Paper';


const newIconColor = blue[500];
const linkIconColor = grey[500];


const DivInfo = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
}));

function formatInfo(content) {
  if (elemExists(content))
    return (
      <DivInfo dangerouslySetInnerHTML={{__html: content}} />
    );
}

const DivAdd = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
}));

function formatAdd(content) {
  if (elemExists(content))
    return (
      <React.Fragment>
        <Divider sx={{ my: 1 }} />
        <DivAdd dangerouslySetInnerHTML={{__html: content}} />
      </React.Fragment>
    );
}

function elemExists(content) {
  return typeof(content) !== "undefined"
    && (content || "").length > 0;
}



const sgCard = (elem) => (
  <React.Fragment>
    <Card id={elem.id} className="cont-highlight" elevation={2}>
      <CardContent>
        <IconButton href={'#' + elem.id} id={'btn_' + elem.id} sx={{ float: 'right', color: linkIconColor, ml: 1 }} >
          <LinkIcon />
        </IconButton>
        <Box sx={{ p: 1 }}>
          <Typography variant="h5" component="div">
            { elem.titre }
            { elem.isnew ? (
              // <NewReleasesTwoToneIcon sx={{ color: newIconColor, ml: 1 }} />
              <Chip label="Nouveau" size="small" sx={{ color: linkIconColor, ml: 1 }} />
            ) : (null)}
          </Typography>
        </Box>
        <Divider />
        <Stack sx={{ width: '100%', mt: 1 }} spacing={1}>
          { elemExists(elem.wrong) ? (
            <Alert icon={<NotInterestedIcon />} sx={{ fontWeight: 'bold' }} severity="error">
              <span dangerouslySetInnerHTML={{__html: elem.wrong}} />
            </Alert>
          ) : (null)}
          { elemExists(elem.right) ? (
            <Alert icon={<CheckIcon />} sx={{ fontWeight: 'bold' }} severity="success">
              <span dangerouslySetInnerHTML={{__html: elem.right}} />
            </Alert>
          ) : (null)}
        </Stack>
        <Box sx={
          {
            p: (elemExists(elem.info) && elemExists(elem.add) ? 1 : 0),
            mt: 1
          }}>
          {/* <Typography variant="body1" component="div">
            { elem.info }
          </Typography>
          <Typography variant="body2" component="div">
            { elem.add }
          </Typography> */}
          { formatInfo(elem.info) }
          { formatAdd(elem.add) }
        </Box>
      </CardContent>
    </Card>
  </React.Fragment>
);


export default sgCard;