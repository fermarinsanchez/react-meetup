import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Favorites from './Favorites';

jest.mock('react-redux');

describe('FavoritesPage', () => {
    test('renders "No favorites added" message when favorites array is empty', () => {
        useSelector.mockReturnValue([]);
        render(
            <BrowserRouter>
                <Favorites />
            </BrowserRouter>
        );
        const message = screen.getByText('No favorites added');
        expect(message).toBeInTheDocument();
    });

    test('renders MeetupItems when favorites array is not empty', () => {
        useSelector.mockReturnValue([
            {
                id: 'm1',
                title: 'Meetup 1',
                image: 'https://test.com/test.jpg',
                address: 'Address test 1',
                description: 'Description 1',
            },
            {
                id: 'm2',
                title: 'Meetup 2',
                image: 'https://test.com/test.jpg',
                address: 'Address test 2',
                description: 'Description test 2',
            },
        ]);
        render(
            <BrowserRouter>
                <Favorites />
            </BrowserRouter>
        );
        const meetup1 = screen.getByText('Meetup 1');
        const meetup2 = screen.getByText('Meetup 2');
        expect(meetup1).toBeInTheDocument();
        expect(meetup2).toBeInTheDocument();
    });
});
