export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  is_set: boolean;
  quantity: number;
  created_at: string;
  updated_at: string;
};

// 天気予報
export type WeatherData = {
  publicTime: string;
  title: string;
  link: string;
  description: {
    text: string;
    publicTime: string;
  };
  location: {
    area: string;
    prefecture: string;
    city: string;
  };
  forecasts: {
    date: string;
    dateLabel: string;
    telop: string;
    image: {
      width: number;
      height: number;
      url: string;
    };
    temperature: {
      min?: {
        celsius?: string;
        fahrenheit?: string;
      };
      max?: {
        celsius?: string;
        fahrenheit?: string;
      };
    };
    chanceOfRain?: {
      T06_12: string;
      T12_18: string;
      T18_24: string;
      T00_06: string;
    };
    uvIndex?: string;
  }[];
};
