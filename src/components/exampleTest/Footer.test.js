import React from 'react';
import { render , screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Footer';

afterEach(cleanup);

describe('Render component', () => {
    test("should render the footer component", () => {
        render(<Footer />)
    })
})
describe('Test Footer headers are correct', () => {
    beforeEach(() => {
        render(<Footer />);
    })
   test('should correctly match first footer header', () => {
        expect(screen.getByText('About')).toBeInTheDocument();
    })
    test("should correctly match second footer header", () => {
        expect(screen.getByText('Retailer')).toBeInTheDocument();
    })
    test("should correctly match third footer header", () => {
        expect(screen.getByText('Help')).toBeInTheDocument();
    })
    test("should correctly match fourth footer headers", () => {
        expect(screen.getByText('Region')).toBeInTheDocument();
    })
    test("should correctly match fifth footer headers", () => {
        expect(screen.getByText('Social')).toBeInTheDocument();
    })
})