import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AllMeetupsPage from './AllMeetupsPage';

const mockMeetups = [
    { id: 1, title: 'First Meetup', image: 'image-url', address: '1234 Main St', description: 'This is the first meetup' },
    { id: 2, title: 'Second Meetup', image: 'image-url', address: '5678 Maple St', description: 'This is the second meetup' }
];
const mockFavorites = [mockMeetups[0]];

describe('AllMeetupsPage', () => {
    const mockStore = configureStore([]);

    test('renders All Meetups page heading', () => {
        const store = mockStore({
            meetups: mockMeetups,
            favorites: mockFavorites
        });

        render(
            <Provider store={store}>
                <AllMeetupsPage />
            </Provider>
        );

        const headingElement = screen.getByRole('heading', { name: /All Meetups/i });
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the Spinner waiting for meetups', () => {
        const store = mockStore({
            meetups: mockMeetups,
            favorites: mockFavorites
        })

        render(
            <Provider store={store}>
                <AllMeetupsPage />
            </Provider>
        )
        const spinner = screen.getByText('Loading ...');
        expect(spinner).toBeInTheDocument();
    });

    test('renders the list of meetups', async () => {
        const store = mockStore({
            meetups: mockMeetups,
            favorites: mockFavorites
        })

        render(
            <Provider store={store}>
                <AllMeetupsPage />
            </Provider>
        )
        await screen.findAllByTestId('meet-up-item');
        const meetupItems = screen.getAllByTestId('meet-up-item');
        expect(meetupItems.length).toBe(mockMeetups.length);
    });

    test('displays favorite text for favorite meetups', async () => {
        const store = mockStore({
            meetups: mockMeetups,
            favorites: mockFavorites
        });

        render(
            <Provider store={store}>
                <AllMeetupsPage />
            </Provider>
        );
        await screen.findAllByTestId('meet-up-item');
        const favoriteIcon = screen.getByText('FAVORITE!');
        expect(favoriteIcon).toBeInTheDocument();
    });

    test('does not display favorite icon for non-favorite meetups', () => {
        const store = mockStore({
            meetups: mockMeetups,
            favorites: mockFavorites
        });

        render(
            <Provider store={store}>
                <AllMeetupsPage />
            </Provider>
        );

        const favoriteIcon = screen.queryByTestId('favorite-icon-2');
        expect(favoriteIcon).toBeNull();
    });
});
