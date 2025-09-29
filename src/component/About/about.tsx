import { Card, CardContent, CardActions, Typography, Box, Button } from '@mui/material'
import Image from 'next/image'

const About = () => {

    interface TAboutContent {
        name: string;
        role: string;
        position: string;
        email: string;
        phoneNumber?: string;
        imgUrl?: string
    }

    const AboutContent: Array<TAboutContent> = [
        {
            name: "Sayyed Amaan Ali",
            role: "FullStack Developer",
            position: 'Chief Executive Officer',
            email: 'sayyedamaanali164@gmail.com',
            imgUrl: "/temp.jpg"

        },
        {
            name: "Aaqib DM",
            role: "FullStack Developer & Designer",
            position: 'Chief Strategy Officer',
            email: 'aaqibdm2@gmail.com',
            imgUrl: "/temp.jpg"
        },
        {
            name: "Preeti Verma",
            role: "FullStack Developer",
            position: 'Sr. Software Engineer',
            email: 'sayyedamaanali164@gmail.com',
            imgUrl: "/temp.jpg"
        }
    ]
    return (

          <Box sx={{
      width: "90%",
      display: 'flex',
      gap: { xs: 3, md: 4 }, // Responsive gap
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'stretch', // Use 'stretch' for equal height cards
      flexWrap: 'wrap', // Allows cards to wrap to the next line
    }}>
      {AboutContent.map((value, index) => (
        // The container for each card now controls the width
        <Box
          key={index}
          sx={{
            width: { xs: '90%', sm: '45%', md: '30%' },
            maxWidth: '350px',
            display: 'flex',
          }}
        >
          <Card 
           data-aos="zoom-in"      // <-- YEH ATTRIBUTE ADD KIYA HAI
          data-aos-delay="200" 
          data-aos-duration="1800"
          sx={{
            // Removed fixed vh/vw units
            width: '100%',
            height: 'auto', // Height now adapts to content
            borderRadius: '60px',
            bgcolor: '#f8d2ffff',
            display: 'flex',
            flexDirection: 'column',
            p: 2
          }}>
            <CardContent sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexGrow: 1 // Allows content to fill the card
            }}>
              {/* Image size is now fixed but reasonable */}
              <Image
                height={150}
                width={150}
                alt='image'
                style={{ borderRadius: '50%' }} // 50% for a perfect circle
                src={value.imgUrl || ""}
              />
              <Typography variant='h4' p={2} color="#47007aff" sx={{ 
                  fontWeight: 'bold', 
                  fontSize: { xs: '1.5rem', md: '1.75rem' } 
              }}>
                {value.name}
              </Typography>
              <Typography variant='h6' p={1} color="#47007aff" sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' } 
              }}>
                {value.position}
              </Typography>
              {/* Added Box to group role and email for better spacing */}
              <Box sx={{ mt: 'auto', pt: 2 }}>
                  <Typography variant='body1' color="#5b009cff" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    {value.role}
                  </Typography>
                  <Typography variant='body1' color="#5b009cff" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    {value.email}
                  </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
    )
}

export default About
