import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <main>
        <div className="title-container">
          <h2 className="main-headline">
            Don't just consume. Steal back.
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="content-section">
          <h3 className="subheadline">
            Stay Awake<br />to the World Around You
          </h3>
          <div className="content-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
            </p>
          </div>
        </div>

        <div className="image-section">
          <img
            src="test.png" 
            alt="back_image"
            className="back_image"
          />
        </div>
      </main>

      <style jsx>{`
        .home-page {
          font-family: Arial, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          position: relative; /* For absolute positioning of the label button */
        }

        header {
          margin-bottom: 20px;
        }

        header h1 {
          font-size: 1.2rem;
          font-weight: normal;
          letter-spacing: 2px;
        }

        .title-container {
          position: relative;
          margin-bottom: 30px;
        }

        .main-headline {
          font-size: 6rem;
          font-weight: bold;
          line-height: 1;
          margin-bottom: 10px;
        }

        .title-underline {
          width: 100%;
          height: 8px;
          background-color: #000;
        }

        .content-section {
          display: flex;
          gap: 30px;
          margin-bottom: 30px;
        }

        .subheadline {
          font-size: 3rem;
          font-weight: bold;
          line-height: 1.2;
          flex: 1;
        }

        .content-text {
          flex: 1;
          font-size: 2console.log('Home component rendered');rem;
          line-height: 1.2;
          color: #333;
        }

        .label-button {
          position: absolute;
          right: 20px;
          bottom: 20px;
          background-color: transparent;
          border: 1px solid #000;
          border-radius: 20px;
          padding: 5px 15px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .image-section {
          margin-top: 40px; /* Space above the image */
          width: 100%;
        }

        .back_image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px; /* Optional: slight rounding of corners */
        }

        @media (max-width: 768px) {
          .content-section {
            flex-direction: column;
          }

          .main-headline {
            font-size: 4rem;
          }

          .subheadline {
            font-size: 2rem;
          }

          .content-text {
            font-size: 2rem;
            line-height: 1.2;
          }

          .label-button {
            bottom: 10px;
            right: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;