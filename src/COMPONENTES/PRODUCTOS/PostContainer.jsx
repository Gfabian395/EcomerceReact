import React, { useEffect, useState } from 'react';
import './PostContainer.css'

export const PostContainer = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('./prods.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            }).finally(() => setLoading(false));
    }, [])

    return (
        <div className='contenedor-posts'>
            <img src='./vite.svg' alt="se ve bien?" className='imagen-carga' />
            {loading ? (
                <h2 className='cargando'>Cargando...</h2>
            ) : (
                posts.map(post => (
                    <p key={post.id} className='post'>{post.title}</p>
                ))
            )}
        </div>
    )
}