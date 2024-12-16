// import React, { useState, useEffect } from "react";
// import ClothCard from "../clothes/ClothCard";
// import 'swiper/css/navigation';
// import {useFetchAllClothesQuery} from '../../redux/features/cart/clothesApi'

// const categories = ["Choose a category", "Tops", "Bottoms", "Outerwear", "Accessories"];

// const TopSellers = () => {
//   // const [clothes, setClothes] = useState([]);
//   // const [selectedCategory, setSelectedCategory] = useState("Choose a category");
//   // const [loading, setLoading] = useState(true);  // For loading state
//   // const [error, setError] = useState(null);  // For error state
//   const[selectedCategory,setSelectedCategory]=useState("Choose a genre");

//   const {data:clothes=[]}=useFetchAllClothesQuery();
//   console.log(clothes)

//   // useEffect(() => {
//   //   setLoading(true);  // Set loading to true before fetching
//   //   fetch("clothes.json")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setClothes(data);
//   //       setLoading(false);  // Set loading to false once data is fetched
//   //     })
//   //     .catch((err) => {
//   //       setError("Error loading clothes data");  // Set error message
//   //       setLoading(false);  // Set loading to false even if there's an error
//   //     });
//   // }, []);

//   const filteredClothes =
//     selectedCategory === "Choose a category"
//       ? clothes
//       : clothes.filter((cloth) => cloth.category === selectedCategory.toLowerCase());
//   console.log(filteredClothes)

//   return (
//     <div className="py-10">

// import 'swiper/css/navigation';
// import {useFetchAllClothesQuery} from ''

//       <div className="mb-8 flex items-center">
//         <select
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           name="category"
//           id="category"
//           className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//         >
//           {categories.map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {filteredClothes.length > 0 ? (
//           filteredClothes.slice(0, 10).map((cloth, index) => (
//             <div key={index}>
//               <ClothCard cloth={cloth} />
//             </div>
//           ))
//         ) : (
//           <p>No clothes found in this category</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TopSellers;

// // import React, { useState, useEffect } from "react";
// // import ClothCard from "../clothes/ClothCard";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Pagination, Navigation } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // const categories = ["Choose a category", "Tops", "Bottoms", "Outerwear", "Accessories"];

// // const TopSellers = () => {
// //   const [clothes, setClothes] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState("Choose a category");

// //   useEffect(() => {
// //     fetch("clothes.json")
// //       .then((res) => res.json())
// //       .then((data) => setClothes(data))
// //       .catch((err) => console.error("Error loading clothes data:", err));
// //   }, []);

// //   const filteredClothes =
// //     selectedCategory === "Choose a category"
// //       ? clothes
// //       : clothes.filter((cloth) => cloth.category === selectedCategory.toLowerCase());

// //   // Debugging: Check the filtered clothes
// //   console.log(filteredClothes);

// //   return (
// //     <div className="py-10">
// //       <h2 className="text-3xl font-semibold mb-6">Mostly Bought</h2>

// //       <div className="mb-8 flex items-center">
// //         <select
// //           onChange={(e) => setSelectedCategory(e.target.value)}
// //           name="category"
// //           id="category"
// //           className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
// //         >
// //           {categories.map((category, index) => (
// //             <option key={index} value={category}>
// //               {category}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       <Swiper
// //         slidesPerView={1}
// //         spaceBetween={30}
// //         navigation={true}
// //         breakpoints={{
// //           640: {
// //             slidesPerView: 1,
// //             spaceBetween: 20,
// //           },
// //           768: {
// //             slidesPerView: 2,
// //             spaceBetween: 40,
// //           },
// //           1024: {
// //             slidesPerView: 2,
// //             spaceBetween: 50,
// //           },
// //           1180: {
// //             slidesPerView: 3,
// //             spaceBetween: 50,
// //           },
// //         }}
// //         modules={[Pagination, Navigation]}
// //         className="mySwiper"
// //       >
// //         {filteredClothes.length > 0 &&
// //           filteredClothes.slice(8, 18).map((cloth, index) => (
// //             <SwiperSlide key={index}>
// //               <ClothCard cloth={cloth} />
// //             </SwiperSlide>
// //           ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default TopSellers;

import React, { useState } from "react";
import ClothCard from "../clothes/ClothCard";
import { useFetchAllClothesQuery } from "../../redux/features/clothes/clothApi";

const categories = [
  "Choose a category",
  "Tops",
  "Bottoms",
  "Outerwear",
  "Accessories",
];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a category");
  const {
    data: clothes = [],
    isLoading,
    isError,
    error,
  } = useFetchAllClothesQuery();

  const filteredClothes =
    selectedCategory === "Choose a category"
      ? clothes
      : clothes.filter(
          (cloth) => cloth.category === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && (
        <p className="text-red-500">
          {error?.data?.message || "Error fetching data"}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredClothes.length > 0 ? (
          filteredClothes.slice(0, 10).map((cloth, index) => (
            <div key={index}>
              <ClothCard cloth={cloth} />
            </div>
          ))
        ) : (
          <p>No clothes found in this category</p>
        )}
      </div>
    </div>
  );
};

export default TopSellers;
