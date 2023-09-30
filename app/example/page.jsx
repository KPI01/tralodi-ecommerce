"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Spinner = dynamic(() => import('/components/Spinner'), { ssr: false });

function MiPagina () {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Cambia este valor para ajustar la duración del retraso (en milisegundos)
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          Texto ejemplo
        </div>
      )}
    </div>
  );
};

export default MiPagina;