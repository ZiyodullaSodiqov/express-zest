import React from 'react';

const MathExpression = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ fontSize: '24px', marginBottom: '-10px' }}>
        <span>8 × 4 ÷ 5 ÷ 6</span>
      </div>
      <div style={{ borderTop: '2px solid black', width: '100px', margin: '0 auto' }}></div>
      <div style={{ fontSize: '24px', marginTop: '-10px' }}>
        <span>7 ÷ 8</span>
      </div>
    </div>
  );
};

export default MathExpression;
