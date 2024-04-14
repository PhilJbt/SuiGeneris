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
  if (itemExists(content))
    return (
      <DivInfo dangerouslySetInnerHTML={{__html: content}} />
    );
}

const DivAdd = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
}));

function formatAdd(content) {
  if (itemExists(content))
    return (
      <React.Fragment>
        <Divider sx={{ my: 1 }} />
        <DivAdd dangerouslySetInnerHTML={{__html: content}} />
      </React.Fragment>
    );
}

function itemExists(content) {
  return typeof(content) !== "undefined"
    && (content || "").length > 0;
}



const sgCard = (item) => (
  <React.Fragment>
    <Paper elevation={3} > {/* variant="outlined" */}
      <Card id={item.id}>
        <CardContent>
          <Box sx={{ p: 1 }}>
            <Typography variant="h5" component="div">
              { item.titre }
              { item.isnew ? (
                // <NewReleasesTwoToneIcon sx={{ color: newIconColor, ml: 1 }} />
                <Chip label="Nouveau" size="small" sx={{ color: linkIconColor, ml: 1 }} />
              ) : (null)}
            </Typography>
          </Box>
          <Divider />
          <Stack sx={{ width: '100%', mt: 1 }} spacing={1}>
            { itemExists(item.wrong) ? (
              <Alert icon={<NotInterestedIcon />} sx={{ fontWeight: 'bold' }} severity="error">
                <span dangerouslySetInnerHTML={{__html: item.wrong}} />
              </Alert>
            ) : (null)}
            { itemExists(item.right) ? (
              <Alert icon={<CheckIcon />} sx={{ fontWeight: 'bold' }} severity="success">
                <span dangerouslySetInnerHTML={{__html: item.right}} />
              </Alert>
            ) : (null)}
          </Stack>
          <Box sx={
            {
              p: (itemExists(item.info) && itemExists(item.add) ? 1 : 0),
              mt: 1
            }}>
            {/* <Typography variant="body1" component="div">
              { item.info }
            </Typography>
            <Typography variant="body2" component="div">
              { item.add }
            </Typography> */}
            { formatInfo(item.info) }
            { formatAdd(item.add) }
          </Box>
        </CardContent>
        <IconButton href={'#' + item.id} sx={{ float: 'right', color: linkIconColor, ml: 1 }} >
          <LinkIcon />
        </IconButton>
      </Card>
    </Paper>
  </React.Fragment>
);

sgCard.defaultProps = {
  titre: "title",
  content: "content",
  isnew: false,
}

export default sgCard;