import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import SearchContext from '../../utils/SearchContext'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

const Search = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const { handleInputChange, searchBook, title } = useContext(SearchContext)

  return (
    <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Paper className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="Menu" onClick={handleClick}>
            <MenuIcon />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >

              <Link to='/' style={{'textDecoration': 'none', color: 'gray'}}> <MenuItem onClick={handleClose}>Home</MenuItem> </Link>
              <Link to='/favorites' style={{'textDecoration': 'none', color: 'gray'}}> <MenuItem onClick={handleClose}>Favorites</MenuItem> </Link>
            </Menu>

          </IconButton>
          <InputBase
            className={classes.input}
            id='title'
            placeholder="Search Google Books"
            value={title}
            onChange={handleInputChange}
          />
          <IconButton className={classes.iconButton} onClick={searchBook} aria-label="Search">
          <Link to='/'>
            <SearchIcon />
          </Link>
          </IconButton>
        </Paper>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}

export default Search