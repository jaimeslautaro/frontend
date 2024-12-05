import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) =>{
    return(
        <main class="holder">
        <div class="contenedor">
            <img src="img/home/principal.jpg" alt="Hardware"/>
        </div>
        <div class="columnas">
            <section class="bienvenidos">
                <h2>Bievenidos</h2>
                <p>En nuestras tiendas y sitio encontrarán las mejores ofertas en productos de hardware especializados en minería de criptomonedas y relacionados.<br/>¡Anímese a adentrarse en el mundo del futuro con nosotros!</p>
            </section>
            <section class="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita">
                        Los mejores productos, atención y asesoramiento.
                    </span>
                    <span class="autor">
                        Juan Pérez - CEO de Adidas
                    </span>
                </div>
            </section>
        </div>
    </main>
    );
}

export default HomePage;