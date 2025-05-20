import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
// import ResponsiveDesign from "./ResponsiveDesign";
import ProductListSearchFilter from "./ProductListSearchFilter";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <FrameworkListSearchFilter/> */}
    <ProductListSearchFilter/>
    {/* <ResponsiveDesign/> */}
    {/* <Frameworklist /> */}
  </div>
);
