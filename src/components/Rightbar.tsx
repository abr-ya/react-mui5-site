import {
  Box, Typography, AvatarGroup, Avatar, ImageList, ImageListItem,
} from "@mui/material";

const photoData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
// alt
// <img src={`${baseUrl}/image-list/breakfast.jpg`} alt="" />
// <img src={`${baseUrl}/image-list/burgers.jpg`} alt="" />
// <img src={`${baseUrl}/image-list/camera.jpg`} alt="" />

function Rightbar() {
  const baseUrl = "https://material-ui.com/static/images/";

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box width={300}>
        <Typography variant="h5" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={`${baseUrl}avatar/1.jpg`} />
          <Avatar alt="Travis Howard" src={`${baseUrl}avatar/2.jpg`} />
          <Avatar alt="Cindy Baker" src={`${baseUrl}avatar/3.jpg`} />
          <Avatar alt="Agnes Walker" src={`${baseUrl}avatar/4.jpg`} />
          <Avatar alt="Trevor Henderson" src={`${baseUrl}avatar/5.jpg`} />
        </AvatarGroup>
        {/* Photo Gallery */}
        <Typography variant="h5" fontWeight={100} mt={2} mb={2}>
          Photo Gallery
        </Typography>
        {/* todo try variant="masonry"  */}
        <ImageList cols={3} rowHeight={100} gap={5}>
          {photoData.map((item: any) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default Rightbar;
