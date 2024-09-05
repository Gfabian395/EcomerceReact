import React, { useContext, useState } from 'react';
import { CartContext } from '../CONTEXTO/CartContext';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../SERVICIOS/firebaseConfig';
import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUID
import './Checkout.css';

export const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [mail, setMail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [order, setOrder] = useState(null);
    const [codigoUnico, setCodigoUnico] = useState(""); // Estado para almacenar el código único
    const [error, setError] = useState(""); // Estado para manejar errores

    const { cart } = useContext(CartContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Limpiar errores antes de la nueva operación

        try {
            const user = {
                nombre,
                mail,
                direccion
            };

            // Genera un código único para la compra
            const codigoGenerado = uuidv4();
            setCodigoUnico(codigoGenerado);

            // Crea la orden en la base de datos
            const data = { user, cart, codigoUnico: codigoGenerado };
            const orderRef = collection(db, "ordenes");
            const orderId = await addDoc(orderRef, data);

            // Actualiza el stock de cada producto
            await Promise.all(cart.map(async (producto) => {
                const productRef = doc(db, "productos", producto.id);
                const productSnap = await getDoc(productRef);
                const productData = productSnap.data();

                if (productData && productData.stock >= producto.cantidad) {
                    await updateDoc(productRef, {
                        stock: productData.stock - producto.cantidad
                    });
                } else {
                    console.error(`No hay suficiente stock para el producto ${producto.nombre}`);
                    throw new Error(`No hay suficiente stock para el producto ${producto.nombre}`);
                }
            }));

            setOrder({ id: orderId.id, codigoUnico: codigoGenerado });
        } catch (err) {
            setError('Ocurrió un error al procesar tu compra. Inténtalo nuevamente.');
            console.error('Error al procesar la compra:', err);
        }
    };

    return (
        <div>
            <form className='formulario-confirmacion' onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    className='campo-input'
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <label htmlFor="mail">Mail</label>
                <input
                    type="email"
                    id="mail"
                    className='campo-input'
                    onChange={(e) => setMail(e.target.value)}
                    required
                />
                <label htmlFor="direccion">Dirección</label>
                <input
                    type="text"
                    id="direccion"
                    className='campo-input'
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                />
                <button type='submit' className='boton-confirmar'>Confirmar</button>
            </form>
            {error && <p className='error-message'>{error}</p>}
            {order && (
                <div className='confirmacion'>
                    <h2>Compra Confirmada</h2>
                    <p>Tu código único para recoger la compra es: <strong>{order.codigoUnico}</strong></p>
                    <p>ID de la orden: <strong>{order.id}</strong></p>
                </div>
            )}
        </div>
    );
};
