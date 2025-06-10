import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQrcode } from 'react-icons/fa'; // QR code icon

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const handleScan = () => {
    alert('QR scanner activated!'); // Replace with actual scanner logic
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      style={{
        display: 'flex',
        gap: '60px',
        width: '100%',
        maxWidth: '1400px',
        marginTop: '20px'
      }}
    >
      <form onSubmit={handleSearch} style={{ flex: 1 }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search models and parts..."
          style={{
            width: '100%',
            padding: '12px 20px',
            fontSize: '1rem',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '5px',
            color: 'white',
            outline: 'none',
            fontFamily: "'Trebuchet MS', sans-serif"
          }}
        />
      </form>

      <motion.button
        onClick={handleScan}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '25px',
          padding: '0 20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FaQrcode style={{ color: 'white', fontSize: '1.5rem' }} />
      </motion.button>
    </motion.div>
  );
}

export default SearchBar;