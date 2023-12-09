import React from 'react';
import './LandingPage.css'; // Import the corresponding CSS file

const LandingPage = () => {
    return (
        <div className="landing-page">
            <section className="section">
                <div className="container">
                    <h2>About US</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg" // Image URL for Section 1
                                className="img-fluid rounded shadow"
                                alt="Section 1"
                            />
                        </div>
                        <div className="col-md-6">
                            <p>
                                Instead of starting with a blank page, use an AI paragraph maker to expedite your writing process.
                                AI tools help you save time and create content more efficiently—all while generating unique content for your project.
                                Picsart’s free paragraph creator tool can create paragraphs for every context, from blog posts to landing pages.
                                When you’re finished, add your text to a canvas with just a few clicks. Utilize our AI Background Generator to generate
                                backgrounds, or refine your design with beginner-friendly AI photo editing tools.Expedite your writing process with original
                                AI-generated paragraphs. Simply enter a text prompt and click Generate to generate paragraphs for free with AI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2>Activities</h2>
                    <div className="row">
                        <div className="col-md-6 order-md-2">
                            <img
                                src="https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-63.jpg" // Image URL for Section 2
                                className="img-fluid rounded shadow"
                                alt="Section 2"
                            />
                        </div>
                        <div className="col-md-6 order-md-1">
                            <p>
                                Instead of starting with a blank page, use an AI paragraph maker to expedite your writing process.
                                AI tools help you save time and create content more efficiently—all while generating unique content for your project.
                                Picsart’s free paragraph creator tool can create paragraphs for every context, from blog posts to landing pages.
                                When you’re finished, add your text to a canvas with just a few clicks. Utilize our AI Background Generator to generate
                                backgrounds, or refine your design with beginner-friendly AI photo editing tools.Expedite your writing process with original
                                AI-generated paragraphs. Simply enter a text prompt and click Generate to generate paragraphs for free with AI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add more sections as needed */}
        </div>
    );
};

export default LandingPage;
