import React from 'react';

const StarSvg = () => <span>⭐</span>;

function Rating() {
  return (
    <div className="rating d-flex justify-content-center align-items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <StarSvg key={index} />
      ))}
      <span className="ms-2 mb-0"><strong> 5 </strong></span>
    </div>
  );
}

export default Rating;
