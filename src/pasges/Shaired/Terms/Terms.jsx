import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veritatis, quidem, assumenda ipsum voluptas sed at porro esse dignissimos provident a quae odio voluptatum quisquam, voluptatem sint laborum omnis. Tempore quam consequuntur voluptas dignissimos officia tenetur quod quibusdam nisi! Minus cupiditate laborum rerum fugit quod reiciendis quos, eveniet magni. Eos?</p>

            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;