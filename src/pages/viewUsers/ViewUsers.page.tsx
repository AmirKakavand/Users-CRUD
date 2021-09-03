import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import UsersTable from '../../components/UsersTable/UsersTable.component';
// import { MdAddCircleOutline } from "react-icons/md";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: "5rem auto",
            padding: "1rem",
            backgroundColor: "#eee",
            borderRadius: "0.5rem"
        },
        header: {
            fontSize: "1.4rem"
        },
        btn: {
            width: "95%",
            padding: "0",
            margin: "0.5rem auto"
        },
        link: {
            textDecoration: "none",
            color: "inherit"
        },
        table: {
            width: "100%",
            margin: "1rem"
        }
    }),
);

function ViewUsers() {
    const classes = useStyles();
    const users = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();

    return (
        <div>
            <Grid container xs={11} className={classes.container}>
                <Grid container xs={12}>
                    <Grid item xs={5} sm={2} className={classes.header}>
                        داده ها
                    </Grid>

                    <Grid item xs={1} sm={4}></Grid>

                    <Grid container xs={6}>
                        <Grid xs={12} sm={6} item>
                            <Button className={classes.btn} variant="outlined" color="secondary">
                                دریافت اطلاعات از سرور
                            </Button>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <Button className={classes.btn} variant="contained" color="secondary">
                                <Link to="/" className={classes.link}>
                                    ساختن اکانت جدید
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} className={classes.table}>
                    <UsersTable />
                </Grid>
            </Grid>
        </div>
    )
}

export default ViewUsers
