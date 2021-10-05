import { baseUrl } from "@utils/functions";
import { Image } from "next/image";

function GitHub({ GITHUB_USER_DATA, GITHUB_USER_REPOS }) {
  return (
    <div className="flex flex-col items-center pt-28">
      <a href={GITHUB_USER_DATA.url}>
        <div className="flex flex-col max-w-md items-center p-7 rounded-lg">
          <Image
            src={GITHUB_USER_DATA.avatar}
            alt="user_avatar"
            className="rounded-full w-24"
            style={{ aspectRatio: "1/1" }}
          />
          <span className="pt-6 text-2xl font-bold">
            {GITHUB_USER_DATA.login}
          </span>
          <span className="pt-3 text-xl">{GITHUB_USER_DATA.name}</span>
        </div>
      </a>
      <div>
        <ul>
          {GITHUB_USER_REPOS.map((element) => {
            return (
              <li key={element.name}>
                <a href={element.url}>
                  <button className="w-full flex flex-row">
                    <span className="left-6">{element.name}</span>
                    <span className="mr-6">
                      {element.private ? "🔒" : "🔓"}
                    </span>
                  </button>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default GitHub;

export async function getServerSideProps(context) {
  return {
    props: {
      GITHUB_USER_DATA: await (
        await fetch(`${baseUrl(context.req)}/api/github/user`, {
          headers: context.req.headers,
        })
      ).json(),
      GITHUB_USER_REPOS: await (
        await fetch(`${baseUrl(context.req)}/api/github/repos`, {
          headers: context.req.headers,
        })
      ).json(),
    },
  };
}
