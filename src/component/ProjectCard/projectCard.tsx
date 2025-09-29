import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
import Image from "next/image"

const ProjectCard = ({ imageUrl, Title, Discription }: any) => {

  return (

    <Card sx={{
      // Removed fixed vh/vw units
      // Replaced with a flexible width and a max-width to prevent it from getting too large
      width: '100%',
      maxWidth: '380px',
      margin: 'auto', // Centers the card in its container (like a Grid item)
      height: '100%', // Fills the height of its container
      minHeight: '450px', // Ensures a consistent minimum height
      borderRadius: { xs: '60px', md: '60px' }, // Responsive border radius
      bgcolor: '#f8d2ffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Pushes the button to the bottom
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(-5px)',
      },
    }} data-aos="zoom-in"      // <-- YEH ATTRIBUTE ADD KIYA HAI
      data-aos-delay="200"
      data-aos-duration="1800">
      {/* Use CardMedia for the image for better structure */}
      <CardMedia
        component="img"
        sx={{

          height: '200px', // Give a fixed height to the image area
          objectFit: 'fill',
          p:1,
          borderTopLeftRadius: { xs: '60px', md: '60px' },
          borderTopRightRadius: { xs: '60px', md: '60px' },
        }}
        image={imageUrl}
        alt={Title || "Project Image"}
      />

      <CardContent sx={{ textAlign: 'center', p: { xs: 2, md: 3 } }}>
        <Typography variant='h4' color="#47007aff" sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', md: '2rem' } // Responsive font size
        }}>
          {Title || "Project Title"}
        </Typography>

        {/* Removed fixed height and width from the description */}
        <Typography variant='body1' color="#5b009cff" sx={{
          mt: 1, // Margin top for spacing
          fontSize: { xs: '0.9rem', md: '1rem' } // Responsive font size
        }}>
          {Discription}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', pb: { xs: 2, md: 3 } }}>
        <Button variant={'contained'}
          sx={{
            padding: { xs: '8px 24px', md: '10px 30px' }, // Responsive padding
            borderRadius: "60px",
            bgcolor: '#8500e4ff',
            '&:hover': {
              bgcolor: "rgba(181, 79, 255, 1)"
            }
          }}>
          Explore
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard
