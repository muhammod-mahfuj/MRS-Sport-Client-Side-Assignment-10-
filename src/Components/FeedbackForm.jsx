import React, { useState } from 'react';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(1);
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        // Basic validation for form fields
        if (!name || !email || !rating || !feedback) {
            setError('All fields are required!');
            setLoading(false);
            return;
        }

        const feedbackData = { name, email, rating, feedback };

        try {
            const response = await fetch('http://localhost:3000/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });

            if (response.ok) {
                setSuccessMessage('Thank you for your feedback!');
                setName('');
                setEmail('');
                setRating(1);
                setFeedback('');
            } else {
                setError('Error submitting feedback, please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="feedback-form container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Give Us Your Feedback</h2>
            <p className="text-lg text-gray-600 text-center mb-6">
                Your opinion is important to us! Share your thoughts on how we can improve.
            </p>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Enter your email address"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="rating" className="block text-lg font-medium text-gray-700 mb-2">
                        Rating
                    </label>
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="select select-bordered w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                    >
                        {[1, 2, 3, 4, 5].map((star) => (
                            <option key={star} value={star}>
                                {star} Star{star > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="feedback" className="block text-lg font-medium text-gray-700 mb-2">
                        Your Feedback
                    </label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="textarea textarea-bordered w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Share your thoughts with us"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className={`btn btn-primary w-full p-4 rounded-md text-white transition-all ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
