import React from 'react';

const ItemsPerPageSelector = ({ itemsPerPage, setItemsPerPage }) => {
    return (
        <div>
            <label htmlFor="items-per-page">Items per page:</label>
            <select
                id="items-per-page"
                value={itemsPerPage}
                onChange={e => setItemsPerPage(Number(e.target.value))}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        </div>
    );
};

export default ItemsPerPageSelector;
