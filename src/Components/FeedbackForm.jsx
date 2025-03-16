import React, { useState } from 'react';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(1);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();

       
        // const feedbackData = { name, email, rating, feedback };

        // fetch('', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(feedbackData),
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log('Feedback submitted:', data);
        //     alert('Thank you for your feedback!');
        // })
    };

    return (
        <div className="feedback-form text-center py-16">
            <h2 className="text-4xl font-bold mb-6">Give Us Your Feedback</h2>
            <p className="w-2/3 mx-auto text-lg mb-8">We value your opinion! Please share your thoughts on our products.</p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Rating:</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="select select-bordered w-full"
                        required
                    >
                        {[1, 2, 3, 4, 5,6,7,8,9,10].map((star) => (
                            <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Your Feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
