import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material'

const ServiceCard = ({ Title, discription }: any) => {

    return (

        <Card variant='outlined'
            sx={{
                // --- KEY CHANGES FOR SIZE CONTROL ---

                // 1. Mobile par poori available width lega.
                width: '100%',

                // 2. IMPORTANT: Isse card kabhi bhi 360px se zyada chauda nahi hoga.
                maxWidth: '360px',

                // 3. Card ko uske container ke beech mein (center) rakhega.
                margin: 'auto',

                // --- Other styles remain the same ---
                height: '100%',
                minHeight: '380px',
                borderRadius: { xs: '60px', md: '60px' },
                bgcolor: '#f8d2ffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 6px 12px rgba(133, 0, 228, 0.2)',
                    transform: 'translateY(-5px)'
                }
            }}>

            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: { xs: 2, md: 3 }
            }}>
                <Typography variant='h5' color="#47007aff" sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: { xs: '1.2rem', md: '1.4rem' }
                }}>
                    {Title}
                </Typography>

                <Typography variant='body1' color="#5b009cff" sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' }
                }}>
                    {discription}
                </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: 'center', pb: { xs: 2, md: 3 } }}>
                <Button variant={'contained'}
                    sx={{
                        padding: { xs: '8px 24px', md: '10px 30px' },
                        borderRadius: "60px",
                        bgcolor: '#8500e4ff',
                        textTransform: 'none',
                        fontSize: { xs: '0.9rem', md: '1rem' },
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

export default ServiceCard
