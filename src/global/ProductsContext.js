import React, { createContext } from "react";
import { db } from "../config/config";

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const prevProducts = this.state.products;
    db.collection("Products").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          prevProducts.push({
            ProductID: change.doc.id,
            ProductName: change.doc.data().ProductName,
            ProductPrice: change.doc.data().ProductPrice,
            ProductImg: change.doc.data().ProductImg,
            ProductLink: change.doc.data().ProductLink,
            ProductCategory: change.doc.data().ProductCategory,
          });
        }
        this.setState({
          products: prevProducts,
        });
      });
    });
  }
  render() {
    return (
      <ProductsContext.Provider value={{ products: [...this.state.products] }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
