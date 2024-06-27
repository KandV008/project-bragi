import { ProductEntity } from "@/app/model/Product";
import Product from "../pages/search/product";

interface SomeProductContainerProps {
    listProducts: ProductEntity[]
  }

export default function SomeProductContainer({ listProducts }: SomeProductContainerProps){
    return(
        <>
        <Product
          id={listProducts[0].id}
          image={listProducts[0].colors[0].images[0]}
          name={listProducts[0].name}
          brand={listProducts[0].brand}
          price={listProducts[0].price.toString()}
        />
        <Product
          id={listProducts[1].id}
          image={listProducts[1].colors[0].images[0]}
          name={listProducts[1].name}
          brand={listProducts[1].brand}
          price={listProducts[1].price.toString()}
        />
        {listProducts.length > 2 ? (
          <div className="hidden sm:block">
            <Product
              id={listProducts[2].id}
              image={listProducts[2].colors[0].images[0]}
              name={listProducts[2].name}
              brand={listProducts[2].brand}
              price={listProducts[2].price.toString()}
            />{" "}
          </div>
        ) : (
          <></>
        )}
        {listProducts.length > 3 ? (
          <div className="hidden lg:block xl:hidden 2xl:block">
            <Product
              id={listProducts[3].id}
              image={listProducts[3].colors[0].images[0]}
              name={listProducts[3].name}
              brand={listProducts[3].brand}
              price={listProducts[3].price.toString()}
            />{" "}
          </div>
        ) : (
          <></>
        )}
        </>
    )
}