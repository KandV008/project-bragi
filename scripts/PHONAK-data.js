/*
    GUIDE
        Colors:
            P1 - Beige Sand
            P3 - Sandalwood
            P4 - Brown
            P5 - Champagne
            P6 - Silver gray
            P7 - Graphite
            P8 - Velvety black
            Q2 - Electric green
            Q3 - Caribbean Pirate
            T3 - Precious Rose
            H0 - Beige
*/

const phonakProducts = [
  /* --- INFINIO --- */
  { // Audéo Sphere Infinio 90 R
    name: "Audéo Sphere Infinio 90 R",
    category: "EARPHONE",
    price: [3076.50, 4395.00], // Un solo precio, aplicar 70%
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // 2 o 3 líneas
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P7",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", "GPS"],
    adaptation_range: ["MILD", "MODERATE", "SEVERE"], // Rango de valores (2 opciones)
    dust_water_resistance: true,
    brand: "PHONAK",
    location: "RETROAURICULAR",
    level_of_discretion: "VISIBLE",
    degree_of_loss: ["MILD", "MODERATE", "SEVERE"],
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Sphere Infinio 70 R
    name: "Audéo Sphere Infinio 70 R",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P7",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", "GPS"],
    adaptation_range: ["MILD", "MODERATE", "SEVERE"], // Rango de valores
    dust_water_resistance: true,
    brand: "PHONAK",
    location: "RETROAURICULAR",
    degree_of_loss: ["MILD", "MODERATE", "SEVERE"],
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Infinio 90 R
    name: "Audéo Infinio 90 R",
    category: "EARPHONE",
    price: [2866.50, 4095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P7",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", "GPS"],
    adaptation_range: ["MILD", "MODERATE", "SEVERE"], // Rango de valores
    dust_water_resistance: true,
    brand: "PHONAK",
    location: "RETROAURICULAR",
    level_of_discretion: "VISIBLE",
    degree_of_loss: ["MILD", "MODERATE", "SEVERE"],
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Infinio 70 R
    name: "Audéo Infinio 70 R",
    category: "EARPHONE",
    price: [2446.50, 3495.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P7",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", "GPS"],
    adaptation_range: "MILD",
    dust_water_resistance: true,
    brand: "PHONAK",
    location: "RETROAURICULAR",
    level_of_discretion: "VISIBLE",
    degree_of_loss: ["MILD", "MODERATE", "SEVERE"],
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // CROS Infinio R
    name: "CROS Infinio R",
    category: "EARPHONE",
    price: [1234.56, 2345,67], // TODO -> Solo puedes comprar 1 audífono (su función y esa cosa)
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P7",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador incluido"],
    adaptation_range: ["COFOSIS"], // COFOSIS -> Oído muerto
    dust_water_resistance: true,
    brand: "PHONAK",
    location: "RETROAURICULAR", // Todos los CROS son Retroauricular
    level_of_discretion: "VISIBLE",
    degree_of_loss: ["COFOSIS"], // COFOSIS -> Oído muerto
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  /* --- LUMITY --- */
  { // Slim Lumity 90-R
    name: "Slim Lumity 90-R",
    category: "EARPHONE",
    price: [2866.50, 4095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "2A",
        images: [
          "/products/no-image.png",
        ],
        color: "3A",
        images: [
          "/products/no-image.png",
        ],
        color: "4A",
        images: [
          "/products/no-image.png",
        ],
        color: "6A",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", ""],
    adaptation_range: ["MILD"],
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Slim Lumity 70-R
    name: "Slim Lumity 70-R",
    category: "EARPHONE",
    price: [2446.50, 3495.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "2A",
        images: [
          "/products/no-image.png",
        ],
        color: "3A",
        images: [
          "/products/no-image.png",
        ],
        color: "4A",
        images: [
          "/products/no-image.png",
        ],
        color: "6A",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Slim Lumity 50-R
    name: "Slim Lumity 50-R",
    category: "EARPHONE",
    price: [2026.5, 2895.0],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "2A",
        images: [
          "/products/no-image.png",
        ],
        color: "3A",
        images: [
          "/products/no-image.png",
        ],
        color: "4A",
        images: [
          "/products/no-image.png",
        ],
        color: "6A",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-RL
    name: "Audéo Lumity 90-RL",
    category: "EARPHONE",
    price: [2866.5, 4095.0],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: true,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-RL
    name: "Audéo Lumity 70-RL",
    category: "EARPHONE",
    price: [2516.50, 3595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: true,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-RL
    name: "Audéo Lumity 50-RL",
    category: "EARPHONE",
    price: [2026.50, 2895.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: true,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-R
    name: "Audéo Lumity 90-R",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-RT
    name: "Audéo Lumity 90-RT",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-PR
    name: "Naída Lumity 90-PR",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-PR
    name: "Sky Lumity 90-PR",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-R
    name: "Audéo Lumity 70-R",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-RT
    name: "Audéo Lumity 70-RT",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-PR
    name: "Naída Lumity 70-PR",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-PR
    name: "Sky Lumity 70-PR",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-R
    name: "Audéo Lumity 50-R",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-RT
    name: "Audéo Lumity 50-RT",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-PR
    name: "Naída Lumity 50-PR",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-PR
    name: "Sky Lumity 50-PR",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-R
    name: "Audéo Lumity 30-R",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-RT
    name: "Audéo Lumity 30-RT",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-PR
    name: "Naída Lumity 30-PR",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-PR
    name: "Sky Lumity 30-PR",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // CROSS Lumity R
    name: "CROSS Lumity R",
    category: "EARPHONE",
    price: [1234.50, 1395.00], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-312
    name: "Audéo Lumity 90-312",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-UP
    name: "Naída Lumity 90-UP",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-SP
    name: "Naída Lumity 90-SP",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-UP
    name: "Sky Lumity 90-UP",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-M
    name: "Sky Lumity 90-M",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-312
    name: "Audéo Lumity 70-312",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-UP
    name: "Naída Lumity 70-UP",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-SP
    name: "Naída Lumity 70-SP",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-UP
    name: "Sky Lumity 70-UP",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-M
    name: "Sky Lumity 70-M",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-312
    name: "Audéo Lumity 50-312",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-UP
    name: "Naída Lumity 50-UP",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-SP
    name: "Naída Lumity 50-SP",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-UP
    name: "Sky Lumity 50-UP",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-M
    name: "Sky Lumity 50-M",
    category: "EARPHONE",
    price: [1816.50, 2595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-312
    name: "Audéo Lumity 30-312",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "T3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "Q3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "Q2",
      images: [
        "/products/no-image.png",
      ],
    },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-UP
    name: "Naída Lumity 30-UP",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-SP
    name: "Naída Lumity 30-SP",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-UP
    name: "Sky Lumity 30-UP",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-M
    name: "Sky Lumity 30-M",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC", "RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  /* --- PARADISE --- */
  { // Audéo Paradise 90-R
    name: "Audéo Paradise 90-R",
    category: "EARPHONE",
    price: [2516.50, 3595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 90-RT
    name: "Audéo Paradise 90-RT",
    category: "EARPHONE",
    price: [2516.50, 3595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 70-R
    name: "Audéo Paradise 70-R",
    category: "EARPHONE",
    price: [2116.50, 3095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 70-RT
    name: "Audéo Paradise 70-RT",
    category: "EARPHONE",
    price: [2116.50, 3095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 50-R
    name: "Audéo Paradise 50-R",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 50-RT
    name: "Audéo Paradise 50-RT",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 90-312
    name: "Audéo Paradise 90-312",
    category: "EARPHONE",
    price: [2516.50, 3595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 90-13T
    name: "Audéo Paradise 90-13T",
    category: "EARPHONE",
    price: [2516.50, 3595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 70-312
    name: "Audéo Paradise 70-312",
    category: "EARPHONE",
    price: [2166.50, 3095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 70-13T
    name: "Audéo Paradise 70-13T",
    category: "EARPHONE",
    price: [2166.50, 3095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 50-312
    name: "Audéo Paradise 50-312",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 50-13T
    name: "Audéo Paradise 50-13T",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 30-312
    name: "Audéo Paradise 30-312",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 30-13T
    name: "Audéo Paradise 30-13T",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // CROS Paradise 30-13T
    name: "CROS Paradise 30-13T",
    category: "EARPHONE",
    price: [1234.50, 1095.00], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-Titanium NW O
    name: "Virto Paradise 90-Titanium NW O",
    category: "EARPHONE",
    price: [2656.50, 3795.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-Titanium NW O
    name: "Virto Paradise 70-Titanium NW O",
    category: "EARPHONE",
    price: [2306.50, 3295.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-10 NW O
    name: "Virto Paradise 90-10 NW O",
    category: "EARPHONE",
    price: [2516.50, 3595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-312 NW O
    name: "Virto Paradise 90-312 NW O",
    category: "EARPHONE",
    price: [2516.50, 3595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-312
    name: "Virto Paradise 90-312",
    category: "EARPHONE",
    price: [2516.50, 3595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-10 NW O
    name: "Virto Paradise 70-10 NW O",
    category: "EARPHONE",
    price: [2166.50, 3095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-312 NW O
    name: "Virto Paradise 70-312 NW O",
    category: "EARPHONE",
    price: [2166.50, 3095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-312
    name: "Virto Paradise 70-312",
    category: "EARPHONE",
    price: [2166.50, 3095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-10 NW O
    name: "Virto Paradise 50-10 NW O",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-312 NW O
    name: "Virto Paradise 50-312 NW O",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-312
    name: "Virto Paradise 50-312",
    category: "EARPHONE",
    price: [1676.50, 2395.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-10 NW O
    name: "Virto Paradise 30-10 NW O",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-312 NW O
    name: "Virto Paradise 30-312 NW O",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-312
    name: "Virto Paradise 30-312",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P4",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P5",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
      color: "P7",
      images: [
        "/products/no-image.png",
      ],
      },
      {
        color: "P8",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["CIC", "INTRACANAL"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  /* --- BASIC (TERRA) --- */
  { // Terra+ RIC-312
    name: "Terra+ RIC-312",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },

      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra+ BTE-M
    name: "Terra+ BTE-M",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },

      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra+ BTE-SP
    name: "Terra+ BTE-SP",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },

      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra+ BTE-UP
    name: "Terra+ BTE-UP",
    category: "EARPHONE",
    price: [1466.50, 2095.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },

      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra RIC-312
    name: "Terra RIC-312",
    category: "EARPHONE",
    price: [1116.50, 1595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },

      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RIC"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra BTE-M
    name: "Terra BTE-M",
    category: "EARPHONE",
    price: [1116.50, 1595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },

      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra BTE-SP
    name: "Terra BTE-SP",
    category: "EARPHONE",
    price: [1116.50, 1595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },

      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra BTE-UP
    name: "Terra BTE-UP",
    category: "EARPHONE",
    price: [1116.50, 1595.00],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    colors: [
      {
        color: "P1",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "P3",
        images: [
          "/products/no-image.png",
        ],
      },

      {
        color: "P6",
        images: [
          "/products/no-image.png",
        ],
      },
      {
        color: "H0",
        images: [
          "/products/no-image.png",
        ],
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD",
    dust_water_resistance: false,
    brand: "PHONAK",
    location: ["RETROAURICULAR"],
    level_of_discretion: "VISIBLE",
    degree_of_loss: "MILD",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },

];

const phonakAccessories = [
  /* --- INFINIO --- */
  { // ChargerGo RIC Infinio Sphere
    name: "ChargerGo RIC Infinio Sphere",
    category: "ACCESSORY",
    price: [1234.50], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // Va a ser para que sirve
    include: ["Cargador de X longitud", "Puerto C", "Acumulador de Batería"],
    brand: "PHONAK",
    relatedProduct: "Audéo Sphere Infinio"
  },
  { // ChargerGo RIC Infinio
    name: "ChargerGo RIC Infinio",
    category: "ACCESSORY",
    price: [1234.50], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
      include: ["Cargador de X longitud", "Puerto C", "Acumulador de Batería"],
      brand: "PHONAK",
    relatedProduct: "Audéo Infinio"
  },
  { // Charger RIC Infinio
    name: "Charger RIC Infinio",
    category: "ACCESSORY",
    price: [1234.50], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C"],
    brand: "PHONAK",
    relatedProduct: "Audéo Infinio"
  },
  /* --- LUMITY --- */
  { // Charger Easy
    name: "Charger Easy",
    category: "ACCESSORY",
    price: [1234.50], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C"],
    brand: "PHONAK",
    relatedProduct: "Lumity Base" 
  },
  { // Life Charger
    name: "Life Charger",
    category: "ACCESSORY",
    price: [1234.50], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C"],
    brand: "PHONAK",
    relatedProduct: "Lumity Base"
  },
  { // Charger Case Go (Life)
    name: "Charger Case Go (Life)",
    category: "ACCESSORY",
    price: [1234.50], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C", "Acumulador de Bateria"],
    brand: "PHONAK",
    relatedProduct: "Lumity RL"
  },
  { // Charger Slim
    name: "Charger Slim",
    category: "ACCESSORY",
    price: [1234.50], // TODO
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C"],
    brand: "PHONAK",
    relatedProduct: "Slim Lumity"
  },

]

module.exports = { phonakProducts: phonakProducts, phonakAccessories: phonakAccessories };
