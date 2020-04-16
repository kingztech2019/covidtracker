import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
        main: {
          marginTop: theme.spacing(8),
          marginBottom: theme.spacing(2),
        },
        footer: {
          padding: theme.spacing(3, 2),
          marginTop: 'auto',
          backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        },
      }));
      const classes = useStyles();
    return (
        <div>
           <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Link color="inherit" target="blank" href="https://faloreoluwajuwon.netlify.com">About the developer</Link>
           
        </Container>
      </footer>
        </div>
    );
};

export default Footer;