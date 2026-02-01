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

  const CardContent = {
    "Web Development": "We create exceptional web experiences that combine stunning design with robust functionality. From dynamic websites to complex e-commerce platforms, we build fast, secure, and responsive web solutions that drive business growth.",

    "App Development": "We build powerful and intuitive mobile apps for Android. Our focus is on creating seamless user experiences and robust functionality that drives engagement and growth for your business.",

    "Software Development": "We design and build custom software solutions to streamline your business operations and fuel innovation. From enterprise-level applications to bespoke tools, we deliver scalable and efficient software tailored to your specific needs.",

    "UI & UX Design": "We create intuitive and visually appealing digital experiences that users love. Our UI/UX design process focuses on understanding your audience to deliver seamless navigation and an aesthetic that truly represents your brand.",

    "DevOps & Cloud": "We specialize in DevOps and cloud services to help you build, deploy, and manage applications with speed and efficiency. By automating your workflows and optimizing your infrastructure, we ensure your systems are scalable, secure, and always available.",

    "Quality Assurance": "We ensure your digital products are flawless by providing comprehensive Quality Assurance services. From manual to automated testing, we identify and resolve issues to guarantee your software is reliable, secure, and performs perfectly before it reaches your users.",

    "Digital Marketing": "We help your brand grow online with a data-driven approach. Our digital marketing services, including SEO, content strategy, and paid campaigns, are designed to boost your visibility, attract the right audience, and convert leads into loyal customers."
  }

  const ProjectContent = {
    p1: {
      imageUrl: "/Ecommerse.png",
      Title: "Ecommerce website",
      Discription: "We built a modern and scalable e-commerce platform designed to deliver a seamless shopping experience. From product browsing to secure checkout, the system ensures smooth performance and reliability. It includes real-time inventory management, user authentication, order tracking, and integrated payment gateways — all optimized for both desktop and mobile users.",
    },
    p2: {
      imageUrl: "/institute.jpeg",
      Title: "Institute Management System",
      Discription: "We developed a complete institute management platform to streamline academic and administrative operations. The system manages student enrollment, course scheduling, attendance, examinations, and staff records efficiently. With secure access controls, real-time updates, and an intuitive dashboard, it ensures smooth communication between students, teachers, and administrators.",
    },
    p3: {
      imageUrl: "/food.jpeg",
      Title: "Food Delivery App",
      Discription: "We created a user-friendly food delivery platform that connects customers with nearby restaurants for quick and convenient ordering. The app features real-time order tracking, secure payments, menu browsing, and delivery partner management. With a responsive interface and efficient backend, it ensures a smooth and reliable experience for users, restaurants, and delivery agents alike.",
    },
    p4: {
      imageUrl: "/social.jpeg",
      Title: "Social Media Application",
      Discription: "We built an interactive social media platform that enables users to connect, share posts, and engage in real-time conversations. The system supports user authentication, media uploads, comments, likes, and notifications for seamless interaction. With a scalable backend and modern UI, it delivers a fast, secure, and engaging social experience across devices.",
    },

  }
  return (
    <>
      <section id="home">


        <Box sx={{
         
          flexGrow: 1,
          p: { xs: 2, md: 3 }, // Responsive padding
          minHeight: "100vh",
          width: "100%",
          background: " linear-gradient(90deg,rgba(133, 0, 228, 1) 0%, rgba(248, 210, 255, 1) 100%)",
          // bgcolor: "#8500e4ff",

          display: 'flex',       // Added for vertical centering
          alignItems: 'center', // Added for vertical centering

        }}>
          <Grid container spacing={{ xs: 2, md: 4 }}      // <-- YEH ATTRIBUTE ADD KIYA HAI
            alignItems="center">

            {/* ===== Left Column (Text Content) ===== */}
            <Grid size={{ xs: 12, md: 6 }} sx={{
              textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left on desktop
              order: { xs: 2, md: 1 } // On mobile, show text below image
            }}
              data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <Typography variant="h3" color="white" sx={{
                mb: 3,
                fontWeight: 'bold',
                
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" }

              }}
                data-aos="fade-up"      // <-- YEH ATTRIBUTE ADD KIYA HAI
                data-aos-delay="200" >
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
                  data-aos="fade-up"      // <-- YEH ATTRIBUTE ADD KIYA HAI
                  data-aos-delay="200"
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
            }} data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
              <Box sx={{
                p: 2, // Padding inside the purple container
                // bgcolor: '#b44bffff',
                bgcolor: '#dcabff28',
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
      </section>


      <Box
        sx={{
           border:'2px solid red',
          minHeight: "60vh",
          width: '100%',
          bgcolor: '#f8d2ffff',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: { xs: 2, md: 3 },
          p: { xs: 2, sm: 3 },
          overflow: 'hidden', // Best practice to avoid scrollbars during animation
        }}
      >
        {/* Heading par 'fade-up' animation lagaya */}
        <Typography
          variant="h3"
          color="#47007aff"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.75rem' },
          }}
          data-aos="zoom-in"       // <-- YEH ATTRIBUTE ADD KIYA HAI

        >
          We Are Udaipur No #1 On Clutch and GoodFirms
        </Typography>

        {/* Paragraph par 'fade-up' animation with a slight delay */}
        <Typography
          variant="h6"
          color="#5b009cff"
          sx={{
            border:'2px solid red',
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxWidth: '800px',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
          data-aos="zoom-out"      // <-- YEH ATTRIBUTE ADD KIYA HAI
          data-aos-delay="200"  // <-- Thoda delay taaki heading ke baad aaye (200ms)

        >
          Our goal is to help our clients succeed by providing them with innovative, high-performance digital solutions. We specialize in a comprehensive suite of services that includes web development, App development, Quality Assurance, web & app designing, DevOps, Deployment and SEO optimization. By harnessing the potential of AI, machine learning, and predictive analytics, we build solutions that not only address current needs but also drive future growth.
        </Typography>
      </Box>



      <section id="services">


        <Box sx={{
           border:'2px solid red',
          // height ko minHeight se replace karein taaki content ke hisab se grow kar sake
          minHeight: "100vh",
          height: "auto", // height ko auto rakhein
          width: '100%', // 100vw ki jagah 100% use karein
          // bgcolor: 'rgba(181, 79, 255, 1)',
          background: 'linear-gradient(0deg,rgba(248, 210, 255, 1) 0%, rgba(133, 0, 228, 1) 100%)',
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
          }}
            data-aos="zoom-in">
            Our Services
          </Typography>

          {/* Container for Cards */}
          <Box sx={{
            width: '100%',
            display: 'flex',
            border:'2px solid red',
            flexWrap: "wrap",
            gap: { xs: 3, md: 4 }, // Responsive gap
            justifyContent: 'center',
            alignItems: 'center',
            mb: { xs: 4, md: 6 } // Margin bottom to create space before the button
          }}>
            {Object.entries(CardContent).map(([key, value]) => (
              // IMPORTANT: Make sure your ServiceCard component is also responsive
              <ServiceCard Title={key} description={value} key={key} />
            ))}
          </Box>

          {/* Container for Button */}
          <Box>
            <Button
              variant={'contained'} sx={{
                padding: { xs: '12px 24px', md: '15px 30px' }, // Responsive padding
                borderRadius: "60px",
                bgcolor: '#c779ff93',
                fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive font size for button
                '&:hover': {
                  bgcolor: "rgba(145, 4, 245, 0.8)" // Slightly adjusted hover color
                }
              }}>
              View More
            </Button>
          </Box>
        </Box>
      </section>

      <Box
        sx={{
           border:'2px solid red',
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
          data-aos="zoom-in"      // <-- YEH ATTRIBUTE ADD KIYA HAI

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
          data-aos="zoom-out"      // <-- YEH ATTRIBUTE ADD KIYA HAI
          data-aos-delay="200"
          sx={{
            // Removed fixed width, replaced with responsive width and a max-width
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxWidth: '800px',
            // Responsive font size for the paragraph
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          You are explored our range of services, from UI & UX to Deployment. The next step is seeing how these powerful solutions come to life. In our portfolio, you will find real examples of how we are partnered with clients to build digital solutions that do not just meet goals, but exceed expectations and drive future growth.
        </Typography>
      </Box>

 <section id="projects">
      <Box sx={{
        // Replaced fixed height with minHeight
        minHeight: "100vh",
         border:'2px solid red',
        height: "auto",
        width: '100%', // Use 100% instead of 100vw
        // bgcolor: '#8500e4ff',
        //  background:" linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(133, 0, 228, 1) 35%, rgba(248, 210, 255, 1) 100%)",
        background: "linear-gradient(0deg,rgba(133, 0, 228, 1) 0%, rgba(248, 210, 255, 1) 100%)",
        textAlign: 'center',
        display: 'flex', // Added display flex
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        p: { xs: 2, md: 4 }, // Added responsive padding
      }}>
        <Typography variant="h3" color="#47007aff" sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3rem' },
          mb: { xs: 3, md: 5 } // Margin bottom for spacing
        }} data-aos="zoom-out">
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
          {Object.entries(ProjectContent).map(([key, value]) => (
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

 </section>

      <Box
        sx={{
           border:'2px solid red',
          minHeight: "60vh", // Use minHeight to allow content to grow
          height: 'auto',
          width: '100%', // Use 100% instead of 100vw to avoid scrollbars
          bgcolor: '#f8d2ffff',
          textAlign: 'center',
          display: 'flex',
          overflow:'hidden',
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
          data-aos="zoom-in"      // <-- YEH ATTRIBUTE ADD KIYA HAI

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
          data-aos="zoom-out"      // <-- YEH ATTRIBUTE ADD KIYA HAI
          data-aos-delay="200"
          sx={{
            // Removed fixed width, replaced with responsive width and a max-width
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxWidth: '800px',
            // Responsive font size for the paragraph
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          We are shown you what is possible. Now, let our clients tell you what it is like to work with a partner who truly delivers. Their testimonials are the proof behind the promise.
        </Typography>
      </Box>



 <section id="testimonials">
      <Box sx={{
         border:'2px solid red',
        // Replaced 'height' with 'minHeight' for more flexibility
        minHeight: "70vh",
        overflow: 'hidden',
        // Changed '100vw' to '100%' to prevent horizontal scrollbars
        width: '100%',
        // bgcolor: 'rgba(181, 79, 255, 1)',
        background: "linear-gradient(90deg,rgba(248, 210, 255, 1) 0%, rgba(133, 0, 228, 1) 100%)",
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
        }} data-aos="fade-right">
          Client Testimonials
        </Typography>

        {/* This component also needs to be responsive */}
        <TestimonialClipboard />

      </Box>
</section>

      <Box
        sx={{
           border:'2px solid red',
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
          data-aos="zoom-in"      // <-- YEH ATTRIBUTE ADD KIYA HAI

          sx={{
            fontWeight: 'bold',
            // Responsive font size for the heading
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.75rem' },
          }}
        >
          You are Heard Our Success. Now Meet Our Story.
        </Typography>

        <Typography
          variant="h6"
          color="#5b009cff"
          data-aos="zoom-out"      // <-- YEH ATTRIBUTE ADD KIYA HAI
          data-aos-delay="200"
          sx={{
            // Removed fixed width, replaced with responsive width and a max-width
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxWidth: '800px',
            // Responsive font size for the paragraph
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          The testimonials show our impact, but there is more to our story. Discover our mission, our values, and what drives us to exceed expectations with every project.
        </Typography>
      </Box>



 <section id="about">


      <Box sx={{
        // 'height' ko 'minHeight' se replace kiya taaki content badhne par section grow kar sake
        minHeight: "100vh",
        height: "auto", // Height ko auto rakhein

        // '100vw' ko '100%' se replace kiya taaki horizontal scrollbar na aaye
        width: '100%',
 border:'2px solid red',
        bgcolor: '#8500e4ff',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // Responsive padding add ki hai
        py: { xs: 4, md: 6 } // py = padding top & bottom
      }}>
        <Typography variant="h3" color="#ffffffff" data-aos="zoom-out" data-aos-delay="200" sx={{
          fontWeight: 'bold',
          mb: { xs: 3, md: 5 }, // Title ke neeche spacing ke liye margin-bottom
          // Font size ko responsive banaya hai
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}>
          Aetibar Team
        </Typography>

        {/* Yeh sabse zaroori hai ki aapka <About /> component bhi responsive ho */}
        <About />

        <Typography variant="h3" color="#ffffffff" data-aos="zoom-out" data-aos-delay="200" sx={{
          fontWeight: 'bold', marginTop:10,
          mb: { xs: 3, md: 5 }, // Title ke neeche spacing ke liye margin-bottom
          // Font size ko responsive banaya hai
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}>
          Contact Us
        </Typography>
         <Typography
          variant="h6"
          color="#ffffffff"
          data-aos="zoom-out"      // <-- YEH ATTRIBUTE ADD KIYA HAI
          data-aos-delay="200"
          sx={{
            // Removed fixed width, replaced with responsive width and a max-width
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxWidth: '800px',
            // Responsive font size for the paragraph
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          Compony Email: aetibar786@gmail.com
        </Typography>
      </Box>
      
 </section>


      <Box
        sx={{
          background: 'linear-gradient(0deg, rgba(248, 210, 255, 1) 0%, rgba(133, 0, 228, 1) 100%)',
          // Added properties for better layout and to prevent overflow
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border:'2px solid red',
          minHeight: '60vh', // Taaki section ko thodi height mile
          overflow: 'hidden', // Extra content ko hide karne ke liye
          p: 2, // Thodi padding taaki text edges se na chipke
        }}
      >
        <Typography
          data-aos="zoom-in-up"
          sx={{
             border:'2px solid red',
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
            background: 'linear-gradient(0deg, rgba(133, 0, 228, 1) 0%, rgba(248, 210, 255, 1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

            // --- YEH HAI RESPONSIVE FONT SIZE KA JAADU ---
            fontSize: 'clamp(4rem, 24vw, 28rem)',
            lineHeight: 1, // Line height ko adjust kiya taaki extra space na le
          }}
        >
          Aetibar
        </Typography>
      </Box>

    </>
  );
}





// F8D2FFFF
// 8500E4FF