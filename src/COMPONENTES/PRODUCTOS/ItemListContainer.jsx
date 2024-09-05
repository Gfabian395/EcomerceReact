import React,{useEffect,useState} from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../SERVICIOS/firebaseConfig';

export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoria } = useParams()


    useEffect(() => {
        setCargando(true);
        const obtenerProductos = async () => {
            try {
                if (categoria) {
                    const productosPorCat = query(collection(db, "productos"), where("categoria", "==", categoria));
                    const snapshot = await getDocs(productosPorCat);
                    const prods = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setItems(prods);
                } else {
                    const snapshot = await getDocs(collection(db, "productos"));
                    const prods = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setItems(prods);
                }
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setCargando(false);
            }
        };
    
        obtenerProductos();
    }, [categoria]);
    

    if (cargando) {
        return (
            <h2>Cargando....</h2>
        );
    }

    return (
        <div>
            <div>
               
            </div>
            <ItemList items={items} />
        </div>
    )
}