
import './sidebar.css';
import sidebarTree from '../../sidebarTree.json';
import SubMenu from './SubMenu';

import { FaChartArea } from "react-icons/fa";


function Sidebars(props) {

    return <div>
        <div className="sidebar-header"><FaChartArea /> <span>Statistics</span> </div>
        <div className="sidebar-main">
            <nav className='sidebar'>
                <ul className='main-sidebar'>
                    {sidebarTree.map(node => (
                        <SubMenu node={node} key={node.key} setCheckedItems={props.setCheckedItems} checkedItems={props.checkedItems} />
                    ))}
                </ul>
            </nav>

        </div>
       
    </div>;

}

export default Sidebars;
