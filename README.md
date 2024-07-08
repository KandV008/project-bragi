# *Project Bragi* (Provisional Name)

<p align="center">
<strong>This project is now  in progress...</strong>
</p>

Project Bragi (Provisional Name) is an e-commerce of earphones and accessories oriented to elder people. So the main pillars are accesibility, usability and affordable prices.

This web application is in property of @KandV008 (Temporary Company).

## :clapper: Preview

<p align="center">
<strong>Currently, there is no preview...</strong>
</p>

<p align="center">
<strong>From here, all project documentation will be described.</strong>
</p>

## :scroll:Table of Contents

1. [Requirement Analysis]()
    1. [Entities]()
    1. [Type of Users]()
    1. [Functional Requirements]()
    1. [Non Functional Requirements]()
1. [Design]()
    1. [Navigation]()
    1. [Branding]()
    1. [Usability & Accesibility]()
    1. [Architecture]()
1. [DataBase]()
    1. [SQL Database]()
    1. [NoSQL Database]()

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

#### :wrench: Functional Requirements

Here are the diferent actions that can do the different type of users:

| User Histories | Unregistered User | Registered User |
| :-- | :-: | :-: |
| UH-01 Sign Up | :heavy_check_mark: | |
| UH-02 Log In | | :heavy_check_mark: |
| UH-03 Log Out | | :heavy_check_mark: |
| UH-04 Delete Account | | :heavy_check_mark: |
| UH-05 See Product Details | :heavy_check_mark: | :heavy_check_mark: |
| UH-06 Add Product to Favorites | | :heavy_check_mark: |
| UH-07 Add Product to Shopping List | | :heavy_check_mark: |
| UH-08 Select Product's color | :heavy_check_mark: | :heavy_check_mark: |
| UH-09 Add Guarantee to the Product | :heavy_check_mark: | :heavy_check_mark: |
| UH-10 See Account | | :heavy_check_mark: |
| UH-11 See Favorites | | :heavy_check_mark: |
| UH-12 See Shopping List | | :heavy_check_mark: |
| UH-13 See All Products of One Category | :heavy_check_mark: | :heavy_check_mark: |
| UH-14 Search Product by name | :heavy_check_mark: | :heavy_check_mark: |
| UH-15 Search Product by filters | :heavy_check_mark: | :heavy_check_mark: |
| UH-16 See novelties products | :heavy_check_mark: | :heavy_check_mark: |
| UH-17 See related products | :heavy_check_mark: | :heavy_check_mark: |

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
<strong>Currently, there is no navigation map...</strong>
</p>

#### :performing_arts: Branding

<p align="center">
<strong>Currently, there is no branding...</strong>
</p>

#### :wheelchair: Usability & Accesibility

<p align="center">
<strong>Currently, there is no usability & accesibility information...</strong>
</p>

#### :church: Architecture

<p align="center">
<strong>Currently, there is no Architecture's Diagram...</strong>
</p>

### :dvd: DataBase

#### :dress: SQL Database

The purpose of this database is to manage all the user information. The application uses PostgreSQL.

<p align="center">
  <img src="/docs/diagrams/ER-Diagram.svg" alt="Configuration page">
  <br>
  <small>Entity Relation Diagram 1. SQL Database</small>
</p>

How the product information is stored in the [NoSQL Database](#page_facing_up-nosql-database), in this database only is stored the neccesary information.

For Favorites, the only important attribute are the id of the product.

For Shopping List, is stored the id, the selected color, if it has guarantee, the side of the ear and the number of repetition.

#### :page_facing_up: NoSQL Database

The purpose of this databse is to manage all the products available. The application uses MongoDB.

<p align="center">
<strong>Currently, there is no schema...</strong>
</p>