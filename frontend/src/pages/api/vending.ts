// 商品一覧の取得

import { Product, WeatherData } from "@/types/api";

export const getProductList = async (): Promise<Product[]> => {
  const res = await fetch(
    new URL(
      `http://${process.env.NEXT_PUBLIC_HOST_ADDRES}:8000/api/vending/productslist/`
    )
  );
  const data: Product[] = await res.json();
  return data;
};

// バックエンドへ商品在庫の送信
export const putProductQuantity = (id: number, quantity: number) => {
  fetch(
    `http://${process.env.NEXT_PUBLIC_HOST_ADDRES}:8000/api/vending/products/` +
      id,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        quantity: quantity,
      }),
    }
  );
};

// バックエンドへ購入方法の送信
export const postOrderMethod = (
  product_id: number,
  order_method_id: number
) => {
  fetch(
    `http://${process.env.NEXT_PUBLIC_HOST_ADDRES}:8000/api/vending/orders/`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product_id,
        order_method_id: order_method_id,
      }),
    }
  );
};

// 名古屋の天気情報取得
export const getWeatherInfo = async (): Promise<WeatherData[]> => {
  const res = await fetch(
    new URL("https://weather.tsukumijima.net/api/forecast/city/230010")
  );
  const data: WeatherData[] = await res.json();

  return data;
};
