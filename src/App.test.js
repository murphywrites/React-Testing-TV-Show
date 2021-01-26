import React from 'react';
import { findByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

import { fetchShow as mockFetchShow } from './api/fetchShow';


test('Render app without errors', ()=>{
    render(<App />);
});

jest.mock('./api/fetchShow')
test('Renders episodes when season is chosen', async () => {
mockFetchShow.mockResolvedValueOnce(
        { data: {_embedded: {episodes:
        
            [{airdate: "2016-07-15",
            airstamp: "2016-07-15T12:00:00+00:00",
            airtime: "",
            id: 5533946,
            image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
            name: "Chapter One: The Vanishing of Will Byers",
            number: 1,
            runtime: 60,
            season: 1,
            summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
            type: "regular",
            url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers"
            },
            {airdate: "2016-07-15",
            airstamp: "2016-07-15T12:00:00+00:00",
            airtime: "",
            id: 553444946,
            image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
            name: "Chapter One: The Vanishing of Will Byers",
            number: 1,
            runtime: 60,
            season: 1,
            summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
            type: "regular",
            url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers"
            },
            {airdate: "2016-07-15",
            airstamp: "2016-07-15T12:00:00+00:00",
            airtime: "",
            id: 553946,
            image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
            name: "Chapter One: The Vanishing of Will Byers",
            number: 1,
            runtime: 60,
            season: 1,
            summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
            type: "regular",
            url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers"
            }] 
        }
    }
    }
    )

    const { queryByText } = render(<App />);
const dropdown = queryByText('Select a Season')
userEvent.click(dropdown)
expect(mockFetchShow).toHaveBeenCalledTimes(1);

});

