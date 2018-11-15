import { v4 } from 'node-uuid';

const fakeNews = {
    items: [{
        id: v4(),
        value: "This data is actually fake."
    },
    {
        id: v4(),
        value: "The Office is a great television show"
    },
    {
        id: v4(),
        value: "Friends is a great television show"
    }]
};

const delay = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchItems = () => 
    delay(500).then(() => fakeNews.items)
