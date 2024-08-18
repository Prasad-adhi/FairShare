import React , {useState} from "react"
export default function Footer()
{
    const quotes = [
        {name:"Erasmus", quote:"There is no joy in possession without sharing."},
        {name:"Leonard Nimoy", quote:"The miracle is this: The more we share the more we have."},
        {name:"Bertrand Russell", quote:"The only thing that will redeem mankind is cooperation."},
        {name:"Elie Wiesel", quote:"Friendship marks a life even more deeply than love. Love risks degenerating into obsession, friendship is never anything but sharing"},
        {name:"Brian Tracy", quote:"Love only grows by sharing. You can only have more for yourself by giving it away to others."}
    ]

    const randomIndex = Math.floor(Math.random()*quotes.length)
    const chosen = quotes[randomIndex]
    return (
        <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <p className="text-xl font-semibold text-gray-800">"{chosen.quote}"</p>
            <p className="mt-4 text-right text-gray-600">- {chosen.name}</p>
        </div>
    );
}