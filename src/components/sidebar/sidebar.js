import SidebarItem from "../sidebar-item/sidebar-item";
import "./sidebar.css";
import * as HtmlToImage from 'html-to-image';
import * as download from 'downloadjs';


const Sidebar = ({ options, setSelectedIndex, selectedIndex }) => {

const downloadImage=()=>{
  HtmlToImage.toPng(document.getElementById('image')).then((url)=>{
    download(url,`${Date.now()}.png`);
  })
}

 return (
    <div className="sidebar">
      {options.map((option, index) => {
        return (
          <SidebarItem
            key={index}
            name={option.name}
            buttonClick={()=>setSelectedIndex(index)}
            select={selectedIndex === index}
          />
        );
      })}
      <button onClick={downloadImage} className="download"> Download</button>
    </div>
  );
};

export default Sidebar;
