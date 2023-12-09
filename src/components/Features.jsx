import React from 'react';

const Features = () => {
    return (
        <section className="features">
            <div className="feature">

                <h2>Services</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-item">
                            <img
                                src="https://businessonlineguide.com/wp-content/uploads/2019/09/Website-Design-Agency-1024x819.jpg" // Image 1 URL
                                className="img-fluid"
                                alt="Feature 1"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-item">
                            <img
                                src="https://localseotampa.com/wp-content/uploads/2014/07/1383206_441075811.jpg" // Image 2 URL
                                className="img-fluid"
                                alt="Feature 2"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-item">
                            <img
                                src="https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg" // Image 3 URL
                                className="img-fluid"
                                alt="Feature 3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
