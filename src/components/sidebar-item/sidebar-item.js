import './sidebar-item.css';

const SidebarItem=({name,buttonClick,select})=>{

return(
    <div className={`sidebar__item ${select ? "active" : null }`}>
        <button onClick={buttonClick}>
            {name}
        </button>
    </div>
)

}


export default SidebarItem;