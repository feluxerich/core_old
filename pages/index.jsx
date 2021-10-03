function HomePage({ GH_CLIENT_ID }) {
  return (
    <div className="w-full text-center mt-56">
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${GH_CLIENT_ID}`}
      >
        <button className="border-2 border-white p-5 rounded-md">
          Connect GitHub
        </button>
      </a>
    </div>
  );
}

export default HomePage;

export async function getServerSideProps() {
  return {
    props: {
      GH_CLIENT_ID: process.env.GH_CLIENT_ID,
    },
  };
}
