import { Product } from './types';

export const products: Product[] = [
  {
    id: 'conjunto-lienzo',
    name: 'Conjunto Lienzo Artesanal',
    category: 'Ropa',
    price: 420000,
    description: 'Hermoso conjunto de algodón pintado a mano que combina frescura y diseño artístico. Incluye dos prendas individuales: Blusón ($280.000) y Falda ($140.000), ideales para usar en conjunto o por separado.',
    details: ['100% Algodón', 'Pintado a mano', 'Incluye blusón y falda', 'Disponible en todas las tallas'],
    images: [
      '/images/la_chica_esta_posando_sutilmente_202606031930.jpeg',
      '/images/Quiero_que_me_des_solo_202606031931.jpeg',
      '/images/muestrame_solo_la_falda_2K_202606031931.jpeg'
    ]
  },
  {
    id: 'chaqueta-jean',
    name: 'Chaqueta Jean Larga Esencia Libre',
    category: 'Ropa',
    price: 380000,
    description: 'Hermosa chaqueta de jean larga pintada a mano y completamente personalizada, convirtiéndose en una prenda única y llena de arte.',
    details: ['100% Jean', 'Pintado a mano', 'Diseño personalizado', 'Talla única'],
    images: [
      '/images/chaqueta_jean_larga.jpeg'
    ]
  },
  {
    id: 'blusa-amarilla',
    name: 'Blusa Amarilla Radiante',
    category: 'Ropa',
    price: 150000,
    description: 'Alegre blusa de algodón en un vibrante tono amarillo, realzada con encantadores prendedores artesanales. Una elección fresca y versátil para cualquier ocasión.',
    details: ['100% Algodón', 'Incluye prendedores decorativos', 'Disponible en todas las tallas'],
    images: [
      '/images/blusa_amarilla.jpeg'
    ]
  },
  {
    id: 'vestido-bordado',
    name: 'Vestido Bordado Encanto Artesanal',
    category: 'Vestidos',
    price: 320000,
    description: 'Elegante vestido de algodón con detalles bordados a mano. Una pieza única, elaborada y personalizada a tu medida que resalta por su belleza y comodidad.',
    details: ['100% Algodón', 'Bordado artesanal', 'Diseño personalizado', 'Disponible en todas las tallas'],
    images: [
      '/images/vestido_bordado.jpeg'
    ]
  },
  {
    id: 'algodon-pintado',
    name: 'Prenda Algodón Pincelada Única',
    category: 'Ropa',
    price: 280000,
    description: 'Exclusiva prenda de algodón con diseño artístico pintado a mano. Totalmente personalizada para ofrecerte una pieza original, cómoda y llena de creatividad.',
    details: ['100% Algodón', 'Pintado a mano', 'Diseño personalizado', 'Disponible en todas las tallas'],
    images: [
      '/images/algodon_pintado_1.jpeg',
      '/images/algodon_pintado_2.jpeg'
    ]
  },
  {
    id: 'conjunto-armonia',
    name: 'Conjunto Armonía Textil',
    category: 'Ropa',
    price: 330000,
    description: 'Elegante y cómodo conjunto compuesto por un pantalón ($220.000) y una delicada blusa ($110.000). Diseñado para ofrecer frescura y estilo, permitiéndote usar ambas piezas juntas o combinarlas por separado.',
    details: ['Incluye blusa y pantalón', 'Corte elegante y cómodo', 'Disponible en todas las tallas'],
    images: [
      '/images/conjunto_pantalon_blusa_1.jpeg',
      '/images/conjunto_pantalon_blusa_2.jpeg'
    ]
  },
  {
    id: 'conjunto-algodon',
    name: 'Conjunto Algodón Esencial',
    category: 'Ropa',
    price: 240000,
    description: 'Precioso conjunto confeccionado en algodón de la mejor calidad. Su diseño te brinda frescura y versatilidad para llevar un look relajado pero con mucha personalidad.',
    details: ['100% Algodón', 'Corte fresco y cómodo', 'Disponible en todas las tallas'],
    images: [
      '/images/conjunto_algodon_1.jpeg',
      '/images/conjunto_algodon_2.jpeg'
    ]
  },
  {
    id: 'pantalon-versatil',
    name: 'Pantalón Versátil Dril/Chambray',
    category: 'Ropa',
    price: 140000,
    description: 'Pantalón cómodo y con mucho estilo, disponible confeccionado en dril o en chambray según tu preferencia. Una prenda esencial para crear looks casuales o formales.',
    details: ['Disponible en Dril o en Chambray', 'Corte favorecedor', 'Disponible en todas las tallas'],
    images: [
      '/images/pantalon_dril_chambray.jpeg'
    ]
  },
  {
    id: 'pantalon-lino',
    name: 'Pantalón Lino',
    category: 'Ropa',
    price: 140000,
    description: 'Elegante y cómodo pantalón confeccionado en lino de alta calidad. Perfecto para mantenerte fresca con un toque de sofisticación.',
    details: ['100% Lino', 'Corte elegante', 'Disponible en todas las tallas'],
    images: [
      '/images/pantalon_lino.jpeg'
    ]
  },
  {
    id: 'talego-pintado',
    name: 'Talego Pintado a Mano',
    category: 'Vestidos',
    price: 180000,
    description: 'Hermoso talego pintado a mano con diseños personalizados. Una prenda artesanal única para destacar tu estilo.',
    details: ['Pintado a mano', 'Diseño personalizado', 'Tallas disponibles: S, M, L'],
    images: [
      '/images/talego_pintado_1.jpeg',
      '/images/talego_pintado_2.jpeg'
    ]
  },
  {
    id: 'dril-pintado',
    name: 'Prenda Dril Algodón Pintada',
    category: 'Ropa',
    price: 180000,
    description: 'Prenda de dril algodón pintada a mano con un toque personalizado. Estilo artesanal, perfecta para lucir una pieza única.',
    details: ['Dril algodón', 'Pintado personalizado a mano', 'Tallas disponibles: XL, 2XL'],
    images: [
      '/images/dril_pintado_1.jpeg',
      '/images/dril_pintado_2.jpeg'
    ]
  },
  {
    id: 'prenda-pintada-personalizada',
    name: 'Prenda Pintada Personalizada',
    category: 'Ropa',
    price: 280000,
    description: 'Prenda exclusiva con diseño pintado personalizado a mano. Una obra de arte portable para resaltar tu estilo.',
    details: ['Pintado personalizado a mano', 'Diseño exclusivo', 'Tallas disponibles: XS, XL, 2XL'],
    images: [
      '/images/prenda_pintada_1.jpeg',
      '/images/prenda_pintada_2.jpeg'
    ]
  },
  {
    id: 'gorra-1',
    name: 'Gorras Personalizadas Pintadas a Mano',
    category: 'Accesorios',
    price: 70000,
    description: 'Cada gorra es un lienzo único que destaca por sus vibrantes toques en color neón. Pintadas a mano de manera artesanal, son piezas exclusivas perfectas para añadir actitud y originalidad a tus outfits diarios.',
    details: ['Pintura textil duradera', 'Diseño exclusivo', 'Ajustable'],
    images: [
      '/images/gorras_nueva_1.jpeg'
    ]
  },
  {
    id: 'sombrero-1',
    name: 'Sombrero Azul Medianoche',
    category: 'Accesorios',
    price: 100000,
    description: 'Sombrero único pintado a mano, diseñado para brindarte un toque especial de estilo, elegancia y protección. Perfecto para días soleados o como un accesorio distintivo en cualquier ocasión.',
    details: ['Pintado a mano', 'Diseño exclusivo', 'Talla única'],
    images: [
      '/images/sombrero_1.jpeg'
    ]
  },
  {
    id: 'sombrero-2',
    name: 'Sombrero Atardecer Bohemio',
    category: 'Accesorios',
    price: 100000,
    description: 'Destaca con este sombrero exclusivo pintado a mano, que combina arte y versatilidad. Su diseño cuidado lo convierte en el complemento ideal para quienes buscan un estilo auténtico.',
    details: ['Pintado a mano', 'Diseño exclusivo', 'Talla única'],
    images: [
      '/images/sombrero_2.jpeg'
    ]
  },
  {
    id: 'sombrero-3',
    name: 'Sombrero Brisa Estival',
    category: 'Accesorios',
    price: 100000,
    description: 'Crea tu propio camino con este increíble sombrero decorado artesanalmente. Una pieza versátil y llamativa, pensada para elevar tu look con un toque verdaderamente artístico.',
    details: ['Pintado a mano', 'Diseño exclusivo', 'Talla única'],
    images: [
      '/images/sombrero_3.jpeg'
    ]
  }
];