import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// Define environment type
declare global {
  interface ImportMeta {
    env: {
      VITE_API_BASE_URL?: string;
    };
  }
}

// Base API URL with trailing slash removed
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000').replace(/\/+$/, '');

// Types
export interface MenuSelection {
  guestNumber: number;
  starter?: string;
  soup?: string;
  main?: string;
  dessert?: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  type: 'standard' | 'essence';
  specialRequests?: string;
  menuSelections?: MenuSelection[];
}

export interface Reservation extends ReservationData {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Array<{ path: string[]; message: string }>;
}

// API Client
class ApiClient {
  private static async fetchJson<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include',
    });

    const data: ApiResponse<T> = await response.json().catch(() => ({
      success: false,
      message: 'Invalid JSON response',
    }));

    if (!response.ok || !data.success) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    if (!data.data) {
      throw new Error('No data received from server');
    }

    return data.data;
  }

  // Reservations
  static async createReservation(data: ReservationData): Promise<Reservation> {
    return this.fetchJson<Reservation>(`${API_BASE_URL}/api/reservations`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async getReservationsByDate(date: string): Promise<Reservation[]> {
    return this.fetchJson<Reservation[]>(`${API_BASE_URL}/api/reservations/date/${encodeURIComponent(date)}`);
  }

  static async getReservation(id: string): Promise<Reservation> {
    return this.fetchJson<Reservation>(`${API_BASE_URL}/api/reservations/${encodeURIComponent(id)}`);
  }

  static async updateReservationStatus(id: string, status: 'confirmed' | 'cancelled'): Promise<Reservation> {
    return this.fetchJson<Reservation>(`${API_BASE_URL}/api/reservations/${encodeURIComponent(id)}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  static async getReservationsByEmail(email: string): Promise<Reservation[]> {
    return this.fetchJson<Reservation[]>(
      `${API_BASE_URL}/api/reservations/email/${encodeURIComponent(email)}`
    );
  }
}

// React Query hooks
export const useCreateReservation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: ReservationData) => ApiClient.createReservation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
};

export const useReservationsByDate = (date: string) => {
  return useQuery({
    queryKey: ['reservations', 'date', date],
    queryFn: () => ApiClient.getReservationsByDate(date),
    enabled: !!date,
  });
};

export const useReservation = (id: string) => {
  return useQuery({
    queryKey: ['reservation', id],
    queryFn: () => ApiClient.getReservation(id),
    enabled: !!id,
  });
};

export const useUpdateReservationStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: 'confirmed' | 'cancelled' }) =>
      ApiClient.updateReservationStatus(id, status),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['reservation', id] });
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
};

export const useReservationsByEmail = (email: string) => {
  return useQuery({
    queryKey: ['reservations', 'email', email],
    queryFn: () => ApiClient.getReservationsByEmail(email),
    enabled: !!email,
  });
};
