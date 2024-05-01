import { configureStore } from "@reduxjs/toolkit";
import DashboardSiderbarSlice from "./DashboardSiderbar/DashboardSiderbarSlice";
  
  const store = configureStore({
    reducer: {
      sidebarDrawer : DashboardSiderbarSlice
    },
  });
  
  export default store;