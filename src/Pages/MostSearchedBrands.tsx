import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MostSearchedBrands = () => {
  const navigate = useNavigate();

  // Brand data with names (colors removed)
  const popularBrands = [
    { name: 'Carrier', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_of_the_Carrier_Corporation.svg'},
    { name: 'Trane', logo: 'samsung-logo.png' },
    { name: 'Goodman', logo: 'sony-logo.png' },
    { name: 'York UPG', logo: 'lg-logo.png' },
    { name: 'Lennox', logo: 'microsoft-logo.png' },
    { name: 'Rheem', logo: 'dell-logo.png' },
    { name: 'Bryant', logo: 'hp-logo.png' }
  ];

  const handleBrandClick = (brandName: string) => {
    navigate(`/brands/${brandName.toLowerCase()}`);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px 20px'
    }}>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          color: 'white',
          fontFamily: "'Trebuchet MS', sans-serif",
          marginBottom: '25px',
          fontSize: '1.5rem',
          fontWeight: 'normal'
        }}
      >
        Most Searched Brands
      </motion.h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', // Larger boxes
        gap: '25px', // More space between boxes
        width: '100%'
      }}>
        {popularBrands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBrandClick(brand.name)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '25px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '1/1',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            {/* Logo Placeholder - Replace with actual image */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              {brand.name.charAt(0)}
            </div>
            <span style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              {brand.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MostSearchedBrands;