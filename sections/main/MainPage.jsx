// "use client"
// import { useState } from "react";
// import TopNav from "./mainComponents/topNav/TopNav";
// import styles from "./Filters.module.css";
// import "./MainCss.css";
// import menuData from "@/menuData.json";

// export default function MainPage() {
//   const [activeOption, setActiveOption] = useState('Drinks');
//   const [activeFilter, setActiveFilter] = useState('Coffee'); // State to track active filter
//   console.log(menuData);

//   const activeCategoryData = menuData.categories.find(
//     (category) => category.name === activeOption
//   );

//   // Find the active subcategory
//   const activeSubcategoryData = activeCategoryData.secondsubcategories.filter(
//     (subcategory) => subcategory.subcategory === activeFilter
//   );
//   console.log(activeSubcategoryData);
//   console.log(activeCategoryData);
//   // const activeCategoryData = menuData.categories.find(
//   //   (category) => category.name === activeCategory
//   // );
//   // const filters = menuData.categories.activeOption.subcategories
//   return (
//     <div>
//         <TopNav />
//         <div className="optionsContainer">
//           <button
//             className={`option ${activeOption === 'Drinks' ? 'active' : ''}`}
//             onClick={() => setActiveOption('Drinks')}
//           >
//             Drinks
//           </button>
//           <button
//             className={`option ${activeOption === 'Food' ? 'active' : ''}`}
//             onClick={() => setActiveOption('Food')}
//           >
//             Food
//           </button>
//           <button
//             className={`option ${activeOption === 'Breakfast' ? 'active' : ''}`}
//             onClick={() => setActiveOption('Breakfast')}
//           >
//             Breakfast
//           </button>
//           <button
//             className={`option ${activeOption === 'Chicha' ? 'active' : ''}`}
//             onClick={() => setActiveOption('Chicha')}
//           >
//             Chicha
//           </button>
            
//           </div>
//         <div className="grayLine"></div>

//         {/* <div className="filtersContainer">
//           <div className={styles.filters}>
//             {filters.map((filter, index) => (
//               <button
//                 key={index}
//                 className={`${styles.filterButton} ${
//                   activeFilter === filter ? styles.active : ""
//                 }`}
//                 onClick={() => setActiveFilter(filter)}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div> */}
//     </div>
//   )
// }
"use client";
import { useState } from "react";
import TopNav from "./mainComponents/topNav/TopNav";
import styles from "./Filters.module.css";
import "./MainCss.css";
import menuData from "@/menuData.json";

export default function MainPage() {
  const [activeOption, setActiveOption] = useState("Drinks");
  const [activeFilter, setActiveFilter] = useState("All");

  // Find the active category data based on the selected option
  const activeCategoryData = menuData.categories.find(
    (category) => category.name === activeOption
  );

  // Get all second subcategories for the active category
  const filteredItems =
    activeFilter === "All"
      ? activeCategoryData?.secondsubcategories.flatMap((sub) => sub.items) || []
      : activeCategoryData?.secondsubcategories
          .filter((sub) => sub.subcategory === activeFilter)
          .flatMap((sub) => sub.items) || [];

  return (
    <div>
      <TopNav />
      {/* Category selection buttons */}
      <div className="optionsContainer zoomIn">
        {menuData.categories.map((category) => (
          <button
            key={category.name}
            className={`option ${activeOption === category.name ? "active" : ""}`}
            onClick={() =>{ 
              setActiveOption(category.name)
              setActiveFilter("All");
            }
            }
            
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grayLine"></div>

      {/* Filters for subcategories */}
      <div className="filtersContainer zoomIn">
        <div className={styles.filters}>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "All" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("All")}
          >
            All
          </button>
          {activeCategoryData.subcategories? (activeCategoryData.subcategories.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterButton} ${
                activeFilter === filter ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))):null}
        </div>
       
      </div>

      {/* Display filtered items */}
      {/* <div className="menuItemsContainer slideInUp">
        {activeCategoryData?.secondsubcategories
          .filter((group) =>
            activeFilter === "All" || group.subcategory === activeFilter
          )
          .map((group, groupIndex) => (
            <div key={groupIndex} className="menuGroup">
              <h3 className="groupTitle">{group.name}</h3>
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menuItem">
                  <span className="itemName">{item.name}</span>
                  <span className="itemPrice">{item.price.toFixed(1)} DT</span>
                </div>
              ))}
            </div>
          ))}
      </div> */}
    <div className="menuItemsContainer slideInUp">
        {activeCategoryData?.secondsubcategories
          .filter((group) =>
            activeFilter === "All" || group.subcategory === activeFilter
          )
          .map((group, groupIndex) => (
            <div key={groupIndex} className="menuGroup">
              {group.size ? (<div className="sizingContainer"><h3 className="groupSize">{group.name} </h3><h3 className="groupSize">{group.size} </h3></div>):( <h3 className="groupTitle">{group.name} </h3>)}
             
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menuItem">
                  <span className="itemName">{item.description || item.name}</span>
                  {item.soloprice && item.duoprice ? (  
                    <div className="itemPriceDuoSolo">
                      <div className="soloDuo"><p className="soloDuoTitle">Solo</p><p className="itemPrice">{item.soloprice.toFixed(1)} DT</p></div>
                      <div className="soloDuo"><p className="soloDuoTitle">Duo</p><p className="itemPrice">{item.duoprice.toFixed(1)} DT</p></div>
                    </div>
                  ) : item.sizeprice ? (
                    <span className="itemPrice">
                       {item.sizeprice} 
                    </span>
                  ) : item.price ? (
                    <p className="itemPrice">{item.price.toFixed(1)} DT</p>
                  ) : (
                    <span className="itemPrice">Price not available</span>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>

    </div>
  );
}
