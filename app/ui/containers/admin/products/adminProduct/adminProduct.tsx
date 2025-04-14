"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import UnorderedList, {
  UnorderedListSkeleton,
} from "@/app/ui/components/tags/unorderedList/unorderedList";
import { Article, ArticleSkeleton } from "@/app/ui/components/tags/article/article";
import ConfirmationPopUp from "@/app/ui/components/popUps/confirmationPopUp/confirmationPopUp";
import toast from "react-hot-toast";
import BigImage, {
  BigImageSkeleton,
} from "@/app/ui/components/images/bigImage/bigImage";
import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "@/app/ui/tailwindClasses";
import { getProductRoute } from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";
import { EARPHONE_VALUE } from "@/app/model/entities/product/enums/Category";
import { actionDeleteProduct } from "@/db/product/product";
import { ColorButtonSkeleton } from "@/app/ui/components/buttons/colorButton/colorButton";
import FloatButton from "@/app/ui/components/buttons/floatButton/floatButton";
import GoBackButton from "@/app/ui/components/buttons/goBackButton/goBackButton";
import { ColorArticle, ColorArticleSkeleton } from "@/app/ui/components/tags/colorArticle/colorArticle";
import SectionHeader, { SectionHeaderSkeleton } from "@/app/ui/components/tags/sectionHeader/sectionHeader";

/**
 * Admin product management page for viewing and editing a product's details.
 * Allows product deletion and updating, with a confirmation popup for deletion.
 *
 * @returns {JSX.Element} Admin product details page.
 */
export default function AdminProduct(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const productId = pathname.split("/").pop();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

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
        {/* Earphone Attributes */}
        {product.category === EARPHONE_VALUE ? (
          <>
            {/* Colors */}
            <ColorArticle
              label="Colores"
              colors={product.earphoneAttributes!.colors}
            />
            {/* Technical Data */}
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {/* Adaptation Range */}
              <Article
                label="Rango de Adaptación"
                value={product.earphoneAttributes!.adaptationRange}
              />
              {/* Water Dust Resistance */}
              <Article
                label="Resistencia al agua y al polvo"
                value={
                  product.earphoneAttributes!.waterDustResistance ? "Sí" : "No"
                }
              />
              {/* Earphone Shape */}
              <Article
                label="Forma de Audífono"
                value={product.earphoneAttributes!.earphoneShape}
              />

              {/* Degree of Loss */}
              <Article
                label="Grado de pérdida"
                value={product.earphoneAttributes!.degreeOfLoss}
              />
            </div>
          </>
        ) : (
          <></>
        )}

        {/* List of attributes */}
        <div className="flex flex-col sm:grid sm:grid-cols-2">
          {/* Includes */}
          <UnorderedList label="Incluye" values={product.include} />
          {/* Uses */}

          {product.category === EARPHONE_VALUE ? (
            <UnorderedList
              label={"Usos"}
              values={product.earphoneAttributes!.uses.map((x: any) => x.text)}
            />
          ) : (
            <></>
          )}
        </div>
      </section>
      {/* Image Preview */}
      <section className="flex flex-col justify-center gap-3">
        <SectionHeader text={"Imagen del producto"} />
        <BigImage src={product.imageURL} alt={"img-" + product.name} />
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

/**
 * Skeleton loader for the AdminProduct page, displayed while the product data is being loaded.
 *
 * @returns {JSX.Element} Skeleton loader for the AdminProduct page.
 */
export function AdminProductSkeleton(): JSX.Element {
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
