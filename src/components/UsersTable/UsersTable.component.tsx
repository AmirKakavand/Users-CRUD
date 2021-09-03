import { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteUser } from '../../features/users/userSlice';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: "1rem",
            backgroundColor: "#fff",
            border: "solid gray 2px",
            borderRadius: "0.5rem",
            margin: "1rem auto"
        },
        userAttribute: {
            fontSize: "1.2rem",
            margin: "1rem auto 0.5rem"
        }
    }),
);

function UsersTable() {
    const classes = useStyles();
    const users = useSelector((state: RootState) => state.users.users);
    const [allUsers, setallUsers] = useState(users);
    const dispatch = useDispatch();



    function handleDeleteUser(id: number) {
        dispatch(deleteUser(id));
        console.log(users);
    }

    useEffect(() => {
        console.log(users)
    }, [users])



    return (
        <div style={{ width: "100%", padding: "0", margin: "0" }}>
            <Hidden xsDown>
                <Grid container xs={12} className={classes.container}>
                    <Grid item className={classes.userAttribute} xs={2}>نام و نام خانوادگی</Grid>
                    <Grid item className={classes.userAttribute} xs={2}>شماره موبایل</Grid>
                    <Grid item className={classes.userAttribute} xs={1}>سن</Grid>
                    <Grid item className={classes.userAttribute} xs={3}>ایمیل</Grid>
                    <Grid item className={classes.userAttribute} xs={2}>تاریخ ایجاد</Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </Hidden>

            {users.map(user => {
                return (
                    <>
                        <Hidden xsDown>
                            <Grid key={user.id} container xs={12} className={classes.container}>
                                <Grid item xs={2}>{user.name}</Grid>
                                <Grid item xs={2}>{user.tel}</Grid>
                                <Grid item xs={1}>{user.age}</Grid>
                                <Grid item xs={3}>{user.email}</Grid>
                                <Grid item xs={2}>{user.registerDate}</Grid>
                                <Grid item xs={2}>
                                    <Link to={'/edit-user/' + user.id}>
                                        <IconButton aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                    </Link>

                                    <IconButton onClick={() => handleDeleteUser(user.id)}
                                        aria-label="delete" style={{ color: "crimson" }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Hidden>

                        <Hidden smUp>
                            <Grid container xs={12} className={classes.container}>

                                <Grid item xs={12} className={classes.userAttribute}>نام و نام خانوادگی</Grid>
                                <Grid item xs={12}>{user.name}</Grid>

                                <Grid item className={classes.userAttribute} xs={12}>شماره موبایل</Grid>
                                <Grid item xs={12}>{user.tel}</Grid>

                                <Grid item className={classes.userAttribute} xs={12}>سن</Grid>
                                <Grid item xs={12}>{user.age}</Grid>

                                <Grid item className={classes.userAttribute} xs={12}>ایمیل</Grid>
                                <Grid item xs={12}>{user.email}</Grid>

                                <Grid item className={classes.userAttribute} xs={12}>تاریخ ایجاد</Grid>
                                <Grid item xs={12}>{user.registerDate}</Grid>

                                <Grid item xs={12}>
                                    <Link to={'/edit-user/' + user.id}>
                                        <IconButton aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                    </Link>

                                    <IconButton onClick={() => handleDeleteUser(user.id)}
                                        aria-label="delete" style={{ color: "crimson" }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </>
                )
            })}
        </div>
    )
}

export default UsersTable
