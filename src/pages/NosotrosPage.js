import React from 'react';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) =>{
    return(
        <main class="holder">
        <div class="historia">
            <h2>Historia</h2>
            <p>Nuestra organización fue fundada a mediados del 2019, en el auge de la minería informática. Durante ese periodo, en la sociedad existía la necesidad de conocer y explorar el mundo de la minería de criptomonedas.</p>
            <p>La característica que nos diferencia de nuestros principales competidores es la excelencia en el asesoramiento, calidad y garantía de nuestros productos especializados en la minería de criptomonedas.</p>
        </div>
        <div class="staff">
            <h2>Nuestro equipo</h2>
            <div class="personas">
                <div class="persona">
                    <img src="img/nosotros/Lautaro Jaimes.JPG" alt="Lautaro Jaimes"/>
                    <h5>Lautaro Jaimes</h5>
                    <h6>Fundador</h6>
                    <p>Originario de la zona oeste del Gran Buenos Aires, fue quien fundó nuestra compañía con el fin de abastecer la necesidad del mercado encontrada.</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/Juan Perez.jpeg" alt="Juan Pérez"/>
                    <h5>Juan Pérez</h5>
                    <h6>Encargado</h6>
                    <p>Con su basta experiencia en gestión y administración de equipos, nuestro líder y co-fundador se desempeña como encargado.</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/Carlos Lopez.jpg" alt="Carlos López"/>
                    <h5>Carlos López</h5>
                    <h6>Técnico Informático</h6>
                    <p>Su continua formación académica y en investigación de mejores productos en el mercado nos permite brindar un servicio de excelente calidad.</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/Laura Gomez.jpg" alt="Laura Gómez"/>
                    <h5>Laura Gómez</h5>
                    <h6>Atención al cliente</h6>
                    <p>Se desempeña en brindar la mejor experiencia en atención y asesoramiento para todos nuestros clientes.</p>
                </div>
            </div>
        </div>
    </main>
    );
}

export default NosotrosPage;