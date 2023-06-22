"use client";
import { useState } from "react";

export default function Spinner( {finishLoading} ) {
  
    const [isMounted, setMounted] = useState(false);
  


    return (
    <div class="spinner-border text-secondary m-auto" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}
