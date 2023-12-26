import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaCircleChevronDown } from "react-icons/fa6";
import styles from './tarjeta.module.css'


const Tarjeta = ({nombre,descripcion,logo})  => {

return (
    <>

    
    <Card className={'ml-32 border shadow-2xl ' + styles.card} sx={{ maxWidth: 345 }}>
   
    <img className={styles.img }   src={logo}></img>

      <CardContent className={styles.content}>
        <Typography gutterBottom  variant="h5" component="div">
        {nombre}
        </Typography>
   
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button className={styles.icon + " text-center"} size="small"><FaCircleChevronDown /></Button>
      </CardActions>
    </Card>
    </>
  )
}

export default Tarjeta;


