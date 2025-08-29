// Respuesta API
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  message?: string;
  code?: string;
  metadata?: {
    total: number;
    page: number;
    lastPage: number;
    limit: number;
  };
};

export type Product = {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  category: string;
  image: string;
};
