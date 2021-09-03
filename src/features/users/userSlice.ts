import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from '@reduxjs/toolkit/node_modules/immer/dist/internal';


export interface IUser {
  id: number,
  name: string,
  tel: string,
  age: number,
  email: string,
  registerDate: string
}

const initialState: {users: IUser[]} = {
  users:[]
};

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const newUser: IUser = {
        id: action.payload.id,
        name: action.payload.name,
        tel: action.payload.tel,
        age: action.payload.age,
        email: action.payload.email,
        registerDate: action.payload.registerDate
      };
      state.users.push(newUser);
    },

    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },

    editUser: (state, action: PayloadAction<IUser>) => {
      let userToBeEdited: WritableDraft<IUser> = state.users.find(user => user.id == action.payload.id)!
      state.users.splice(state.users.indexOf(userToBeEdited), 1);

      state.users.push(action.payload)
    },
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
