import { v4 as uuidv4 } from 'uuid';

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
  type: 'standard' | 'essence';
  menuSelections?: Array<{
    guestNumber: number;
    starter?: string;
    soup?: string;
    main?: string;
    dessert?: string;
  }>;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface IReservationStorage {
  createReservation(reservation: Omit<Reservation, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Reservation>;
  getReservation(id: string): Promise<Reservation | null>;
  getReservationsByDate(date: string): Promise<Reservation[]>;
  updateReservationStatus(id: string, status: 'confirmed' | 'cancelled'): Promise<boolean>;
  getReservationsByEmail(email: string): Promise<Reservation[]>;
}

export class MemReservationStorage implements IReservationStorage {
  private reservations: Map<string, Reservation> = new Map();

  async createReservation(reservationData: Omit<Reservation, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Reservation> {
    const now = new Date().toISOString();
    const reservation: Reservation = {
      ...reservationData,
      id: uuidv4(),
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };

    this.reservations.set(reservation.id, reservation);
    return reservation;
  }

  async getReservation(id: string): Promise<Reservation | null> {
    return this.reservations.get(id) || null;
  }

  async getReservationsByDate(date: string): Promise<Reservation[]> {
    return Array.from(this.reservations.values())
      .filter(reservation => reservation.date === date)
      .sort((a, b) => a.time.localeCompare(b.time));
  }

  async updateReservationStatus(id: string, status: 'confirmed' | 'cancelled'): Promise<boolean> {
    const reservation = this.reservations.get(id);
    if (!reservation) return false;

    reservation.status = status;
    reservation.updatedAt = new Date().toISOString();
    return true;
  }

  async getReservationsByEmail(email: string): Promise<Reservation[]> {
    return Array.from(this.reservations.values())
      .filter(reservation => reservation.email.toLowerCase() === email.toLowerCase())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
}

export const reservationStorage = new MemReservationStorage();
