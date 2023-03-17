import ItemCheckBox from './ItemCheckBox';


function SubMenu({ node, checkedItems, setCheckedItems }) {
    let { key, label, url } = node;
    let nodeData = { key, label, url };
    if (node.nodes && node.nodes.length) {

        return (
            <li className="menu-item sub-items" key={node.key}>
                <a href='#' className='menu-link'>
                    <ItemCheckBox node={nodeData} setCheckedItems={setCheckedItems} checkedItems={checkedItems} /> 
                    {node.label}
                </a>
                <ul className="sub-menu">
                    {node.nodes.map(child => (
                        <SubMenu node={child} key={child.key} setCheckedItems={setCheckedItems} checkedItems={checkedItems}/>
                    ))}
                </ul>
            </li>
        );
    }

    return (
        <li className="menu-item" key={node.key}>
            <a href='#' className='menu-link'>
                <ItemCheckBox node={nodeData} setCheckedItems={setCheckedItems} checkedItems={checkedItems} />
                {node.label}
            </a>
        </li>

    );
}


export default SubMenu;