// src/components/ui/button.js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { children, onClick, size = 'md' } = this.props;

    const sizes = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-3 px-6 text-base',
      lg: 'py-4 px-8 text-lg',
    };

    return (
      <button
        onClick={onClick}
        className={`bg-blue-500 text-white rounded ${sizes[size]}`}
      >
        {children}
      </button>
    );
  }
}

export { Button };
