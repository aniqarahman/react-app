import React from 'react';
import { motion } from "framer-motion";

export function Message() {
  return (
    <motion.h1
      // Animation properties
      initial={{ opacity: 0, x: -50 }} // Starts invisible and 50px left
      animate={{ opacity: 1, x: 0 }}   // Slides to final position
      transition={{ 
        type: "spring", 
        stiffness: 100,
        damping: 10,
        duration: 0.5 
      }}
      
      // Your existing styles
      style={{
        fontFamily: "'Trebuchet MS', sans-serif",
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#ffffff",
        margin: 0,
        padding: "20px",
        textShadow: "0 2px 4px rgba(0,0,0,0.3)"
      }}
    >
      Welcome to Noso Labs
    </motion.h1>
  );
}

export function Center({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      {children}
    </div>
  );
}

export default Message; // Default export (optional)