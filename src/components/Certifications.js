import React, { useState } from 'react';

const Certifications = () => {
  const [showCertification, setShowCertification] = useState(false);

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div>
        <button onClick={() => setShowCertification(!showCertification)}>
          Show Certification
        </button>
        {showCertification && (
          <div>
            <img src="your-certification-image-url" alt="Certification" />
            <p>Certification Details</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
