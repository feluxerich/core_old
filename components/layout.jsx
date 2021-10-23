import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <div className="absolute left-0 right-0 z-0 w-screen h-full background"></div> */}
      <main
        className="flex items-center justify-center w-full"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
