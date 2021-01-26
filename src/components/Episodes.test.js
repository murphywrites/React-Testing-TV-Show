import React from 'react';
import { queryAllByRole, queryAllByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Episodes from './Episodes'


const episodes = [{airdate: "2016-07-15",
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


test("Episodes render without errors", () => {
    render(<Episodes episodes={[]}/>);
})

test("renders change in episodes list correctly", () => {
    //arrange
    const { rerender } = render(<Episodes episodes={[]}/>);

     let episodeObjects = screen.queryAllByTestId('episode');

    // assert
    expect(episodeObjects).toHaveLength(0)

    
    rerender(<Episodes episodes={episodes} />)
    // expect
    episodeObjects = screen.queryAllByTestId('episode')
    expect(episodeObjects).toHaveLength(3);
})