import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        className="w-full flex items-center"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
