import { createSlice } from '@reduxjs/toolkit';

const DashboardSiderbarSlice = createSlice({
    name: 'sidebarDrawer',
    initialState: {
        isOpen: true,
    },
    reducers: {
        openClodeDrawerAction: (state, action) => {
            return {
                ...state,
                isOpen: action.payload
            };
        },
    },
    extraReducers: builder => {
    },
});

export const { openClodeDrawerAction } = DashboardSiderbarSlice.actions;
export default DashboardSiderbarSlice.reducer;