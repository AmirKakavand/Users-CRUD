import { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, IUser } from '../../features/users/userSlice';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: "1rem auto",
            padding: "0 1rem",
            backgroundColor: "#eee",
            borderRadius: "0.5rem"
        },
        header: {
            fontSize: "1.8rem",
            textAlign: "right"
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        label: {
            fontSize: "1rem",
            textAlign: "right"
        },
        textField: {
            width: "100%"
        },
        btn: {
            width: "100%",
            fontSize: "1.3rem"
        },
        link: {
            color: "white",
            textDecoration: "none"
        }
    }),
);

function SignUp() {
    const classes = useStyles();
    const users = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();
    const [fieldsEmpty, setFieldsEmpty] = useState(true);


    const checkFields = () => {
        const userName: string = (document.getElementById("name") as HTMLInputElement).value;
        const userTel: string = (document.getElementById("phone") as HTMLInputElement).value;
        const userAge: number = parseInt((document.getElementById("age") as HTMLInputElement).value);
        const userEmail: string = (document.getElementById("email") as HTMLInputElement).value;

        if (userName && userTel && userAge && userEmail) {
            setFieldsEmpty(false)
        } else {
            setFieldsEmpty(true)
        }
    }

    const handleSubmit = (): void => {
        const userName: string = (document.getElementById("name") as HTMLInputElement).value;
        const userTel: string = (document.getElementById("phone") as HTMLInputElement).value;
        const userAge: number = parseInt((document.getElementById("age") as HTMLInputElement).value);
        const userEmail: string = (document.getElementById("email") as HTMLInputElement).value;

        const newUser: IUser = {
            id: Date.now(),
            name: userName,
            tel: userTel,
            age: userAge,
            email: userEmail,
            registerDate: new Date().toLocaleDateString('fa-IR')
        }
        dispatch(addUser(newUser));
    }

    return (
        <div>
            <Grid container className={classes.container}
                xs={10} md={6} lg={4} spacing={3}>
                <Grid item xs={12} className={classes.header}>
                    فرم زیر را پر کنید
                </Grid>

                <Grid item xs={12} className={classes.label}>
                    نام و نام خانوادگی
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={checkFields} className={classes.textField}
                        id="name" variant="outlined" />
                </Grid>

                <Grid item xs={12} className={classes.label}>
                    شماره موبایل
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={checkFields} className={classes.textField}
                        id="phone" type="tel" variant="outlined" />
                </Grid>

                <Grid item xs={12} className={classes.label}>
                    سن
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={checkFields} className={classes.textField}
                        id="age" type="number" variant="outlined" />
                </Grid>

                <Grid item xs={12} className={classes.label}>
                    ایمیل
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={checkFields} className={classes.textField}
                        id="email" type="email" variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <Button disabled={fieldsEmpty} className={classes.btn}
                        variant="contained"
                        type="submit" onClick={handleSubmit} color="secondary">
                        <Link to="/users-table" className={classes.link}>
                            ساخت اکانت
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignUp
