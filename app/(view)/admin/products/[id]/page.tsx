"use client";

import { ProductColor, ProductEntity } from "@/app/model/entities/Product";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import ColorButton from "@/app/ui/components/buttons/colorButton";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import Image from "next/image";
import { actionDelete } from "@/db/action";
import Loading from "./loading";
import UnorderedList from "@/app/ui/components/tags/unorderedList";
import { Article } from "@/app/ui/components/tags/article";
import { ColorArticle } from "@/app/ui/components/tags/colorArticle";

export default function Page() {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();

  const [imgIndex, setImgIndex] = useState(0);

  const [product, setProduct] = useState<ProductEntity | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      fetch(`/api/getProduct?id=${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  if (isLoading) return <Loading />;
  if (!product) return <p>No product data</p>;

  return (
    <div
      className="flex flex-col gap-3
      text-emerald-900 dark:text-emerald-100"
    >
      {/* Actions */}
      <section className="flex flex-row justify-evenly">
        <MediumButtonWithIcon
          icon={faPencil}
          text={"Editar Producto"}
          subtext={"Actualizar las atributos"}
          type={"warning"}
          navigationURL={`/admin/products/${productId}/update`}
        />
        <MediumButtonWithIcon
          icon={faEraser}
          text={"Borrar Producto"}
          subtext={"Eliminar para siempre"}
          type={"danger"}
          onClick={() => actionDelete(productId)}
        />{" "}
      </section>
      {/* Display */}
      <section
        className="flex flex-col gap-3 p-10
          bg-emerald-100 dark:bg-emerald-800
          border-emerald-900 dark:border-emerald-100 border-2 rounded-xl"
      >
        <SectionHeader text={"Detalles del producto"} />
        {/* Basic Data */}
        <div className="grid grid-cols-2 gap-3">
          {/* Name */}
          <Article label="Nombre" value={product.name} />
          {/* Category */}
          <Article label="Categoría" value={product.category} />
          {/* Brand */}
          <Article label="Marca" value={product.brand} />
          {/* Price */}
          <Article label="Precio" value={`${product.price}€`} />
        </div>
        {/* Description */}
        <Article label="Descripción" value={product.description} />
        {/* Colors */}
        <ColorArticle label="Colores" colors={product.colors} />
        {/* Technical Data */}
        <div className="grid grid-cols-3">
          {/* Adaptation Range */}
          <Article
            label="Rango de Adaptación"
            value={product.adaptationRange}
          />
          {/* Water Dust Resistance */}
          <Article
            label="Resistencia al agua y al polvo"
            value={product.waterDustResistance ? "Sí" : "No"}
          />
          {/* Ear Location */}
          <Article label="Localización en la oreja" value={product.location} />
          {/* Level of Discretion */}
          <Article
            label="Nivel de discrección"
            value={product.levelOfDiscretion}
          />
          {/* Degree of Loss */}
          <Article label="Grado de pérdida" value={product.degreeOfLoss} />
        </div>
        {/* List of attributes */}
        <div className="grid grid-cols-2">
          {/* Includes */}
          <UnorderedList label="Incluye" values={product.include} />
          {/* Uses */}
          <UnorderedList
            label={"Usos"}
            values={product.uses.map((x) => x.text)}
          />
        </div>
      </section>
      {/* Image Preview */}
      <section className="flex flex-col justify-center gap-3">
        <SectionHeader text={"Imagenes del producto por su color"} />
        <article className="self-center">
          <ColorButton
            colors={product.colors}
            action={(index: number) => setImgIndex(index)}
          />
        </article>
        <article className="flex flex-row gap-2 justify-center">
          {product.colors[imgIndex].images.map((image, index) => (
            <Image
              key={"img-" + index}
              src={image}
              width={1500}
              height={1500}
              alt={"img-" + index}
              className="size-64 sm:size-72 lg:size-96
              bg-white rounded border-2 border-emerald-900 dark:border-emerald-100"
            />
          ))}{" "}
        </article>
      </section>
    </div>
  );
}
