"use client";

import { ProductEntity } from "@/app/model/entities/Product";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import ColorButton, {
  ColorButtonSkeleton,
} from "@/app/ui/components/buttons/colorButton";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader";
import UnorderedList, {
  UnorderedListSkeleton,
} from "@/app/ui/components/tags/unorderedList";
import { Article, ArticleSkeleton } from "@/app/ui/components/tags/article";
import {
  ColorArticle,
  ColorArticleSkeleton,
} from "@/app/ui/components/tags/colorArticle";
import ConfirmationPopUp from "@/app/ui/components/popUps/confirmationPopUp";
import toast from "react-hot-toast";
import BigImage, {
  BigImageSkeleton,
} from "@/app/ui/components/images/bigImage";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "@/app/ui/tailwindClasses";
import { actionDeleteProduct } from "@/db/product";
import { getProductRoute } from "@/app/api/routes";

export default function AdminProduct() {
  const router = useRouter();
  const pathname = usePathname();
  const productId = pathname.split("/").pop();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const [imgIndex, setImgIndex] = useState(0);

  const [product, setProduct] = useState<ProductEntity | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      fetch(`${getProductRoute}?id=${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  if (isLoading) return <AdminProductSkeleton />;
  if (!product) return <p>No product data</p>;

  return (
    <div
      className={`flex flex-col gap-3 
      ${componentText}`}
    >
      {/* Actions */}
      <FloatButton
        icon={faPencil}
        text={"Editar Producto"}
        subtext={"Actualizar las atributos"}
        type={"warning"}
        position="center"
        navigationURL={`/admin/products/${productId}/update`}
      />
      <FloatButton
        icon={faEraser}
        text={"Borrar Producto"}
        subtext={"Eliminar para siempre"}
        type={"danger"}
        position="end"
        onClick={handleShowModal}
      />
      <GoBackButton link="/admin/products" />
      {/* Display */}
      <section
        className={`flex flex-col items-center sm:items-start gap-3 p-2 md:p-10
          ${componentBackground}
          ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={"Detalles del producto"} />
        {/* Basic Data */}
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-3">
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
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="flex flex-col sm:grid sm:grid-cols-2">
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
        <article className="flex flex-row flex-wrap gap-2 justify-center">
          {product.colors[imgIndex].images.map((image, index) => (
            <BigImage key={"img-" + index} src={image} alt={"img-" + index} />
          ))}
        </article>
      </section>
      {/* Pop Up */}
      <article className="flex flex-center shrink-0 justify-center h-full w-full">
        {showModal && (
          <ConfirmationPopUp
            handleShowModal={handleShowModal}
            handleAction={() => {
              handleShowModal();
              actionDeleteProduct(productId)
                .then((_) => {
                  toast.success("Se ha borrado el producto.");
                  router.push("/admin/products");
                })
                .catch((_) =>
                  toast.error("No se ha podido borrar el producto.")
                );
            }}
            message={"Borrar un producto es una acción irreversible."}
          />
        )}
      </article>
    </div>
  );
}

export function AdminProductSkeleton() {
  return (
    <div
      className={`${shimmer} flex flex-col gap-3 relative overflow-hidden rounded rounded-tr-3xl shadow-sm`}
    >
      {/* Display */}
      <section className="flex flex-col gap-3 p-10 bg-gray-100">
        <SectionHeaderSkeleton />
        {/* Basic Data */}
        <div className="grid grid-cols-2 gap-3">
          {/* Name */}
          <ArticleSkeleton />
          {/* Category */}
          <ArticleSkeleton />
          {/* Brand */}
          <ArticleSkeleton />
          {/* Price */}
          <ArticleSkeleton />
        </div>
        {/* Description */}
        <ArticleSkeleton />
        {/* Colors */}
        <ColorArticleSkeleton />
        {/* Technical Data */}
        <div className="grid grid-cols-3 gap-5">
          {/* Adaptation Range */}
          <ArticleSkeleton />
          {/* Water Dust Resistance */}
          <ArticleSkeleton />
          {/* Ear Location */}
          <ArticleSkeleton />
          {/* Level of Discretion */}
          <ArticleSkeleton />
          {/* Degree of Loss */}
          <ArticleSkeleton />
        </div>
        {/* List of attributes */}
        <div className="grid grid-cols-2">
          {/* Includes */}
          <UnorderedListSkeleton />
          {/* Uses */}
          <UnorderedListSkeleton />
        </div>
      </section>
      {/* Image Preview */}
      <section className="flex flex-col justify-center gap-3">
        <SectionHeaderSkeleton />
        {/* Color Button */}
        <article className="self-center">
          <ColorButtonSkeleton />
        </article>
        {/* Images Preview */}
        <article className="flex flex-row gap-2 justify-center">
          <BigImageSkeleton />
          <BigImageSkeleton />
          <BigImageSkeleton />
        </article>
      </section>
    </div>
  );
}
