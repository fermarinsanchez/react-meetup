import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { useDispatch } from 'react-redux';
import NewMeetupForm from './NewMeetupForm';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

describe('NewMeetupForm', () => {
    let dispatchMock;

    beforeEach(() => {
        dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders form inputs and button', () => {
        render(<NewMeetupForm />);

        expect(screen.getByLabelText('Meetup Title')).toBeInTheDocument();
        expect(screen.getByLabelText('Meetup Image')).toBeInTheDocument();
        expect(screen.getByLabelText('Address')).toBeInTheDocument();
        expect(screen.getByLabelText('Description')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('form submission dispatches addMeetup action with form values', () => {
        render(<NewMeetupForm />);

        const titleInput = screen.getByLabelText('Meetup Title');
        const imageInput = screen.getByLabelText('Meetup Image');
        const addressInput = screen.getByLabelText('Address');
        const descriptionInput = screen.getByLabelText('Description');
        const submitButton = screen.getByRole('button', { name: 'Add Meetup' });

        fireEvent.change(titleInput, { target: { value: 'Test Meetup' } });
        fireEvent.change(imageInput, { target: { value: 'https://test.com/meetup.jpg' } });
        fireEvent.change(addressInput, { target: { value: 'Test Address' } });
        fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
        fireEvent.click(submitButton);

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith({
            type: 'ADD_MEETUP',
            payload: {
                title: 'Test Meetup',
                image: 'https://test.com/meetup.jpg',
                address: 'Test Address',
                description: 'Test Description',
                id: expect.any(Number),
            },
        });
    });

    test('form submission clears form inputs', () => {
        render(<NewMeetupForm />);

        const titleInput = screen.getByLabelText('Meetup Title');
        const imageInput = screen.getByLabelText('Meetup Image');
        const addressInput = screen.getByLabelText('Address');
        const descriptionInput = screen.getByLabelText('Description');
        const submitButton = screen.getByRole('button', { name: 'Add Meetup' });

        fireEvent.change(titleInput, { target: { value: 'Test Meetup' } });
        fireEvent.change(imageInput, { target: { value: 'https://test.com/meetup.jpg' } });
        fireEvent.change(addressInput, { target: { value: 'Test Address' } });
        fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
        fireEvent.click(submitButton);

        expect(titleInput).toHaveValue('');
        expect(imageInput).toHaveValue('');
        expect(addressInput).toHaveValue('');
        expect(descriptionInput).toHaveValue('');
    });
});
