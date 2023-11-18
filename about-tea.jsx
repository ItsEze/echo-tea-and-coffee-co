import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import Divider from '@mui/material/Divider';
import CircleIcon from '@mui/icons-material/Circle';
import TimerIcon from '@mui/icons-material/Timer';
import './about-tea.css';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card class="tea-card" id="black-tea" sx={{ maxWidth: inherit }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Black Tea"
        subheader="This'll wake you up"
      />
      <CardMedia
        component="img"
        height="194"
        image="Assets/Images/BlackTea_AdobeStock_83306665.jpeg"
        alt="Dried black-tea leaves in a bowl"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Black tea is a type of tea that is more oxidized than oolong, yellow, white, or green teas. Black tea is generally stronger in flavour than other teas.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Brewing:</Typography>
          <Typography paragraph>
            If you&apos;re using tap water, let it run cold briefly before filling the kettle. Tea needs oxygen to infuse properly, and tap water loses oxygen if it sits in the pipes for too long.
          </Typography>
          <Typography paragraph>
            Generally, the best teapots are ceramic, as you can use them to brew any type of tea and they retain heat well. Cast iron is an option, too.
          </Typography>
          <Typography paragraph>
            <List>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Boil the water. Black tea needs hotter water, so let it reach a rolling boil. For other types, like green tea, you&apos;ll only need little bubbles.
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Add tea. Pour your water on to the tea to help &apos;agitate&apos; the leaves. This helps the infusion.
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Brew. Leave the tea to infuse and let nature weave her little magic spell!
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Remove the tea. Lift loose tea leaves out in their infuser or pour the tea over a strainer. If you&apos;re using a teabag, lift it out  with a teaspoon.
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Serve. Take a moment to enjoy your tea. You&apos;re now ready for anything!
                    </ListItemText>
                </ListItem>
            </List>
          </Typography>
          <Typography>Brewing Times:</Typography>
          <Typography>
            Brewing times vary depending on what type of tea you&apos;re using.
            <List>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <TimerIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Darjeeling: 3 minutes
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <TimerIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Earl Grey: 5 minutes
                    </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <TimerIcon />
                    </ListItemIcon>
                    <ListItemText>
                        English Breakfast: 4 minutes
                    </ListItemText>
                </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card class="tea-card" id="green-tea" sx={{ maxWidth: inherit }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }}  aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Green Tea"
          subheader="Who drinks this stuff?"
        />
        <CardMedia
          component="img"
          height="194"
          image="Assets/Images/GreenTea_AdobeStock_209542913.jpeg"
          alt="Small scoop of ground green tea"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Green tea is a type of tea that is made from <i>Camellia sinensis</i> leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Brewing:</Typography>
            <Typography paragraph>
                <List>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Boil 8 fluid ounces of water (212℉).
                    </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Add tea. Pour your water on to the tea to help &apos;agitate&apos; the leaves. This helps the infusion.
                    </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Brew for 4 minutes.
                    </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Enjoy your tea!
                    </ListItemText>
                    </ListItem>
                </List>
            </Typography>
          </CardContent>
        </Collapse>
    </Card>

    <Card class="tea-card" id="white-tea" sx={{ maxWidth: inherit }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }}  aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="White Tea"
          subheader="Tea for White People"
        />
        <CardMedia
          component="img"
          height="194"
          image="Assets/Images/WhiteTea_AdobeStock_39350870.jpeg"
          alt="Small pile of dried white-tea leaves"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            White tea may refer to one of several styles of tea which generally feature young or minimally processed leaves of the Camellia sinensis plant. In spite of its name, sweet, brewed white tea is pale yellow. Its name derives from the fine silvery-white hairs on the unopened buds of the tea plant, which give the plant a whitish appearance. The unopened buds are used for some types of white tea.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography paragraph>Brewing:</Typography>
            <Typography paragraph>
                <List>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Boil 8 fluid ounces of water (212℉).
                    </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Add tea. Pour your water on to the tea to help &apos;agitate&apos; the leaves. This helps the infusion.
                    </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Brew for 4 minutes.
                    </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <CircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Enjoy your tea!
                    </ListItemText>
                    </ListItem>
                </List>
            </Typography>
          </CardContent>
        </Collapse>
    </Card>

    <Card class="tea-card" id="oolong-tea" sx={{ maxWidth: inherit }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }}  aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="oolong Tea"
          subheader="Tea for Looong People"
        />
        <CardMedia
          component="img"
          height="194"
          image="Assets/Images/OolongTea_AdobeStock_244250701.jpeg"
          alt="Cup of brewed oolong tea next to scoop of dried oolong-tea leaves"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Oolong is a traditional semi-oxidized <i>Camellia sinensis</i> tea produced through a process that includes withering the plant under strong sun and allowing the leaves to oxidize. Once the leaves are oxidized, gnomes curl and twist each individual leaf. Most oolong teas, especially those of fine quality, involve unique tea plant cultivars that are exclusively used for particular varieties.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Brewing:</Typography>
            <Typography paragraph>
                Oolong is a delicate tea that requires a little more care when brewing, but don&apos;t let that put you off trying this deliciously multi-faceted leaf. As a rule of thumb, you&apos;ll know it&apos;s ready when the water turns a light yellowish green color.
            </Typography>
            <Typography paragraph>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Oolong tea benefits from 1.5 to 2 minutes steeping in boiled water that&apos;s cooled a little. This should allow the tea&apos;s clean, strong, complex flavors and mellow aftertaste to blossom without being chased away.
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            DO NOT chase the mellow taste and blossom away. They always return home. And when they do, and the gnomes find out you dissed them, they&apos;ll come to your house and kick your ass.
                        </ListItemText>
                    </ListItem>
                </List>
            </Typography>
          </CardContent>
        </Collapse>
    </Card>

    <Card class="tea-card" id="yellow-tea" sx={{ maxWidth: inherit }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }}  aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Yellow Tea"
          subheader="Is it really yellow? Brew some and find out"
        />
        <CardMedia
          component="img"
          height="194"
          image="Assets/Images/YellowTea_AdobeStock_408686401.jpeg"
          alt="Glass of brewed yellow tea next to dried yellow-tea leaves"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Yellow tea is an increasingly rare and expensive variety of tea. The process for making yellow tea is similar to that of green but with an added step of encasing, or sweltering, which gives the leaves a slightly yellow coloring during the drying process. Due to the tea&apos;s light oxidation, tea snobs often place yellow tea in the same category with green tea. One of the primary aims of making yellow tea is to remove the characteristic grassy smell of green tea. Removing the grassy smell reduces the likelihood of attracting cattle to your house when you brew yellow tea.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Brewing:</Typography>
            <Typography paragraph>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <EmojiFoodBeverageOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                            You can&apos;t afford yellow tea, so we won&apos;t bother to tell you how to brew it.
                        </ListItemText>
                    </ListItem>
                </List>
            </Typography>
          </CardContent>
        </Collapse>
    </Card>

    </>
  );
}