import { createSlice } from "@reduxjs/toolkit";
const toggleSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    show: true,
  },
  reducers: {
    setShow: (state) => {
      state.show = !state.show;
    },
  },
});
export const { setShow } = toggleSlice.actions;
export default toggleSlice.reducer;
