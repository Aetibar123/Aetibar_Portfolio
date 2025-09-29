import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
} from '@mui/material';

// Testimonial data
const testimonialsData = [
  { id: 1, name: "Aman Sharma", company: "Innovate Solutions", message: "Inki expertise ne hamare project ko next level par pahuncha diya. Unbelievable results!", avatar: "https://via.placeholder.com/150" },
  { id: 2, name: "Priya Singh", company: "Digital Edge", message: "Professional, creative aur deadline ka poora khayal rakhte hain. Highly recommended!", avatar: "https://via.placeholder.com/150" },
  { id: 3, name: "Rahul Kumar", company: "Tech Startups", message: "They delivered a solution that was beyond our expectations. Great collaboration.", avatar: "https://via.placeholder.com/150" },
  { id: 4, name: "Neha Sharma", company: "Future Forward", message: "Simply the best. Their team understands the vision and makes it happen.", avatar: "https://via.placeholder.com/150" },
  { id: 5, name: "Vikram Kumar", company: "Innovate AI", message: "Exceptional quality and timely delivery. A great partner for our business.", avatar: "https://via.placeholder.com/150" }
];

// Data ko duplicate karein taaki loop seamless lage
const duplicatedData = [...testimonialsData, ...testimonialsData];

const TestimonialTicker = () => {
  return (


    <motion.div
      animate={{ x: '-50%' }}
      transition={{
        ease: 'linear',
        duration: 35,
        repeat: Infinity,
      }}
      style={{
        display: 'flex',
        width: '200%', // Keeps the infinite scroll logic
        gap: '30px',
      }}
    >
      {duplicatedData.map((testimonial, index) => (
        <motion.div
          key={index}
          style={{ flexShrink: 0 }} // Prevents cards from shrinking
          whileHover={{ scale: 1.05, y: -10 }}
        >
          <Card raised sx={{
            // --- RESPONSIVE CHANGES START HERE ---
            width: { xs: '85vw', sm: '60vw', md: '45vw' }, // Card width is now relative to screen size
            maxWidth: '650px', // But it won't get larger than 650px
            minWidth: '300px', // Ensures it doesn't get too small
            height: 'auto',  // Height is now flexible
            minHeight: '250px',
            borderRadius: '30px',
            p: { xs: 2, md: 3 },
            bgcolor: 'rgba(248, 210, 255, 0.71)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
           
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar alt={testimonial.name} src={testimonial.avatar} sx={{ width: 60, height: 60 }} />
                <Box sx={{ ml: 2, textAlign: 'left' }}>
                  <Typography variant="h6" color="#ffffffff" component="div" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="#ffffffff">
                    {testimonial.company}
                  </Typography>
                </Box>
              </Box>
              {/* Removed fixed height and width from the message */}
              <Typography variant="body1" color="#ffffffff" sx={{
                fontStyle: 'italic',
                textAlign: 'left',
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}>
                "{testimonial.message}"
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
    // </Box>
  );
};

export default TestimonialTicker;