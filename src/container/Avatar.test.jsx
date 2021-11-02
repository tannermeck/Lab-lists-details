import React from 'react';
import Avatar from './Avatar.jsx';
import { render, screen } from '@testing-library/react';

describe('should return a page render', () => {
    it('displays a list of characters', async () => {
        render(<Avatar />);
        screen.getByText('Loading...')
        const ul = await screen.findByRole('list');
        expect(ul).not.toBeEmptyDOMElement();
    })
})