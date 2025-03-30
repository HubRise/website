import Image from "next/image"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { TProduct } from "../shared/types"

import { Product, ProductsList, ProductContent, ProductTitle, ProductDescription, ProductLink } from "./Styles"

interface ProductsProps {
  products: Array<TProduct>
}

const Products = ({ products }: ProductsProps) => {
  return (
    <ProductsList>
      {products.map((product, index) => {
        return (
          <Product key={index} href={product.link}>
            <Image src={`/images/header/${product.image}`} alt={product.title} width={144} height={80} />
            <ProductContent>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductLink>
                {product.link_label}
                <Icon code="arrow_forward" size={iconSizes._20} />
              </ProductLink>
            </ProductContent>
          </Product>
        )
      })}
    </ProductsList>
  )
}

export default Products
