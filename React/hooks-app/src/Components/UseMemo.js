import React, { useState, useMemo } from 'react';

// Parent component
const ItemsList = () => {
    // Item component
    const Item = ({ name }) => {
        console.log(`Rendering item: ${name}`);
        return <li>{name}</li>;
    };

    const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

    const memoizedItems = useMemo(
        () =>
            items.map((item, index) => (
                <Item key={index} name={item} />
            )),
        [items]
    );

    const handleAddItem = () => {
        const newItem = prompt('Enter a new item:');
        if (newItem) {
            setItems([...items, newItem]);
        }
    };

    return (
        <div>
            <h2>Items List</h2>
            <ul>{memoizedItems}</ul>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default ItemsList;
