import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { useReviews } from '@/hooks/useReviews';
import { Skeleton } from '@/components/ui/skeleton';

export function Reviews() {
  const { t } = useTranslation();
  const { reviews, isLoading, error } = useReviews();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 border rounded-lg">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-gray-200" fill="currentColor" />
              ))}
            </div>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{t('reviews.errorLoading')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center">{t('reviews.title')}</h2>
      
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">{t('reviews.noReviews')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={review.profile_photo_url || '/default-avatar.png'}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/default-avatar.png';
                  }}
                />
                <div>
                  <h3 className="font-medium">{review.author_name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                        fill={i < review.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
              <p className="text-sm text-gray-500">{review.relative_time_description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
