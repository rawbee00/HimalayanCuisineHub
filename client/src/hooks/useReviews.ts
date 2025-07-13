import { useState, useEffect } from 'react';
import { Review, getReviews } from '@/services/googleReviews';

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getReviews();
        setReviews(data);
      } catch (err) {
        console.error('Failed to load reviews:', err);
        setError(err instanceof Error ? err : new Error('Failed to load reviews'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, isLoading, error };
};
