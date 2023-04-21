
import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import store from '../../store';
import { addFavorite } from '../../actions/index';
import { useScrollDirection } from '../../util-hooks/useScrollDirection';

jest.mock('../../util-hooks/useScrollDirection');

describe('MainNavigation component', () => {
    beforeEach(() => {
        useScrollDirection.mockReturnValue('down');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders navigation links', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MainNavigation />
                </MemoryRouter>
            </Provider>
        );

        const allMeetupsLink = screen.getByText(/All Meetups/i);
        const addNewMeetupLink = screen.getByText(/Add New Meetup/i);
        const myFavoritesLink = screen.getByText(/My Favorites/i);

        expect(allMeetupsLink).toBeInTheDocument();
        expect(addNewMeetupLink).toBeInTheDocument();
        expect(myFavoritesLink).toBeInTheDocument();
    });

    test('renders favorites badge with correct count', () => {
        const favoritesCount = 3;
        store.dispatch(addFavorite({ id: '1', title: 'Test Meetup' }));
        store.dispatch(addFavorite({ id: '2', title: 'Another Test Meetup' }));
        store.dispatch(addFavorite({ id: '3', title: 'Yet Another Test Meetup' }));

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MainNavigation />
                </MemoryRouter>
            </Provider>
        );

        const favoritesBadge = screen.getByText(favoritesCount.toString());

        expect(favoritesBadge).toBeInTheDocument();
        expect(store.getState().favorites.length).toBe(3);
    });
});