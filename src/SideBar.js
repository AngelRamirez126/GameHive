import { AiOutlineMessage } from 'react-icons/ai'
import { BsPatchPlus } from 'react-icons/bs'
import { GiHoneycomb } from 'react-icons/gi'
import { GiTreeBeehive } from 'react-icons/gi'
import { FiSettings } from 'react-icons/fi'

const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-Primary text-secondary shadow-lg'>
            <SideBarIcon icon={<AiOutlineMessage size='28'/>} />
            <SideBarIcon icon={<BsPatchPlus size='28'/>} />
            <SideBarIcon icon={<GiTreeBeehive size='28'/>} />
            <SideBarIcon icon={<GiHoneycomb size='28'/>} />
            <SideBarIcon icon={<FiSettings size='28'/>} />
        </div>
    );
};

const SideBarIcon = ({ icon }) => (
    <div className='sidebar-icon'>
        {icon}
    </div>
);

export default Sidebar;