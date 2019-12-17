import React from 'react';
import PropTypes from 'prop-types';
import Appbar from '../Appbar';
import Drawer from '../Drawer';
import Profile from '../Profile';
import Intro from '../Intro';
import Post from '../Post';
import Shot from '../Shot';
import Grid from '@material-ui/core/Grid';

export default function MyProfile(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <header className="">
                <Appbar />
                <Drawer />
            </header>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={5}>
                        <Profile className={classes.profile} />
                        <Intro className={classes.intro} />
                        <Post />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Shot />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

MyProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};