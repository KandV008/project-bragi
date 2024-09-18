# Sain, Audífonos X menos

<p align="center">
<strong>This project is now  in progress...</strong>
</p>

Sain is an e-commerce of earphones and accessories oriented to elder people. So the main pillars are accesibility, usability and affordable prices.

This web application is in property of @KandV008 (Temporary Owner).

## :clapper: Preview

<p align="center">
<strong>Currently, there is no preview...</strong>
</p>

<p align="center">
<strong>From here, all project documentation will be described.</strong>
</p>

## :scroll:Table of Contents

1. [Requirement Analysis](#black_nib-requirement-analysis)
    1. [Entities](#black_joker-entities)
    1. [Type of Users](#busts_in_silhouette-type-of-users)
    1. [Functional Requirements](#wrench-functional-requirements)
    1. [Non Functional Requirements](#electric_plug-non-functional-requirements)
1. [Design](#straight_ruler-design)
    1. [Navigation](#airplane-navigation)
    1. [Branding](#performing_arts-branding)
    1. [Architecture](#church-architecture)
1. [RoadMap](#hourglass_flowing_sand-roadmap)
    1. [v0.1 Basic Structure](#v01-basic-structure)
    1. [v0.2 Searching & Optimization](#v02-searching--optimization)
    1. [v0.3 Quality of Life](#v03-quality-of-life)
    1. [v0.4 Services](#v04-services)
    1. [v1.0 Payments](#v10-payments)
1. [DataBase](#dvd-database)
    1. [SQL Database](#dress-sql-database)
    1. [NoSQL Database](#page_facing_up-nosql-database)

### :black_nib: Requirement Analysis

#### :black_joker: Entities

Currently, there are 2 entities.

| Entities |
| :-: |
| Product |
| User |

##### Product
The products are the main entity of the application. There are organized by categories. 

Now, there is only 2 categories:

| Product Categories | Attributes|
| :-: | :-- |
| Earphone | Id, Name, Description, Price, Color, Special Earphone Attributes |
| Accessory | Id, Name, Description, Price, Color, Special Accesory Attributes |

Depending of the category, the information display will be diferent.

##### User
See this section to know more about the [Entity User](#busts_in_silhouette-type-of-users).

#### :busts_in_silhouette: Type of Users

In the application there are 2 different type of user:

| Type of User | Attributes |
| :-: | :-- |
| Unregistered User | It can interact with all the page but not with the products |
| Registered User | It can interact with anything |
| Admin User | As Registered User plus CRUD operations to entities |

#### :wrench: Functional Requirements

Here are the diferent actions that can do the different type of users:

| User Histories | Unregistered User | Registered User | Admin User |
| :-- | :-: | :-: | :-: |
| UH-01 Sign Up | :heavy_check_mark: | |
| UH-02 Log In | | :heavy_check_mark: |
| UH-03 Log Out | | :heavy_check_mark: |
| UH-04 Delete Account | | :heavy_check_mark: |
| UH-05 See Product Details | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| UH-06 Add Product to Favorites | | :heavy_check_mark: | :heavy_check_mark: |
| UH-07 Add Product to Shopping List | | :heavy_check_mark: | :heavy_check_mark: |
| UH-08 Select Product's color | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| UH-09 Add Guarantee to the Product | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| UH-10 See Account | | :heavy_check_mark: | :heavy_check_mark: |
| UH-11 See Favorites | | :heavy_check_mark: | :heavy_check_mark: |
| UH-12 See Shopping List | | :heavy_check_mark: | :heavy_check_mark: |
| UH-13 See All Products of One Category | :heavy_check_mark: |  :heavy_check_mark: | :heavy_check_mark: |
| UH-14 Search Product by keyword | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| UH-15 Search Product by filters | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| UH-16 See novelties products | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| UH-17 See related products | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| UH-18 Access to Error Page | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| UH-19 Access to In Development Page | :heavy_check_mark: |  :heavy_check_mark: | :heavy_check_mark: |
| UH-20 Access to Admin Dashboard Page | | | :heavy_check_mark: |
| UH-21 Create Product | | | :heavy_check_mark: |
| UH-22 Read Product | | | :heavy_check_mark: |
| UH-23 Update Product | | | :heavy_check_mark: |
| UH-24 Delete Product | | | :heavy_check_mark: |
| UH-25 Read All Products | | | :heavy_check_mark: |

#### :electric_plug: Non Functional Requirements

| Non Functional Requirements |
| :-: |
| Oriented to Web |
| Responsive Design |
| The software must be implemented with React |
| The applicaction need to connect with SQL Database |
| The application need to connect with NoSQL Database |
| GUI must be minimalist and user-friendly |
| Protection & Security for Registered User Data |
| Usability & Accesibility |
| Main language must be Spanish |

### :straight_ruler: Design

#### :airplane: Navigation

<p align="center">
  <img src="/docs/versions/v0.2/v0.2-Navigation.svg" alt="Configuration page">
  <br>
  <small>Activity Diagram 1. Navigation Map</small>
</p>

#### :performing_arts: Branding

##### Large Logo

| ![Figure 1. Black Large Logo](/docs/brand/large_logo/logo_large_sain_black.png) | ![Figure 2. Dark Emerald Large Logo](/docs/brand/large_logo/logo_large_sain_dark_emerald.png) | ![Figure 3. Light Emerald Large Logo](/docs/brand/large_logo/logo_large_sain_light_emerald.png) | ![Figure 4. White Large Logo](/docs/brand/large_logo/logo_large_sain_white.png) |
|:---:|:---:|:---:|:---:|
| Figure 1. Black Large Logo | Figure 2. Dark Emerald Large Logo | Figure 3. Light Emerald Large Logo | Figure 4. White Large Logo |

To see the logos in more detail, [click here](/docs/brand/large_logo/).

##### Medium Logo

| ![Figure 5. Black Medium Logo](/docs/brand/medium_logo/logo_medium_sain_black.png) | ![Figure 6. Dark Emerald Medium Logo](/docs/brand/medium_logo/logo_medium_sain_dark_emerald.png) | ![Figure 7. Light Emerald Medium Logo](/docs/brand/medium_logo/logo_medium_sain_light_emerald.png) | ![Figure 8. White Medium Logo](/docs/brand/medium_logo/logo_medium_sain_white.png) |
|:---:|:---:|:---:|:---:|
| Figure 5. Black Medium Logo | Figure 6. Dark Emerald Medium Logo | Figure 7. Light Emerald Medium Logo | Figure 8. White Medium Logo |

To see the logos in more detail, [click here](/docs/brand/medium_logo//).

##### Small Logo

| ![Figure 9. Black Large Logo](/docs/brand/small_logo/logo_small_sain_black.png) | ![Figure 10. Dark Emerald Large Logo](/docs/brand/small_logo/logo_small_sain_dark_emerald.png) | ![Figure 11. Light Emerald Large Logo](/docs/brand/small_logo/logo_small_sain_light_emerald.png) | ![Figure 12. White Large Logo](/docs/brand/small_logo/logo_small_sain_white.png) |
|:---:|:---:|:---:|:---:|
| Figure 9. Black Small Logo | Figure 10. Dark Emerald Small Logo | Figure 11. Light Emerald Small Logo | Figure 12. White Small Logo |

To see the logos in more detail, [click here](/docs/brand/large_logo/).

##### Web Icon

| ![Figure 13. Black Web Icon](/docs/brand/web_icon/logo_web_sain_black.png) | ![Figure 14. Dark Emerald Web Icon](/docs/brand/web_icon/logo_web_sain_dark_emerald.png) | ![Figure 15. Light Emerald Web Icon](/docs/brand/web_icon/logo_web_sain_light_emerald.png) | ![Figure 16. White Web Icon](/docs/brand/web_icon/logo_web_sain_white.png) |
|:---:|:---:|:---:|:---:|
| Figure 13. Black Web Icon | Figure 14. Dark Emerald Web Icon | Figure 15. Light Emerald Web Icon | Figure 16. White Web Icon |

To see the logos in more detail, [click here](/docs/brand/web_icon/).

#### :church: Architecture

<p align="center">
  <img src="/docs/versions/v0.1/v0.1-Architecture.svg" alt="Configuration page">
  <br>
  <small>Package Diagram 1. Architecure of Project Bragi</small>
</p>

### :hourglass_flowing_sand: RoadMap

| Current Version |
| :-: |
| `v0.3` |

<p align="center">
<strong>These sections are previews, when the corresponding version has been completed, the section will be completed with the specific additions.</strong>
</p>

#### `v0.1` Basic Structure

[Click here](/docs/versions/v0.1/v0.1-README.md) to see the basic structure of the application.

#### `v0.2` Searching & Optimization

[Click here](/docs/versions/v0.2/v0.2-README.md) to find out the changes made for search and optimization.

#### `v0.3` Quality of Life

[Click here](/docs/versions/v0.3/v0.3-README.md) to view the User Interface quality of life improvements.

#### `v0.4` Services

To complete the functionality of the website and the business, the following services will be added:

* Request appointments online
* Allow to contact us
* Description about us
* What's new and how it relates to products and services

#### `v1.0` Payments

All payment-related logic will be added with the legal aspects, ending the application development stage.

### :dvd: DataBase

#### :dress: SQL Database

The purpose of this database is to manage all the user information. The application uses [PostgreSQL](https://vercel.com/storage/postgres).

<p align="center">
  <img src="/docs/versions/v0.1/v0.1-SQL-DB.svg" alt="Configuration page">
  <br>
  <small>Entity Relation Diagram 1. SQL Database</small>
</p>

How the product information is stored in the [NoSQL Database](#page_facing_up-nosql-database), in this database only is stored the neccesary information.

##### :heart_decoration: Favorite Table

| *product_id* | *user_id* |
| :-: | :-: |
| Product's Identification (from [MongoDB](#page_facing_up-nosql-database)) | User's Identification (from [Clerk](https://clerk.com)) |

##### :memo: Shopping List Table

| *product_id* | *user_id* | *color* | *ear_side* | *guarantee* | quantity | name | brand | price | image_url |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |:-: | :-: |
| Product's Identification (from [MongoDB](#page_facing_up-nosql-database)) | Identification of the user (from [Clerk](https://clerk.com)) | Selected color | Selected ear side | If have guarantee | Quantity added | Product's Name (from [MongoDB](#page_facing_up-nosql-database)) | Product's Brand (from [MongoDB](#page_facing_up-nosql-database)) | Product's Price (from [MongoDB](#page_facing_up-nosql-database)) | Product's color image (from [MongoDB](#page_facing_up-nosql-database)) |

#### :page_facing_up: NoSQL Database

The purpose of this database is to manage all the products available. The application uses [MongoDB](https://www.mongodb.com).

##### :scroll: Product Schema

``` typeScript
{
    name: string,
    category: "EARPHONE" | "ACCESSORY",
    price: number,
    description: string,
    colors: [
      {
        color: "P1" | "P3" | "P4" | "P5" | "P6" | "P7" | "P8" | "Q2" | "Q3" | "T3" | "H0",
        images: string[],
      }[]
    ],
    include: string[],
    adaptation_range: "MILD" | "MODERATE" | "SEVERE" | "PROFOUND",
    dust_water_resistance: boolean,
    brand: "PHONAK" | "STARKEY",
    location: "RETROAURICULAR" | "INTRACANAL" | "CIC" | "RIC",
    level_of_discretion: "VISIBLE" | "DISCREET" | "IMPERCEPTIBLE",
    degree_of_loss: "MILD" | "MODERATE" | "SEVERE" | "PROFOUND",
    uses: ("CHAT" | "IN_GROUP" | "LEISURE" | "TELEPHONE" | "TV")[],
  }
```
