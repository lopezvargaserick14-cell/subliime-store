const fs = require('fs');

const file = 'c:\\Users\\LOPEZ VARGAS\\Desktop\\Videos sora\\Webs\\Sublime\\subliime-by-gerlyn\\lib\\data.ts';
let code = fs.readFileSync(file, 'utf8');

const replacements = [
  { oldId: 'blusa-ensueno-floral', newId: 'vestido-brisa-estival', newName: 'Vestido Brisa Estival', price: 80000 },
  { oldId: 'blusa-canto-sirena', newId: 'vestido-pasion-floral', newName: 'Vestido Pasión Floral', price: 80000 },
  { oldId: 'blusa-alba-dorada', newId: 'vestido-encanto-silvestre', newName: 'Vestido Encanto Silvestre', price: 80000 },
  { oldId: 'blusa-danza-hojas', newId: 'vestido-aurora-radiante', newName: 'Vestido Aurora Radiante', price: 80000 },
  { oldId: 'blusa-reflejo-lunar', newId: 'vestido-vuelo-colibri', newName: 'Vestido Vuelo de Colibrí', price: 80000 },
  { oldId: 'blusa-paraiso-oculto', newId: 'vestido-armonia-botanica', newName: 'Vestido Armonía Botánica', price: 80000 },
  { oldId: 'blusa-brisa-mistica', newId: 'vestido-noche-verano', newName: 'Vestido Noche de Verano', price: 280000 },
  { oldId: 'blusa-suspiro-otono', newId: 'vestido-susurro-elegante', newName: 'Vestido Susurro Elegante', price: 280000 }
];

replacements.forEach(r => {
  const regex = new RegExp(`id: '${r.oldId}',\\s*name: '[^']+',\\s*category: '[^']+',\\s*price: \\d+,`, 'g');
  code = code.replace(regex, `id: '${r.newId}',\n    name: '${r.newName}',\n    category: 'Vestidos',\n    price: ${r.price},`);
  
  // also fix the description to mention 'vestido' instead of 'blusa'
  code = code.replace(new RegExp(`description: '([^']*)blusa([^']*)'`, 'g'), `description: '$1vestido$2'`);
});

fs.writeFileSync(file, code);
console.log('Updated successfully');
