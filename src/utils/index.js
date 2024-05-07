"use client"
import { createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

export const getWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return windowWidth
}


export const darkThemePagination = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiPagination: {
            styleOverrides: {
                root: {
                    color: 'white', // Set text color to white
                    borderColor: 'white', // Set border color to white
                },
            },
        },
    },
});
export const lightThemePagination = createTheme({
    palette: {
        mode: 'light',
    },
    components: {
        MuiPagination: {
            styleOverrides: {
                root: {
                    color: 'black', // Set text color to white
                    borderColor: 'black', // Set border color to white
                },
            },
        },
    },
});


export const muiSelectDarkTheme = createTheme({
    
    components: {
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: 'white',  // Change as needed
          },
        },
      },
    },
  });


  export const muiSelectLightTheme = createTheme({
    
    components: {
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: 'black',  // Change as needed
          },
        },
      },
    },
  });