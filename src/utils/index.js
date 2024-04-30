"use client"
const { useEffect, useState } = require("react");

export const getWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" && window.innerWidth);
    useEffect
        (() => {
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