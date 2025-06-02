import { type Reservation } from "@shared/schema";

export interface IMenuStorage {
  getAvailableSets(): Promise<number>;
  reserveSets(numSets: number): Promise<boolean>;
  resetDailySets(): Promise<void>;
}

export class MemMenuStorage implements IMenuStorage {
  private setsAvailable: number = 20;
  private lastReset: Date = new Date();

  async getAvailableSets(): Promise<number> {
    // Check if we need to reset for a new day
    const now = new Date();
    if (now.getDate() !== this.lastReset.getDate()) {
      await this.resetDailySets();
    }
    return this.setsAvailable;
  }

  async reserveSets(numSets: number): Promise<boolean> {
    if (numSets <= 0) return false;
    
    // Check if we need to reset for a new day
    const now = new Date();
    if (now.getDate() !== this.lastReset.getDate()) {
      await this.resetDailySets();
    }

    if (this.setsAvailable >= numSets) {
      this.setsAvailable -= numSets;
      return true;
    }
    return false;
  }

  async resetDailySets(): Promise<void> {
    this.setsAvailable = 20;
    this.lastReset = new Date();
  }
}

export const menuStorage = new MemMenuStorage();
