import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoHeader from './TodoHeader';

test('should render TodoHeader', () => { 

    render(<TodoHeader/>);
    const header = screen.getByText('Todo List');
    expect(header).not.toBeNull();
})