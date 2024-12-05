import React from 'react';

const ProductoItem = (props) => {
    const { nombre, precio, categoria, imagen, body } = props;

    return(
        <div className='productos'>
            <h1>{nombre}</h1>
            <p>$ {precio}</p>
            <p>{categoria}</p>
            <img src={imagen} width={30} height={30}/>
            <div dangerouslySetInnerHTML={{ __html:body}}/>
            <hr />
        </div>
    );
}

export default ProductoItem;