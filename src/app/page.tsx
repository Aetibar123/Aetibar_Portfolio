'use client'

import Image from "next/image";
import { Box, Typography, Button, Grid } from "@mui/material"
import ServiceCard from '@/component/ServiceCard/serviceCard'
import ProjectCard from "@/component/ProjectCard/projectCard";
import TestimonialClipboard from '@/component/Testimonial/testimonialCard'
import About from '@/component/About/about'

// bgcolor: '#8902e9ff'
// bgcolor: '#ff4b4bff'
export default function Home() {

  const CardContent: any = {
    "Web Development": "We create exceptional web experiences that combine stunning design with robust functionality. From dynamic websites to complex e-commerce platforms, we build fast, secure, and responsive web solutions that drive business growth.",

    "App Development": "We build powerful and intuitive mobile apps for Android. Our focus is on creating seamless user experiences and robust functionality that drives engagement and growth for your business.",

    "Software Development": "We design and build custom software solutions to streamline your business operations and fuel innovation. From enterprise-level applications to bespoke tools, we deliver scalable and efficient software tailored to your specific needs.",

    "UI & UX Design": "We create intuitive and visually appealing digital experiences that users love. Our UI/UX design process focuses on understanding your audience to deliver seamless navigation and an aesthetic that truly represents your brand.",

    "DevOps & Cloud": "We specialize in DevOps and cloud services to help you build, deploy, and manage applications with speed and efficiency. By automating your workflows and optimizing your infrastructure, we ensure your systems are scalable, secure, and always available.",

    "Quality Assurance": "We ensure your digital products are flawless by providing comprehensive Quality Assurance services. From manual to automated testing, we identify and resolve issues to guarantee your software is reliable, secure, and performs perfectly before it reaches your users.",

    "Digital Marketing": "We help your brand grow online with a data-driven approach. Our digital marketing services, including SEO, content strategy, and paid campaigns, are designed to boost your visibility, attract the right audience, and convert leads into loyal customers."
  }

  const ProjectContent: any = {
    p1: {
      imageUrl: "/temp.jpg",
      Title: "Ecommerce website",
      Discription: "We ensure your digital products are flawless by providing comprehensive Quality Assurance services. From manual to automated testing, we identify and resolve issues to guarantee your software is reliable, secure, and performs perfectly before it reaches your users.",
    },
    p2: {
      imageUrl: "/temp.jpg",
      Title: "Ecommerce website",
      Discription: "We ensure your digital products are flawless by providing comprehensive Quality Assurance services. From manual to automated testing, we identify and resolve issues to guarantee your software is reliable, secure, and performs perfectly before it reaches your users.",
    },
    p3: {
      imageUrl: "/temp.jpg",
      Title: "Ecommerce website",
      Discription: "We ensure your digital products are flawless by providing comprehensive Quality Assurance services. From manual to automated testing, we identify and resolve issues to guarantee your software is reliable, secure, and performs perfectly before it reaches your users.",
    },
    p4: {
      imageUrl: "/temp.jpg",
      Title: "Ecommerce website",
      Discription: "We ensure your digital products are flawless by providing comprehensive Quality Assurance services. From manual to automated testing, we identify and resolve issues to guarantee your software is reliable, secure, and performs perfectly before it reaches your users.",
    },

  }
  return (
    <>

      <Box sx={{
        flexGrow: 1,
        p: { xs: 2, md: 3 }, // Responsive padding
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#8500e4ff",
        display: 'flex',       // Added for vertical centering
        alignItems: 'center', // Added for vertical centering
      }}>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">

          {/* ===== Left Column (Text Content) ===== */}
          <Grid size={{ xs: 12, md: 6 }} sx={{
            textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left on desktop
            order: { xs: 2, md: 1 } // On mobile, show text below image
          }}>
            <Typography variant="h3" color="white" sx={{
              mb: 3,
              fontWeight: 'bold',
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" }
            }}>
              The Future of IT Services, Built Today.
            </Typography>

            {[
              "Website Development",
              "Mobile App Development",
              "Enterprise Solutions Development",
              "Dedicated Teams On Demand",
              "Digital Marketing"
            ].map((text, index) => (
              <Typography
                key={index}
                variant="h5"
                color="white"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  mb: 1.5,
                }}
              >
                • {text} {/* Used a bullet point for better list styling */}
              </Typography>
            ))}
          </Grid>

          {/* ===== Right Column (Image) ===== */}
          <Grid size={{ xs: 12, md: 6 }} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: { xs: 1, md: 2 } // On mobile, show image on top
          }}>
            <Box sx={{
              p: 2, // Padding inside the purple container
              bgcolor: '#b44bffff',
              borderRadius: { xs: '30px', md: '60px' }, // Responsive border radius
              width: '100%', // Takes full width of its column
              maxWidth: '550px', // Prevents it from getting too large on big screens
              aspectRatio: '1 / 1', // Maintains a square shape
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                height={600}
                width={600}
                src={'/10.png'}
                alt="IT Services"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures the image covers the area without stretching
                }}
              />
            </Box>
          </Grid>

        </Grid>
      </Box>



      <Box
        sx={{
          minHeight: "60vh", // minHeight use karein taaki content badhne par height adjust ho sake
          width: '100%', // 100vw ki jagah 100% better hai horizontal scrollbar avoid karne ke liye
          bgcolor: '#f8d2ffff',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: { xs: 2, md: 3 }, // Mobile aur desktop ke liye alag gap
          p: { xs: 2, sm: 3 }, // Responsive padding taaki content edges se na chipke
        }}
      >
        <Typography
          variant="h3"
          color="#47007aff"
          sx={{
            fontWeight: 'bold',
            // Responsive font size
            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.75rem' },
          }}
        >
          We Are Udaipur's No #1 On Clutch and GoodFirms
        </Typography>

        <Typography
          variant="h6"
          color="#5b009cff"
          sx={{
            // Fixed width hata kar responsive width lagayi hai
            width: { xs: '95%', sm: '80%', md: '70%' },
            // Ek max-width set ki hai taaki badi screens par text zyada na faile
            maxWidth: '800px',
            // Responsive font size
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          Our goal is to help our clients succeed by providing them with innovative, high-performance digital solutions. We specialize in a comprehensive suite of services that includes web development, cloud computing, IoT, AR/VR, and blockchain. By harnessing the potential of AI, machine learning, and predictive analytics, we build solutions that not only address current needs but also drive future growth.
        </Typography>
      </Box>





      <Box sx={{
        // height ko minHeight se replace karein taaki content ke hisab se grow kar sake
        minHeight: "100vh",
        height: "auto", // height ko auto rakhein
        width: '100%', // 100vw ki jagah 100% use karein
        bgcolor: 'rgba(181, 79, 255, 1)',
        textAlign: 'center',
        p: { xs: 2, md: 4 }, // Responsive padding for the whole section
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>

        <Typography variant="h2" color="white" sx={{
          fontWeight: 'bold',
          mb: { xs: 3, md: 5 }, // Margin bottom for spacing
          fontSize: { xs: '2.5rem', md: '3.5rem' } // Responsive font size
        }}>
          Our Services
        </Typography>

        {/* Container for Cards */}
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexWrap: "wrap",
          gap: { xs: 3, md: 4 }, // Responsive gap
          justifyContent: 'center',
          alignItems: 'center',
          mb: { xs: 4, md: 6 } // Margin bottom to create space before the button
        }}>
          {Object.entries(CardContent).map(([key, value]) => (
            // IMPORTANT: Make sure your ServiceCard component is also responsive
            <ServiceCard Title={key} discription={value} key={key} />
          ))}
        </Box>

        {/* Container for Button */}
        <Box>
          <Button
            variant={'contained'} sx={{
              padding: { xs: '12px 24px', md: '15px 30px' }, // Responsive padding
              borderRadius: "60px",
              bgcolor: '#9104f5ff',
              fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive font size for button
              '&:hover': {
                bgcolor: "rgba(145, 4, 245, 0.8)" // Slightly adjusted hover color
              }
            }}>
            View More
          </Button>
        </Box>
      </Box>


      <Box
        sx={{
          minHeight: "60vh", // Use minHeight to allow content to grow
          height: 'auto',
          width: '100%', // Use 100% instead of 100vw to avoid scrollbars
          bgcolor: '#f8d2ffff',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: { xs: 2, md: 3 }, // Responsive gap for spacing
          p: { xs: 2, sm: 3 }, // Responsive padding for screen edges
        }}
      >
        <Typography
          variant="h3"
          color="#47007aff"
          sx={{
            fontWeight: 'bold',
            // Responsive font size for the heading
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.75rem' },
          }}
        >
          Ready to Turn Your Ideas Into Reality?
        </Typography>

        <Typography
          variant="h6"
          color="#5b009cff"
          sx={{
            // Removed fixed width, replaced with responsive width and a max-width
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxWidth: '800px',
            // Responsive font size for the paragraph
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          You've explored our range of services, from UI & UX to Deployment. The next step is seeing how these powerful solutions come to life. In our portfolio, you'll find real examples of how we've partnered with clients to build digital solutions that don't just meet goals, but exceed expectations and drive future growth.
        </Typography>
      </Box>


      <Box sx={{
        // Replaced fixed height with minHeight
        minHeight: "100vh",
        height: "auto",
        width: '100%', // Use 100% instead of 100vw
        bgcolor: '#8500e4ff',
        textAlign: 'center',
        display: 'flex', // Added display flex
        flexDirection: 'column',
        justifyContent: 'center',
        p: { xs: 2, md: 4 }, // Added responsive padding
      }}>
        <Typography variant="h3" color="white" sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3rem' },
          mb: { xs: 3, md: 5 } // Margin bottom for spacing
        }}>
          Our Projects
        </Typography>

        <Box sx={{
          // Removed fixed percentage height
          width: '100%',
          display: 'flex',
          flexWrap: "wrap",
          gap: { xs: 3, md: 4 }, // Made gap responsive
          justifyContent: 'center',
          alignItems: 'stretch', // Use stretch for cards of different heights
          mb: { xs: 4, md: 6 } // Margin bottom for spacing
        }}>
          {Object.entries(ProjectContent).map(([key, value]: any) => (
            <ProjectCard Title={value.Title} Discription={value.Discription} imageUrl={value.imageUrl} key={key} />
          ))}
        </Box>

        <Button
          variant={'contained'} sx={{
            // Made padding and font size responsive
            padding: { xs: '12px 24px', md: '15px 30px' },
            borderRadius: "60px",
            alignSelf: 'center', // Center the button in the flex container
            bgcolor: '#9104f5ff',
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', md: '1rem' },
            '&:hover': {
              bgcolor: "rgba(181, 79, 255, 1)"
            }
          }}>
          View More
        </Button>
      </Box>



      <Box
        sx={{
          minHeight: "60vh", // Use minHeight to allow content to grow
          height: 'auto',
          width: '100%', // Use 100% instead of 100vw to avoid scrollbars
          bgcolor: '#f8d2ffff',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: { xs: 2, md: 3 }, // Responsive gap for spacing
          p: { xs: 2, sm: 3 }, // Responsive padding for screen edges
        }}
      >
        <Typography
          variant="h3"
          color="#47007aff"
          sx={{
            fontWeight: 'bold',
            // Responsive font size for the heading
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.75rem' },
          }}
        >
          Our Portfolio Tells the Story. Our Clients Validate It.
        </Typography>

        <Typography
          variant="h6"
          color="#5b009cff"
          sx={{
            // Removed fixed width, replaced with responsive width and a max-width
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxWidth: '800px',
            // Responsive font size for the paragraph
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          We've shown you what's possible. Now, let our clients tell you what it's like to work with a partner who truly delivers. Their testimonials are the proof behind the promise.
        </Typography>
      </Box>




      <Box sx={{
        // Replaced 'height' with 'minHeight' for more flexibility
        minHeight: "70vh",
        overflow:'hidden',
        // Changed '100vw' to '100%' to prevent horizontal scrollbars
        width: '100%',
        bgcolor: 'rgba(181, 79, 255, 1)',
        textAlign: 'center',
        // Added display: 'flex' to vertically center the content
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, md: 3 }, // Added responsive padding
      }}>
        <Typography variant="h3" color="white" sx={{
          fontWeight: 'bold',
          mb: 4, // Added margin-bottom for spacing
          fontSize: { xs: '2rem', md: '3rem' } // Made font size responsive
        }}>
          Client Testimonials
        </Typography>

        {/* This component also needs to be responsive */}
        <TestimonialClipboard />

      </Box>



      <Box
        sx={{
          minHeight: "60vh", // Use minHeight to allow content to grow
          height: 'auto',
          width: '100%', // Use 100% instead of 100vw to avoid scrollbars
          bgcolor: '#f8d2ffff',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: { xs: 2, md: 3 }, // Responsive gap for spacing
          p: { xs: 2, sm: 3 }, // Responsive padding for screen edges
        }}
      >
        <Typography
          variant="h3"
          color="#47007aff"
          sx={{
            fontWeight: 'bold',
            // Responsive font size for the heading
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.75rem' },
          }}
        >
          You've Heard Our Success. Now Meet Our Story.
        </Typography>

        <Typography
          variant="h6"
          color="#5b009cff"
          sx={{
            // Removed fixed width, replaced with responsive width and a max-width
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxWidth: '800px',
            // Responsive font size for the paragraph
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          The testimonials show our impact, but there's more to our story. Discover our mission, our values, and what drives us to exceed expectations with every project.
        </Typography>
      </Box>




      <Box sx={{
      // 'height' ko 'minHeight' se replace kiya taaki content badhne par section grow kar sake
      minHeight: "100vh",
      height: "auto", // Height ko auto rakhein
      
      // '100vw' ko '100%' se replace kiya taaki horizontal scrollbar na aaye
      width: '100%',
      
      bgcolor: '#8500e4ff',
      textAlign: 'center',
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      // Responsive padding add ki hai
      py: { xs: 4, md: 6 } // py = padding top & bottom
    }}>
      <Typography variant="h3" color="#ffffffff" sx={{
        fontWeight: 'bold',
        mb: { xs: 3, md: 5 }, // Title ke neeche spacing ke liye margin-bottom
        // Font size ko responsive banaya hai
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
      }}>
        Aetibar Team
      </Typography>
      
      {/* Yeh sabse zaroori hai ki aapka <About /> component bhi responsive ho */}
      <About />

    </Box>

    </>
  );
}



