import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Isi from '../Isi';

export default function Contain(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {/* <Paper className={classes.paper}> */}
                <Isi />
                <Isi />
            {/* </Paper> */}
        </div>
    );
}

Contain.propTypes = {
    classes: PropTypes.object.isRequired,
};