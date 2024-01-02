import React from 'react';
import Panel from '../../components/Panel';
import Tarjeta2 from '../../components/Tarjeta/index2';

const Noticias = () => {
  return (
    <>
      <Panel imagen="src/assets/concepto-comunicacion-ocio-personas.jpg"  seccion="COMUNIDAD / NOTICIAS" subSeccion=" "/>
      <div className={` grid grid-cols-3 gap-3 text-center m-12 `}>
    <Tarjeta2 dia="11" mes="Ago" año="2023" imagen="src/assets/415005897_771483971675927_9030247006851556483_n.jpg" titulo="Avances prometedores en la vacuna contra el cáncer" descripcion=""/>
    <Tarjeta2 dia="15" mes="Oct" año="2022" imagen="https://scontent.fncj2-1.fna.fbcdn.net/v/t39.30808-6/409200869_761272736030384_5284781383306077537_n.jpg?stp=dst-jpg_p235x350&_nc_cat=103&ccb=1-7&_nc_sid=ab7367&_nc_ohc=HH2xSPlz2zcAX-Vujps&_nc_ht=scontent.fncj2-1.fna&edm=AN6CN6oEAAAA&oh=00_AfChiF6uQfm5wbPtXIFuBFgrglInF3vW2CVek2K7ohnXjQ&oe=6598C732" titulo="Avances prometedores en la vacuna contra el cáncer" descripcion="Avances prometedores en la vacuna contra el cáncer"/>
    <Tarjeta2 dia="07" mes="Feb" año="2023" imagen="https://scontent.fncj2-1.fna.fbcdn.net/v/t39.30808-6/405480642_752963690194622_5081006090001583150_n.jpg?stp=dst-jpg_s526x296&_nc_cat=103&ccb=1-7&_nc_sid=ab7367&_nc_ohc=mee8xgO3S_oAX9apDMX&_nc_ht=scontent.fncj2-1.fna&edm=AN6CN6oEAAAA&oh=00_AfA4448sYJIV3SqMaxNNUToWOIrOFxRDn2cZGXiBYzdI-g&oe=65989C20" titulo="Avances prometedores en la vacuna contra el cáncer" descripcion="Avances prometedores en la vacuna contra el cáncer"/>
    <Tarjeta2 dia="17" mes="Sep" año="2024" imagen="https://scontent.fncj2-1.fna.fbcdn.net/v/t39.30808-6/398969931_740813738076284_2364326481049604784_n.jpg?stp=dst-jpg_p235x350&_nc_cat=106&ccb=1-7&_nc_sid=ab7367&_nc_ohc=5Gt-j0dlvO4AX88WiJf&_nc_ht=scontent.fncj2-1.fna&edm=AN6CN6oEAAAA&oh=00_AfAiNLVwFo24Vt103G8pBxfP7E_szBEl21DY1aeZyIGHbw&oe=65986E6B" titulo="Avances prometedores en la vacuna contra el cáncer" descripcion="Avances prometedores en la vacuna contra el cáncer"/>
    <Tarjeta2 dia="24" mes="Abr" año="2021"  imagen="https://scontent.fncj2-1.fna.fbcdn.net/v/t39.30808-6/399091433_740794468078211_5544889967773697300_n.jpg?stp=dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=ab7367&_nc_ohc=zPk1Hx9Nv1EAX9ZfGXy&_nc_ht=scontent.fncj2-1.fna&edm=AN6CN6oEAAAA&oh=00_AfCr-y6ndA4OIgeoSi6MV647VtrI5-vMIF0RhAnvmtGTCw&oe=65990A9D" titulo="Avances prometedores en la vacuna contra el cáncer" descripcion="Avances prometedores en la vacuna contra el cáncer"/>
    <Tarjeta2 dia="12" mes="May" año="2022"   imagen="https://scontent.fncj2-1.fna.fbcdn.net/v/t39.30808-6/396222038_734370082053983_666869498558829117_n.jpg?stp=dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=8baee0&_nc_ohc=XWpL9k9DMUsAX8YrC6w&_nc_oc=AQm5PJruOArnz9FgD8gEzHmDocfUMiOZI_0O32CKEd-fSp__YuzxnICCKzGQ3tXcGd0&_nc_ht=scontent.fncj2-1.fna&edm=AN6CN6oEAAAA&oh=00_AfAvKNyuBNvKbG6xxbTMJUmz-IV2MmzLiS322y5eW5g7Lw&oe=65995A39" titulo="Avances prometedores en la vacuna contra el cáncer" descripcion="Avances prometedores en la vacuna contra el cáncer"/>


      </div>
    </>
  );
}

export default Noticias;
