const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé",        
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author: "Washington Irving",        
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",        
    },
    {
        quote: "Opportunities don’t happen. You create them.",
        author: "Chris Grosser",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "Angelina Jolie",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;