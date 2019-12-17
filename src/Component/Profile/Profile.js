import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


export default function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid>
          <Grid>
            <Typography variant="title" className={classes.Header}>
              My Profile
          </Typography>
          </Grid>
        </Grid>
        <Divider />



        <Grid container spacing={16}>
          <Grid item>
            <Avatar className={classes.Avatar}>R</Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs className={classes.isi}>
                <Typography variant="headline">
                  Admin
                </Typography>
                <Typography color="textSecondary">@Admin</Typography>
                <div>
                  <Button color="primary" className={classes.button}>
                    Edit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />



        <div className={classes.bottomisi}>
            <Grid container spacing={8} >
              <Grid container item xs={12} spacing={24} >
                <Grid item xs={4}>
                  <Typography variant="title">
                    2
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Shots
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="title">
                    2
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Followers
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="title">
                    2
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Following
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
        </div>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};