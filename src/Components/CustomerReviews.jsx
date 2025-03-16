const CustomerReviews = () => {
    const reviews = [
        {
            name: 'abdul rahamn',
            review: 'Amazing quality! My gear has lasted for years, and the customer service was excellent.',
            rating: 8,
        },
        {
            name: 'Chutki',
            review: 'I love this store! Best sports equipment I’ve ever bought. Highly recommend.',
            rating: 10,
        },
        {
            name: 'Sumaya',
            review: 'Great selection of products. Fast shipping and everything was exactly as described.',
            rating: 9,
        },
        {
            name: 'Masum',
            review: 'Amazing quality! My gear has lasted for years, and the customer service was excellent.',
            rating: 7.5,
        },
        {
            name: 'MayaMA',
            review: 'I love this store! Best sports equipment I’ve ever bought. Highly recommend.',
            rating: 10,
        },
        {
            name: 'tayba',
            review: 'Amazing quality! My gear has lasted for years, and the customer service was excellent.',
            rating: 7.5,
        },
    ];

    return (
        <div className="customer-reviews-section text-center py-20">
            <h2 className="text-4xl font-bold mb-6">Our Customers Reviews </h2>
            <div className="reviews-container grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card p-6 border rounded-lg shadow-lg">
                        <p className="text-xl italic">"{review.review}"</p>
                        <div className="flex justify-between mt-4">
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;
