import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore distinctio neque repellendus incidunt vel veniam eveniet</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4>{review.name}</h4>
                        <h5>{review.location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;