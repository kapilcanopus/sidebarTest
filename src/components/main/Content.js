import React from "react";


function Content(props) {

    const getSelectedItemList = ()=>{
       return props.checkedItems.map(item=>{
            return <li key={item.key}>
                <a href={item.url} target="_blank">{item.label}</a>
            </li>
        })
    }
  return (
    <div>
        Selected Items from sidebar (Click on respective checkbox to select an item.)
        <ul>
            {getSelectedItemList()}
        </ul>
       
    </div>
  );
}

export default Content;
