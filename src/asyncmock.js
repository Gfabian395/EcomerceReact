const items = [
    {
        id: 1,
        nombre: 'Smartphone',
        detalle: 'Smartphone SAMSUNG S23+',
        precio: '$980.000',
        stock: 3,
        categoria: 'SMARTPHONES',
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/ar/2302/gallery/ar-galaxy-s23-s916-sm-s916bzelaro-thumb-534839507?$152_152_PNG$"
    },
    {
        id: 2,
        nombre: 'Smart Tv',
        detalle: 'Smart tv SAMSUNG Neo Q-Led 80"',
        precio: '$1.350.000',
        stock: 2,
        categoria: 'SMART-TV',
        imagen: "https://images.samsung.com/is/image/samsung/assets/ar/tvs/neoQLED-DK.png?$N_96_PNG$"
    },
    {
        id: 3,
        nombre: 'Cocina',
        detalle: 'Cocina USMAN 4 hornallas + plancha',
        precio: '$650.000',
        stock: 4,
        categoria: 'COCINAS',
        imagen: "https://www.usmansrl.com/wp-content/uploads/2023/06/Carli-4-1-PV-RA-FRENTE.webp"
    },
    {
        id: 4,
        nombre: 'Heladera',
        detalle: 'Heladera SAMSUNG smart touch',
        precio: '$2.640.000',
        stock: 1,
        categoria: 'HELADERAS',
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/ar/rf32cg5410b1bg/gallery/ar-3door-french-door-large-capacity-with-spacemax-technology-rf32cg5410b1bg-542570737?$2052_1641_PNG$"
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 500);
    });
};

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(e => e.id === id));
        }, 300);
    });
};
