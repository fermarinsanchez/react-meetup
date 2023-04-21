import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from './Card';

describe('Card component', () => {
    test('renders children', () => {
        render(<Card><p>Test content</p></Card>);
        const cardElement = screen.getByText(/Test content/i);
        expect(cardElement).toBeInTheDocument();
    });
});