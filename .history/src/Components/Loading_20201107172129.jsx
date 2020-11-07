import React from "react";

import { PulseSpinner } from "react-spinners-kit";

export default function Loading() {
  return (
    <div className="loading">
      <div align="center">
        <PulseSpinner size={40} color="orange"></PulseSpinner>
      </div>
    </div>
  );
}
