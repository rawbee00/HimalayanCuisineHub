// Google Reviews Service
// Fetches and filters Google Reviews to only include 4 and 5-star ratings

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const PLACE_ID = 'YOUR_GOOGLE_PLACE_ID'; // Replace with your actual Google Place ID

interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

export interface Review extends Omit<GoogleReview, 'time'> {
  date: string;
}

export const fetchGoogleReviews = async (): Promise<Review[]> => {
  if (!API_KEY || !PLACE_ID) {
    console.error('Google Maps API key or Place ID is missing');
    return [];
  }

  try {
    // First, get the place details to get the latest reviews
    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,user_ratings_total,rating&key=${API_KEY}`;
    const detailsResponse = await fetch(placeDetailsUrl);
    const detailsData = await detailsResponse.json();

    if (detailsData.status !== 'OK' || !detailsData.result.reviews) {
      console.error('Failed to fetch Google reviews:', detailsData.status);
      return [];
    }

    // Filter for 4 and 5 star reviews
    const filteredReviews = detailsData.result.reviews
      .filter((review: GoogleReview) => review.rating >= 4)
      .map((review: GoogleReview) => ({
        ...review,
        date: new Date(review.time * 1000).toLocaleDateString(),
      }));

    return filteredReviews;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
};

// Function to get a static list of reviews (fallback if API fails)
const getStaticReviews = (): Review[] => [
  {
    author_name: 'Satisfied Customer',
    author_url: '',
    language: 'en',
    profile_photo_url: '',
    rating: 5,
    relative_time_description: 'a month ago',
    text: 'Amazing food and great service! Highly recommended.',
    translated: false,
    date: new Date().toLocaleDateString(),
  },
  // Add more static reviews as needed
];

export const getReviews = async (): Promise<Review[]> => {
  try {
    const reviews = await fetchGoogleReviews();
    return reviews.length > 0 ? reviews : getStaticReviews();
  } catch (error) {
    console.error('Error getting reviews, using fallback:', error);
    return getStaticReviews();
  }
};
