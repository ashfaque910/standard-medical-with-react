import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      // console.log(action)
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email, number } = action.payload;
      const uu = state.find(user => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
        uu.number = number;
      }
    },
    deleteUser: (state, action)=>{
        const {id} =action.payload;
        const uu = state.find(user => user.id == id);
        if(uu){
            return state.filter (f => f.id !== id)
            // state.splice(action.payload, 1);
        }
    }
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
