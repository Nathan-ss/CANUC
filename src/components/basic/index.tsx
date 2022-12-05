import Header from "./header";

const BasicLayout = (props: { children: any }) => {
  return (
    <>
      <Header />
      <div className="mt-20">{props.children}</div>
    </>
  );
};
export default BasicLayout;
