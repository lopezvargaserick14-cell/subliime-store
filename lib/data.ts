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
  },
  {
    id: 'blusa-amanecer-radiante',
    name: 'Blusa Amanecer Radiante',
    category: 'Ropa',
    price: 280000,
    description: 'Una vibrante blusa fucsia que captura la magia de la naturaleza en su máximo esplendor. Pintada meticulosamente a mano, presenta un delicado colibrí en pleno vuelo que se acerca a una flor lila. Esta prenda elegante es el reflejo de la libertad y el color.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves1.jpeg', '/images/ves1.1.jpeg']
  },
  {
    id: 'blusa-latido-bohemio',
    name: 'Blusa Latido Bohemio',
    category: 'Ropa',
    price: 280000,
    description: 'Celebra la pasión y el romance con esta pieza de diseño exclusivo. Su lienzo blanco cobra vida con un vibrante corazón pintado a mano, la cálida palabra "Amore" y elegantes trazos botánicos en tonos verdes y cobrizos. Arte puro que irradia pura alegría y sofisticación.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves2.jpeg', '/images/ves2.2.jpeg']
  },
  {
    id: 'blusa-susurro-viento',
    name: 'Blusa Susurro de Viento',
    category: 'Ropa',
    price: 280000,
    description: 'Elegancia pura en una camisa clásica que se transforma en poesía visual. Tres majestuosas mariposas en tonos púrpuras y rosados descienden en perfecta armonía, acompañadas de sutiles arabescos dorados que flotan como un susurro pintado a mano.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves3.jpeg', '/images/ves3.1.jpeg']
  },
  {
    id: 'blusa-misterio-esmeralda',
    name: 'Blusa Misterio Esmeralda',
    category: 'Ropa',
    price: 280000,
    description: 'El enigma del fondo oscuro se ilumina con la majestuosidad de sublimes plumas de pavo real pintadas a mano en tonos dorados y esmeralda. Una obra de arte sumamente cautivadora y elegante, diseñada para almas enigmáticas que buscan deslumbrar.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves4.jpeg', '/images/ves4.1.jpeg']
  },
  {
    id: 'blusa-dulce-primavera',
    name: 'Blusa Dulce Primavera',
    category: 'Ropa',
    price: 280000,
    description: 'Una delicada camisa que evoca la serenidad de una tarde fresca. Adornada con hermosas margaritas púrpuras pintadas a mano y el encantador detalle de una abejita en vuelo. Su diseño minimalista y romántico inspira tranquilidad y belleza sutil.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves5.jpeg', '/images/ves5.1.jpeg']
  },
  {
    id: 'blusa-oasis-zafiro',
    name: 'Blusa Oasis Zafiro (Manga Corta)',
    category: 'Ropa',
    price: 280000,
    description: 'Fresca, vibrante y llena de luz. Esta prenda en tonos azul profundo es el escenario donde danzan un trío de mariposas multicolores pintadas a mano, con destellos dorados que evocan un oasis de arte y tranquilidad en un día soleado.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves6.jpeg', '/images/ves6.1.jpeg']
  },
  {
    id: 'blusa-fantasia-bosque',
    name: 'Blusa Fantasía de Bosque',
    category: 'Ropa',
    price: 280000,
    description: 'Audaz y exótica. Sobre un fondo lima con texturas abstractas que recuerdan la acuarela, esta camisa luce mariposas púrpuras y negras revoloteando entre flores tropicales pintadas a mano. Una pieza rebosante de energía y encanto místico.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves7.jpeg', '/images/ves7.1.jpeg']
  },
  {
    id: 'blusa-ocaso-dorado-corta',
    name: 'Blusa Ocaso Dorado (Manga Corta)',
    category: 'Ropa',
    price: 280000,
    description: 'La pasión del rojo se fusiona con cálidos trazos abstractos en oro puro, sirviendo de lienzo para mariposas celestes y turquesas. Una blusa pintada a mano que es un verdadero tesoro artesanal, capturando la esencia de un atardecer deslumbrante.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves8.jpeg', '/images/ves8.1.jpeg']
  },
  {
    id: 'blusa-ocaso-dorado-larga',
    name: 'Blusa Ocaso Dorado (Manga Larga)',
    category: 'Ropa',
    price: 280000,
    description: 'La elegante versión en manga larga de nuestro diseño carmesí. Con destellos dorados y ensoñadoras mariposas azules pintadas a mano, ofrece una mezcla perfecta entre el arte clásico y la moda contemporánea de lujo.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves9.jpeg']
  },
  {
    id: 'blusa-noche-estrellada',
    name: 'Blusa Noche Estrellada',
    category: 'Ropa',
    price: 280000,
    description: 'Una obra maestra de misteriosos contrastes. Intervenida con audaces bloques de plata metálico, patrones inspirados en geometrías ancestrales y brillantes mariposas rosas pintadas a mano. Un diseño de lujo, vanguardista y sumamente exclusivo.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves10.jpeg', '/images/ves10.1.jpeg']
  },
  {
    id: 'blusa-solsticio-tropical',
    name: 'Blusa Solsticio Tropical',
    category: 'Ropa',
    price: 280000,
    description: 'Viste la luz del sol con esta camisa que irradia pura energía. Pintada a mano con refinados detalles dorados y una cascada de follaje esmeralda que acompaña a un grácil colibrí. La encarnación perfecta de la elegancia y el paraíso.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves11.jpeg', '/images/ves11.1.jpeg']
  },
  {
    id: 'blusa-pasion-alada',
    name: 'Blusa Pasión Alada',
    category: 'Ropa',
    price: 280000,
    description: 'Sobre un intenso fondo rojo que evoca fuerza y seguridad, florece una delicada enredadera botánica pintada a mano de la cual emergen mariposas celestes adornadas con luz dorada. Femenina, poderosa y espectacularmente artística.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves12.jpeg', '/images/ves12.1.jpeg']
  },
  {
    id: 'blusa-lienzo-ilusiones',
    name: 'Blusa Lienzo de Ilusiones',
    category: 'Ropa',
    price: 280000,
    description: 'Una oda visual al amor y los sueños. Esta inmaculada camisa blanca está decorada a mano con enormes corazones en lilas y fucsias, acompañados por espléndidas mariposas en dorado y zafiro. Un diseño artístico lleno de alegría para almas románticas.',
    details: ['Pintada a mano', 'Diseño exclusivo', 'Disponible en todas las tallas'],
    images: ['/images/ves13.jpeg', '/images/ves13.1.jpeg']
  }
];
