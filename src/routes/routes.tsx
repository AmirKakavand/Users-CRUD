import { Route } from 'react-router-dom';
import EditUser from '../pages/editUser/EditUser.page';
import SignUp from '../pages/signUp/SignUp.page'
import ViewUsers from '../pages/viewUsers/ViewUsers.page';

const Routes: JSX.Element = <>
    <Route path="/" exact><SignUp /></Route>
    <Route path="/users-table"><ViewUsers /></Route>
    <Route path="/edit-user/:userid"><EditUser /></Route>
</>

export default Routes;