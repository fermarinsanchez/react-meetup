import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../store';
import { Provider } from 'react-redux';
import NewMeetup from './NewMeetup';



describe('NewMeetup', () => {
    test('should render "Add New Meetup" title', () => {
        render(
            <Provider store={store}>
                <NewMeetup />
            </Provider>
        );
        const titleElement = screen.getByRole('heading', { name: 'Add New Meetup' });
        expect(titleElement).toBeInTheDocument();
    });

    test('should fill out and submit form', () => {
        render(
            <Provider store={store}>
                <NewMeetup />
            </Provider>
        );

        const titleInput = screen.getByLabelText('Meetup Title');
        userEvent.type(titleInput, 'Laguna Negra');
        expect(titleInput).toHaveValue('Laguna Negra');

        const imageInput = screen.getByLabelText('Meetup Image');
        userEvent.type(imageInput, 'https://test-image-url.com');
        expect(imageInput).toHaveValue('https://test-image-url.com');

        const addressInput = screen.getByLabelText('Address');
        userEvent.type(addressInput, 'Sierra de Gredos');
        expect(addressInput).toHaveValue('Sierra de Gredos');

        const descriptionInput = screen.getByLabelText('Description');
        userEvent.type(descriptionInput, 'Preciosa la laguna negra de Gredos pero el agua está que corta');
        expect(descriptionInput).toHaveValue('Preciosa la laguna negra de Gredos pero el agua está que corta');

        const submitButton = screen.getByRole('button', { name: 'Add Meetup' });
        userEvent.click(submitButton);
    });
});
