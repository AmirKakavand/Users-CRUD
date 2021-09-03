import { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { editUser, IUser } from '../../features/users/userSlice';
import { Link, useParams } from 'react-router-dom';

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

function EditUser() {
    const classes = useStyles();
    const users = useSelector((state: RootState) => state.users.users);
    const dispatch = useDispatch();
    const [fieldsEmpty, setFieldsEmpty] = useState(true);


    type userParams = {
        userid: string;
      };
    const { userid } = useParams<userParams>();
    const ID: number = parseInt(userid);
    let doesUserExist = users.find(getUser);

    function getUser(user: IUser) {
        return user.id === ID;
    }

    let userToBeEdited = doesUserExist ? doesUserExist : {
        name: "a name",
        tel: "09123334455",
        age: 22,
        email: "some email",
    }

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
            id: ID,
            name: userName,
            tel: userTel,
            age: userAge,
            email: userEmail,
            registerDate: new Date().toLocaleDateString('fa-IR')
        }
        
        dispatch(editUser(newUser));
        console.log(users);
    }
    return (
        <div>
            <Grid container className={classes.container}
                xs={10} md={6} lg={4} spacing={3}>
                <Grid item xs={12} className={classes.header}>
                    ویرایش
                </Grid>

                <Grid item xs={12} className={classes.label}>
                    نام و نام خانوادگی
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={checkFields} className={classes.textField}
                        id="name" variant="outlined" defaultValue={userToBeEdited.name} />
                </Grid>

                <Grid item xs={12} className={classes.label}>
                    شماره موبایل
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={checkFields} className={classes.textField}
                        id="phone" type="tel" variant="outlined"
                        defaultValue={userToBeEdited.tel} />
                </Grid>

                <Grid item xs={12} className={classes.label}>
                    سن
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={checkFields} className={classes.textField}
                        id="age" type="number" variant="outlined"
                        defaultValue={userToBeEdited.age} />
                </Grid>

                <Grid item xs={12} className={classes.label}>
                    ایمیل
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={checkFields} className={classes.textField}
                        id="email" type="email" variant="outlined"
                        defaultValue={userToBeEdited.email} />
                </Grid>

                <Grid item xs={12}>
                    <Button disabled={fieldsEmpty} className={classes.btn}
                        variant="contained"
                        type="submit" onClick={handleSubmit} color="secondary">
                        <Link to="/users-table" className={classes.link}>
                            ثبت
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default EditUser
