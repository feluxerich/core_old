import { useState } from "react";
import Image from "next/image";

function Hypixel() {
  var sendRequest = async () => {
    var response = await fetch(`/api/minecraft/hypixel?name=${value}`);
    try {
      setData((await response.json()).data);
    } catch (_) {}
  };

  const [value, setValue] = useState("");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className="container flex flex-col items-center ">
      <div className="flex items-center w-full max-w-sm py-2 border-b-2 border-gray-500">
        <input
          className="w-full px-2 py-1 mr-3 leading-tight text-white bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder="Username"
          aria-label="Username"
          state={value}
          onChange={handleChange}
        />
        <button
          className="flex-shrink-0 px-2 py-1 text-sm text-gray-500 bg-transparent border-2 border-gray-500 rounded hover:bg-gray-600 hover:border-gray-600 hover:text-white"
          type="submit"
          onClick={sendRequest}
        >
          Lookup
        </button>
      </div>
      <div className="flex flex-row w-full h-64 max-w-xl mt-6 bg-gray-800 rounded-lg p-7">
        <div
          className="h-full bg-gray-700 rounded-lg mr-9"
          style={{ aspectRatio: "1/1" }}
        >
          <Image
            className="w-full h-full rounded-lg"
            src={`https://mc-heads.net/avatar/${data?.id}`}
            alt="profile-head"
            height={200}
            width={200}
            style={{ aspectRatio: "1/1" }}
          />
        </div>
        <div className="flex flex-col w-full h-full font-bold text-white">
          <p className="mb-4 text-2xl">{data?.name}</p>
          <span className="flex items-center text-sm">
            Status:{" "}
            <div
              className={`h-3 w-3 rounded-full ml-2 ${
                data?.status === false ? "bg-red-500" : "bg-green-500"
              }`}
            />
          </span>
          <span className="text-sm">
            Rank:{" "}
            <span className="font-normal">
              {data?.rank
                ? data.rank.replace("_", "").replace("PLUS", "+")
                : "No Rank"}
            </span>
          </span>
          <span className="text-sm">
            Guild:{" "}
            <span className="font-normal">
              {data?.guild ? data.guild : "No Guild"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hypixel;
