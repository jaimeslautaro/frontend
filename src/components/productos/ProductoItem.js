import React from 'react';

const ProductoItem = (props) => {
    const { nombre, precio, categoria, imagen, body } = props;

    return(
        <div className='producto'>
            <h1>{nombre}</h1>
            <p>$ {precio}</p>
            <p>{categoria}</p>
            <img src={imagen} alt='' width={120} height={120} />
            <div className='nodisplay' dangerouslySetInnerHTML={{ __html:body}}/>
        </div>
    );
}

export default ProductoItem;