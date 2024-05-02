"use client"
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