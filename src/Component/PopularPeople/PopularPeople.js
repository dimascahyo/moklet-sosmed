import React from 'react';
import PropTypes, { array } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import InputBase from '@material-ui/core/InputBase';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import Button from '@material-ui/core/Button';


class PopularPeople extends React.Component {
    state = {
        namadpn: '',
        namablkg: '',
        username: '',
        fotoprofil: '',

    }
    componentDidMount = async () => {

        const response = await axios.
            get(`https://moklet-sosmed.herokuapp.com/api/popular/get`,
                {
                    auth: {
                        username: 'moca',
                        password: 'mokletchat123'
                    }
                }
            );
        console.log(response)
        this.setState({
            namadpn: response.data.data[2].namadpn,
            namablkg: response.data.data[2].namablkg,
            username: response.data.data[2].username,
            
        })

    }

    

    render() {
        const { classes } = this.props;

        const { namadpn, namablkg, username } = this.state;

        console.log(namablkg);
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid>
                        <Grid>
                            <Typography variant="title" className={classes.Header}>
                                PopularPeople
                        </Typography>
                        </Grid>
                    </Grid>
                    <Divider /> 
                    
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs className={classes.isi}>
                                    <List>
                                        {/* <ButtonBase className={classes.isi}> */}
                                        <Grid item container spacing={16}>
                                            <Grid item>
                                                <Avatar className={classes.Avatar}>{this.state.fotoprofil}</Avatar>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <div className={classes.text}>
                                                    <Typography variant="title" color="sekondary" className={classes.headline}>
                                                    {this.state.namadpn} {this.state.namablkg}
                                            </Typography>
                                                    <Typography color="textSecondary" className={classes.headline}>@{this.state.username}</Typography>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Button color="primary" className={classes.button}>
                                                    ADD
                                        </Button>
                                            </Grid>
                                        </Grid>
                                        {/* </ButtonBase> */}
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Divider /> */}
                </Paper>
            </div>
        );
    }
}
export default PopularPeople;

PopularPeople.propTypes = {
    classes: PropTypes.object.isRequired,
};