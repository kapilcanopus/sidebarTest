function ItemCheckBox({ node, checkedItems, setCheckedItems }) {


    const handleCheckboxChange = (event, menuItem) => {
        if (event.target.checked) {
            setCheckedItems([...checkedItems, menuItem]);
        } else {
            let filterItems = checkedItems.filter(i => i.key !== menuItem.key);
            setCheckedItems(filterItems);
        }
    };


    return (<label className='custom-checkbox'>
        <input type="checkbox" onChange={(event) => handleCheckboxChange(event, node)} />
        <span className='greenmark'></span>
    </label>);
}


export default ItemCheckBox;
