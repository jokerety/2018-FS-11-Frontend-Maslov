import React from 'react';

export function getPosition(options) {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      },
      options,
    );
  });
}
