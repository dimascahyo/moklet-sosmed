import React from 'react';
import PropTypes from 'prop-types';
import {link} from 'react-router-dom';
import Appbar from '../Appbar';
import Drawer from '../Drawer';
import Profile from '../Profile';
import Intro from '../Intro';
import Post from '../Post';
import Shot from '../Shot';
import PostDashboard from '../PostDashboard';
import Contain from '../Contain';
import TrendingTopic from '../TrendingTopic';
import PopularPeople from '../PopularPeople';
import Grid from '@material-ui/core/Grid';

export default function Dashboard(props) {
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
                    <Grid item xs={12} sm={8}>
                        <PostDashboard />
                        <Contain />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TrendingTopic />
                        <PopularPeople />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};