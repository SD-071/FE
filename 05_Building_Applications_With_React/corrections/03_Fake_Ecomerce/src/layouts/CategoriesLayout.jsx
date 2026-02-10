import { Categories } from "../components";
import { Outlet } from "react-router-dom";

function CategoriesLayout() {
  return (
    <div>
      <Categories />
      <Outlet />
      {/* <div className='flex flex-wrap justify-items-center gap-3 p-3'>display map</div> */}
    </div>
  );
}

export default CategoriesLayout;
