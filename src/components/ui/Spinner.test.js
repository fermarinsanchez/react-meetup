import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner component', () => {
    test('renders loading text', () => {
        render(<Spinner />);
        const loadingText = screen.getByText('Loading ...');
        expect(loadingText).toBeInTheDocument();
    });
});
