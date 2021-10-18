import React from 'react';
import { useParams } from 'react-router';

const Details = () => {

    const {title} = useParams()
    return (
        <div>
            <div className="container">
                <div className="">
                    <div className="">

                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </div>
            this is details {title}
        </div>
    );
};

export default Details;