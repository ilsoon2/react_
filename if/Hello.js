import React from 'react';

export default function Hello({ name, isSpecial, isPremium }) {
  const useName = name || 'strnger';
  const special = isSpecial && '스페셜';
  const premium = isPremium ? '유료' : '무료';
  return (
    <>
      <div>
        hello {useName} {special} {premium} 고객님!
      </div>
    </>
  );
}
