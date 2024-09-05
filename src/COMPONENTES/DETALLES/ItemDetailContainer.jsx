import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { db } from '../../SERVICIOS/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
    const [prod, setProd] = useState(null);  // Cambié el estado inicial a null para mayor claridad
    const [cargando, setCargando] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setCargando(true);

        const productRef = doc(db, "productos", id);
        getDoc(productRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    setProd({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.error("Producto no encontrado");
                }
            })
            .catch(error => {
                console.error("Error obteniendo el producto:", error);
            })
            .finally(() => {
                setCargando(false);  // Aquí lo ejecutamos al final
            });
    }, [id]);

    if (cargando) {
        return <h1 className="mensaje-cargando">Cargando....</h1>;
    }

    return (
        <>
            {prod ? <ItemDetail prod={prod} /> : <h2 className="mensaje-error">Producto no encontrado</h2>}
        </>
    );
};
