import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// After each test runs, clear and delete all compenents/data
afterEach(cleanup);
// declares the component we're testing
describe('About component', () => {
    // First test. Baseline to verify that component is rendering
    it('renders', () => {
        render(<About />);
    });
    // 2nd test. 
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})

// // __tests__/About.test.js
// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import About from '..';

// afterEach(cleanup);

// describe('About component renders', () => {
//   it('renders', () => {
//     render(<About />);
//   });
  
//   it('matches snapshot DOM node structure', () => {
//     const { asFragment } = render(<About />);
    
//     expect(asFragment()).toMatchSnapshot();
//   });
// })
