import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NoMatch from './NoMatch';

describe('NoMatch component', () => {
    test('renders the correct text', () => {
        render(
            <MemoryRouter>
                <NoMatch />
            </MemoryRouter>
        );
        const heading = screen.getByRole('heading', { level: 3 });
        const paragraph1 = screen.getByText(/We couldn't find this page/i);
        const paragraph2 = screen.getByText(/Please, go back to/i);

        expect(heading).toBeInTheDocument();
        expect(paragraph1).toBeInTheDocument();
        expect(paragraph2).toBeInTheDocument();
    });

    test('contains a link to home page', () => {
        render(
            <MemoryRouter>
                <NoMatch />
            </MemoryRouter>
        );
        const link = screen.getByRole('link', { name: /React Meetups/i });
        expect(link).toBeInTheDocument();
    });

    test('link redirects to home page', () => {
        render(
            <MemoryRouter initialEntries={['/random']}>
                <NoMatch />
            </MemoryRouter>
        );
        const link = screen.queryByText(/React Meetups/i);
        expect(link.getAttribute('href')).toBe('/');
    });
});
