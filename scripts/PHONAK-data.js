const {
  P1_TEXT,
  P1_HEX,
  P5_TEXT,
  P5_HEX,
  P6_TEXT,
  P6_HEX,
  P7_TEXT,
  P7_HEX,
  _2A_TEXT,
  _2A_HEX,
  _3A_TEXT,
  _3A_HEX,
  _4A_TEXT,
  _4A_HEX,
  _6A_HEX,
  _6A_TEXT,
  T3_HEX,
  Q3_TEXT,
  Q2_TEXT,
  Q2_HEX,
  T3_TEXT,
  Q3_HEX,
  P3_TEXT,
  P3_HEX,
  P4_TEXT,
  P4_HEX,
  P8_TEXT,
  P8_HEX,
  H0_TEXT,
  H0_HEX,
} = require("./PHONAK/colors");

const phonakProducts = [
  /* --- INFINIO --- */
  { // Audéo Sphere Infinio 90 R
    name: "Audéo Sphere Infinio 90 R",
    category: "EARPHONE",
    price: 4395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX,
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", "GPS"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Sphere Infinio 70 R
    name: "Audéo Sphere Infinio 70 R",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX,
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", "GPS"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Infinio 90 R
    name: "Audéo Infinio 90 R",
    category: "EARPHONE",
    price: 4095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX,
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", "GPS"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Infinio 70 R
    name: "Audéo Infinio 70 R",
    category: "EARPHONE",
    price: 3495.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX,
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", "GPS"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // CROS Infinio R
    name: "CROS Infinio R",
    category: "EARPHONE",
    price: 2345.67, 
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX,
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador incluido"],
    adaptation_range: "COFOSIS",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "COFOSIS",
    degree_of_loss: "COFOSIS",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  /* --- LUMITY --- */
  { // Slim Lumity 90-R RIC
    name: "Slim Lumity 90-R RIC",
    category: "EARPHONE",
    price: 4095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: _2A_TEXT,
        hex: _2A_HEX,
      },
      {
        name: _3A_TEXT,
        hex: _3A_HEX,
      },
      {
        name: _4A_TEXT,
        hex: _4A_HEX,
      },
      {
        name: _6A_TEXT,
        hex: _6A_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", ""],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Slim Lumity 90-R BTE
    name: "Slim Lumity 90-R BTE",
    category: "EARPHONE",
    price: 4095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: _2A_TEXT,
        hex: _2A_HEX,
      },
      {
        name: _3A_TEXT,
        hex: _3A_HEX,
      },
      {
        name: _4A_TEXT,
        hex: _4A_HEX,
      },
      {
        name: _6A_TEXT,
        hex: _6A_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador incluido", ""],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Slim Lumity 70-R RIC
    name: "Slim Lumity 70-R RIC",
    category: "EARPHONE",
    price: 3495.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
        {
          name: _2A_TEXT,
          hex: _2A_HEX,
        },
        {
          name: _3A_TEXT,
          hex: _3A_HEX,
        },
        {
          name: _4A_TEXT,
          hex: _4A_HEX,
        },
        {
          name: _6A_TEXT,
          hex: _6A_HEX,
        },
      ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Slim Lumity 70-R BTE
    name: "Slim Lumity 70-R BTE",
    category: "EARPHONE",
    price: 3495.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
        {
          name: _2A_TEXT,
          hex: _2A_HEX,
        },
        {
          name: _3A_TEXT,
          hex: _3A_HEX,
        },
        {
          name: _4A_TEXT,
          hex: _4A_HEX,
        },
        {
          name: _6A_TEXT,
          hex: _6A_HEX,
        },
      ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Slim Lumity 50-R RIC
    name: "Slim Lumity 50-R RIC",
    category: "EARPHONE",
    price: 2895.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: _2A_TEXT,
        hex: _2A_HEX,
      },
      {
        name: _3A_TEXT,
        hex: _3A_HEX,
      },
      {
        name: _4A_TEXT,
        hex: _4A_HEX,
      },
      {
        name: _6A_TEXT,
        hex: _6A_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Slim Lumity 50-R BTE
    name: "Slim Lumity 50-R BTE",
    category: "EARPHONE",
    price: 2895.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: _2A_TEXT,
        hex: _2A_HEX,
      },
      {
        name: _3A_TEXT,
        hex: _3A_HEX,
      },
      {
        name: _4A_TEXT,
        hex: _4A_HEX,
      },
      {
        name: _6A_TEXT,
        hex: _6A_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-RL RIC
    name: "Audéo Lumity 90-RL RIC",
    category: "EARPHONE",
    price: 4095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-RL BTE
    name: "Audéo Lumity 90-RL BTE",
    category: "EARPHONE",
    price: 4095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-RL RIC
    name: "Audéo Lumity 70-RL RIC",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-RL BTE
    name: "Audéo Lumity 70-RL BTE",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-RL RIC
    name: "Audéo Lumity 50-RL RIC",
    category: "EARPHONE",
    price: 2895.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-RL BTE
    name: "Audéo Lumity 50-RL BTE",
    category: "EARPHONE",
    price: 2895.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: true,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-R RIC
    name: "Audéo Lumity 90-R RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-R BTE
    name: "Audéo Lumity 90-R BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-RT RIC
    name: "Audéo Lumity 90-RT RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-RT BTE
    name: "Audéo Lumity 90-RT BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-PR RIC
    name: "Naída Lumity 90-PR RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-PR BTE
    name: "Naída Lumity 90-PR BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-PR RIC
    name: "Sky Lumity 90-PR RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-PR BTE
    name: "Sky Lumity 90-PR BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-R RIC
    name: "Audéo Lumity 70-R RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-R BTE
    name: "Audéo Lumity 70-R BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-RT RIC
    name: "Audéo Lumity 70-RT RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-RT BTE
    name: "Audéo Lumity 70-RT BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-PR RIC
    name: "Naída Lumity 70-PR RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-PR BTE
    name: "Naída Lumity 70-PR BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-PR RIC
    name: "Sky Lumity 70-PR RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-PR BTE
    name: "Sky Lumity 70-PR BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-R RIC
    name: "Audéo Lumity 50-R RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-R BTE
    name: "Audéo Lumity 50-R BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-RT RIC
    name: "Audéo Lumity 50-RT RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-RT BTE
    name: "Audéo Lumity 50-RT BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-PR RIC
    name: "Naída Lumity 50-PR RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-PR BTE
    name: "Naída Lumity 50-PR BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-PR RIC
    name: "Sky Lumity 50-PR RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-PR BTE
    name: "Sky Lumity 50-PR BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-R RIC
    name: "Audéo Lumity 30-R RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-R BTE
    name: "Audéo Lumity 30-R BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-RT RIC
    name: "Audéo Lumity 30-RT RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-RT BTE
    name: "Audéo Lumity 30-RT BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-PR RIC
    name: "Naída Lumity 30-PR RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-PR BTE
    name: "Naída Lumity 30-PR BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-PR RIC
    name: "Sky Lumity 30-PR RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-PR BTE
    name: "Sky Lumity 30-PR BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // CROSS Lumity R
    name: "CROSS Lumity R",
    category: "EARPHONE",
    price: 1395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "COFOSIS",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "COFOSIS",
    degree_of_loss: "COFOSIS",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-312 RIC
    name: "Audéo Lumity 90-312 RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 90-312 BTE
    name: "Audéo Lumity 90-312 BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-UP RIC
    name: "Naída Lumity 90-UP RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-UP BTE
    name: "Naída Lumity 90-UP BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-SP RIC
    name: "Naída Lumity 90-SP RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 90-SP BTE
    name: "Naída Lumity 90-SP BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-UP RIC
    name: "Sky Lumity 90-UP RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-UP BTE
    name: "Sky Lumity 90-UP BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-M RIC
    name: "Sky Lumity 90-M RIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 90-M BTE
    name: "Sky Lumity 90-M BTE",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-312 RIC
    name: "Audéo Lumity 70-312 RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 70-312 BTE
    name: "Audéo Lumity 70-312 BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-UP RIC
    name: "Naída Lumity 70-UP RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-UP BTE
    name: "Naída Lumity 70-UP BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-SP RIC
    name: "Naída Lumity 70-SP RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 70-SP BTE
    name: "Naída Lumity 70-SP BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-UP RIC
    name: "Sky Lumity 70-UP RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-UP BTE
    name: "Sky Lumity 70-UP BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-M RIC
    name: "Sky Lumity 70-M RIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 70-M BTE
    name: "Sky Lumity 70-M BTE",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-312 RIC
    name: "Audéo Lumity 50-312 RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 50-312 BTE
    name: "Audéo Lumity 50-312 BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-UP RIC
    name: "Naída Lumity 50-UP RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-UP BTE
    name: "Naída Lumity 50-UP BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-SP RIC
    name: "Naída Lumity 50-SP RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 50-SP BTE
    name: "Naída Lumity 50-SP BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-UP RIC
    name: "Sky Lumity 50-UP RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-UP BTE
    name: "Sky Lumity 50-UP BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-M RIC
    name: "Sky Lumity 50-M RIC",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 50-M BTE
    name: "Sky Lumity 50-M BTE",
    category: "EARPHONE",
    price: 2595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-312 RIC
    name: "Audéo Lumity 30-312 RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Lumity 30-312 BTE
    name: "Audéo Lumity 30-312 BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: T3_TEXT,
        hex: T3_HEX,
      },
      {
        name: Q3_TEXT,
        hex: Q3_HEX,
      },
      {
        name: Q2_TEXT,
        hex: Q2_HEX,
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-UP RIC
    name: "Naída Lumity 30-UP RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-UP BTE
    name: "Naída Lumity 30-UP BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-SP RIC
    name: "Naída Lumity 30-SP RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Naída Lumity 30-SP BTE
    name: "Naída Lumity 30-SP BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-UP RIC
    name: "Sky Lumity 30-UP RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-UP BTE
    name: "Sky Lumity 30-UP BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-M RIC
    name: "Sky Lumity 30-M RIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Sky Lumity 30-M BTE
    name: "Sky Lumity 30-M BTE",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  /* --- PARADISE --- */
  { // Audéo Paradise 90-R
    name: "Audéo Paradise 90-R",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 90-RT
    name: "Audéo Paradise 90-RT",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 70-R
    name: "Audéo Paradise 70-R",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 70-RT
    name: "Audéo Paradise 70-RT",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 50-R
    name: "Audéo Paradise 50-R",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 50-RT
    name: "Audéo Paradise 50-RT",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 90-312
    name: "Audéo Paradise 90-312",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 90-13T    
    name: "Audéo Paradise 90-13T",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 70-312
    name: "Audéo Paradise 70-312",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 70-13T    
    name: "Audéo Paradise 70-13T",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 50-312
    name: "Audéo Paradise 50-312",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 50-13T    
    name: "Audéo Paradise 50-13T",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 30-312
    name: "Audéo Paradise 30-312",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Audéo Paradise 30-13T    
    name: "Audéo Paradise 30-13T",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // CROS Paradise 30-13T
    name: "CROS Paradise 30-13T",
    category: "EARPHONE",
    price: 1095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Batería Recargable", "Telebobina", "Cargador no incluido"],
    adaptation_range: "COFOSIS",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "COFOSIS",
    degree_of_loss: "COFOSIS",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-Titanium NW O ITC
    name: "Virto Paradise 90-Titanium NW O ITC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-Titanium NW O CIC
    name: "Virto Paradise 90-Titanium NW O CIC",
    category: "EARPHONE",
    price: 3795.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-Titanium NW O ITC
    name: "Virto Paradise 70-Titanium NW O ITC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-Titanium NW O CIC
    name: "Virto Paradise 70-Titanium NW O CIC",
    category: "EARPHONE",
    price: 3295.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-10 NW O ITC
    name: "Virto Paradise 90-10 NW O ITC",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-10 NW O CIC
    name: "Virto Paradise 90-10 NW O CIC",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-312 NW O ITC
    name: "Virto Paradise 90-312 NW O ITC",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-312 NW O CIC
    name: "Virto Paradise 90-312 NW O CIC",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-312 ITC
    name: "Virto Paradise 90-312 ITC",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 90-312 CIC
    name: "Virto Paradise 90-312 CIC",
    category: "EARPHONE",
    price: 3595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-10 NW O ITC
    name: "Virto Paradise 70-10 NW O ITC",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-10 NW O CIC
    name: "Virto Paradise 70-10 NW O CIC",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-312 NW O ITC
    name: "Virto Paradise 70-312 NW O ITC",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-312 NW O CIC
    name: "Virto Paradise 70-312 NW O CIC",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-312 ITC
    name: "Virto Paradise 70-312 ITC",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 70-312 CIC
    name: "Virto Paradise 70-312 CIC",
    category: "EARPHONE",
    price: 3095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-10 NW O ITC
    name: "Virto Paradise 50-10 NW O ITC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-10 NW O CIC
    name: "Virto Paradise 50-10 NW O CIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-312 NW O ITC
    name: "Virto Paradise 50-312 NW O ITC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-312 NW O CIC
    name: "Virto Paradise 50-312 NW O CIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-312 ITC
    name: "Virto Paradise 50-312 ITC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 50-312 CIC
    name: "Virto Paradise 50-312 CIC",
    category: "EARPHONE",
    price: 2395.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-10 NW O ITC
    name: "Virto Paradise 30-10 NW O ITC",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-10 NW O CIC
    name: "Virto Paradise 30-10 NW O CIC",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-312 NW O ITC
    name: "Virto Paradise 30-312 NW O ITC",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-312 NW O CIC
    name: "Virto Paradise 30-312 NW O CIC",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-312 ITC
    name: "Virto Paradise 30-312 ITC",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "ITC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Virto Paradise 30-312 CIC
    name: "Virto Paradise 30-312 CIC",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No Wireless", "Omnidireccional"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "CIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  /* --- BASIC (TERRA) --- */
  {  // Terra+ RIC-312
    name: "Terra+ RIC-312",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra+ BTE-M
    name: "Terra+ BTE-M",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra+ BTE-SP
    name: "Terra+ BTE-SP",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
     colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra+ BTE-UP
    name: "Terra+ BTE-UP",
    category: "EARPHONE",
    price: 2095.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  {  // Terra RIC-312
    name: "Terra RIC-312",
    category: "EARPHONE",
    price: 1595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "RIC",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra BTE-M
    name: "Terra BTE-M",
    category: "EARPHONE",
    price: 1595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra BTE-SP
    name: "Terra BTE-SP",
    category: "EARPHONE",
    price: 1595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
     colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
  { // Terra BTE-UP
    name: "Terra BTE-UP",
    category: "EARPHONE",
    price: 1595.0,
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // TODO Summary into 2 o 3 lines
    colors: [
      {
        name: P1_TEXT,
        hex: P1_HEX,
      },
      {
        name: P3_TEXT,
        hex: P3_HEX
      },
      {
        name: P4_TEXT,
        hex: P4_HEX,
      },
      {
        name: P5_TEXT,
        hex: P5_HEX
      },
      {
        name: P6_TEXT,
        hex: P6_HEX,
      },
      {
        name: P7_TEXT,
        hex: P7_HEX
      },
      {
        name: P8_TEXT,
        hex: P8_HEX
      },
      {
        name: H0_TEXT,
        hex: H0_HEX
      },
    ],
    include: ["Uso de Pila 312", "No incluye cargador"],
    adaptation_range: "MILD-SEVERE",
    dust_water_resistance: false,
    brand: "PHONAK",
    earphone_shape: "BTE",
    degree_of_loss: "MILD-SEVERE",
    uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
  },
];

const phonakAccessories = [
  /* --- INFINIO --- */
  { // ChargerGo RIC Infinio Sphere
    name: "ChargerGo RIC Infinio Sphere",
    category: "ACCESSORY",
    price: 1234.5, // TODO Add real price
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`, // Va a ser para que sirve
    include: ["Cargador de X longitud", "Puerto C", "Acumulador de Batería"],
    brand: "PHONAK",
  },
  { // ChargerGo RIC Infinio
    name: "ChargerGo RIC Infinio",
    category: "ACCESSORY",
    price: 1234.5, // TODO Add real price
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C", "Acumulador de Batería"],
    brand: "PHONAK",
  },
  { // Charger RIC Infinio
    name: "Charger RIC Infinio",
    category: "ACCESSORY",
    price: 1234.5, // TODO Add real price
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C"],
    brand: "PHONAK",
  },
  /* --- LUMITY --- */
  { // Charger Easy
    name: "Charger Easy",
    category: "ACCESSORY",
    price: 1234.5, // TODO Add real price
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C"],
    brand: "PHONAK",
  },
  { // Life Charger
    name: "Life Charger",
    category: "ACCESSORY",
    price: 1234.5, // TODO Add real price
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C"],
    brand: "PHONAK",
  },
  { // Charger Case Go (Life)
    name: "Charger Case Go (Life)",
    category: "ACCESSORY",
    price: 1234.5, // TODO Add real price
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C", "Acumulador de Bateria"],
    brand: "PHONAK",
  },
  { // Charger Slim
    name: "Charger Slim",
    category: "ACCESSORY",
    price: 1234.5, // TODO Add real price
    image_URL: "/products/no-image.png", // TODO Add a real image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
      facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
      Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
      placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
      tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
      vitae eros.`,
    include: ["Cargador de X longitud", "Puerto C"],
    brand: "PHONAK",
  },
];

module.exports = {
  phonakProducts: phonakProducts,
  phonakAccessories: phonakAccessories,
};
