// バックエンドへ商品在庫の送信
export const putProductQuantity = (id:number,quantity:number) =>{
  fetch("http://127.0.0.1:8000/api/vending/products/" + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "id": id,
      "quantity": quantity,
    }),
  });
} 

  // バックエンドへ購入方法の送信
export const postOrderMethod = (product_id:number,order_method_id:number) =>{
  fetch("http://127.0.0.1:8000/api/vending/orders/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "product_id": product_id,
      "order_method_id": order_method_id,
    }),
  });
}