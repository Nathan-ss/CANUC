import { Footer } from "./footer/footer";
import NavBar from "./navbar/navBar";

const BasicLayout = (props: { children: any }) => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="pt-20">{props.children}</div>
      <Footer />
    </div>
  );
};
export default BasicLayout;
