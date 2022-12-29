import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Hero = () => {
  const styles = {
    container: {
      disableGutters: true,
      maxWidth: "sm",
      component: "main",
      sx: { pt: 8, pb: 6 },
    },

    title: {
      variant: "h3",
      align: "center",
      color: "text.primary",
      gutterBottom: true,
    },

    body: {
      variant: "h5",
      align: "center",
      color: "text.secondary",
    },
  };

  return (
    <Container {...styles.container}>
      <Typography {...styles.title}>Elden Ring Search Tool</Typography>
      <Typography {...styles.body}>Precious Item Ahead.</Typography>
    </Container>
  );
};

export default Hero;
