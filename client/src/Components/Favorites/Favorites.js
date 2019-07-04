import React, { useContext } from 'react';
import SearchContext from '../../utils/SearchContext'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import OpenInNew from '@material-ui/icons/OpenInNew'


const useStyles = makeStyles(theme => ({
  card: {
    minHeight: '496px',
    maxWidth: 345,
    marginTop: '10%'
  },
  media: {
    height: '120px',
    width: '200px',
    marginLeft: '18%',
    paddingTop: '56.25%', // 16:9
    overflow: 'hidden'
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  links: {
    color: 'gray'
  },
  'fav>svg':{
    pointerEvents: 'auto',
  },
  'favSvg<*': {
    pointerEvents: 'none'
  }
}));



const Results = () => {
  const { favBooks, deleteFav } = useContext(SearchContext)
  const classes = useStyles();


  return (
    <Container fixed className={classes.Root}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing = {2}
      >

        {
          favBooks.map(({ title, image, link, authors, description, _id }) => (
            <Grid item xs={4} key={_id}>
              <Card className={classes.card} >
                <CardHeader
                  title={title}
                  subheader={`Author(s): ${authors.map(author => (` ${author}`))}`}
                />
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {description ? description : 'Description Not Available'}
                  </Typography>
                </CardContent>
                {/* <CardActions disableSpacing> */}
                 
                  <IconButton aria-label="Delete" id={_id} onClick={deleteFav} > 
                    <Delete/>
                  </IconButton>
               
                  <a className={classes.links} href={link} rel="noopener noreferrer" target='_blank'>
                  <IconButton aria-label="Share">
                    <OpenInNew/>
                  </IconButton>
                    </a>
                {/* </CardActions> */}
              </Card>

            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default Results