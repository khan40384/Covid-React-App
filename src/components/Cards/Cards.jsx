import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ( {data: {confirmed, recovered,deaths,lastUpdate}}) => {
    console.log(10);  //bug check
    if(!confirmed){
      return 'loading...';
    }
    return (
        <div className>
            <Grid container spacing={3} justify="center">
              <Grid item component={Card} xs={12} md={3} style = {{marginBottom:'10px',borderBottom:'10px solid rgba(0, 0,255, 0.5)'}} >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                      <CountUp start ={0} end={confirmed.value} duration ={2.5} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                 </Grid>
                 <Grid item component={Card} xs={12} md={3} style = {{marginBottom:'10px',borderBottom:'10px solid rgba(0, 255,0, 0.5)'}}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5"><CountUp start ={0} end={recovered.value} duration ={2.5} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                 </Grid>
                 <Grid item component={Card} xs={12} md={3} style = {{marginBottom:'10px',borderBottom:'10px solid rgba(255, 0,0, 0.5)'}}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5"><CountUp start ={0} end={deaths.value} duration ={2.5} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Deaths of COVID-19</Typography>
                    </CardContent>
                 </Grid>
            </Grid>          
        </div>
        
    )
}

export default Cards;