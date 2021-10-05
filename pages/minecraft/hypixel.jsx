import { useState } from "react";
import { Image } from "next/image";

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
    <div className="container ml-auto mr-auto flex flex-col justify-center items-center mt-40">
      <div className="flex items-center border-b-2 border-gray-500 py-2 w-full max-w-sm">
        <input
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Username"
          aria-label="Username"
          state={value}
          onChange={handleChange}
        />
        <button
          className="flex-shrink-0 bg-transparent hover:bg-gray-600 border-gray-500 hover:border-gray-600 text-sm border-2 text-gray-500 hover:text-white py-1 px-2 rounded"
          type="submit"
          onClick={sendRequest}
        >
          Lookup
        </button>
      </div>
      <div className="bg-gray-800 rounded-lg max-w-xl w-full h-64 p-7 flex flex-row mt-6">
        <div
          className="bg-gray-700 h-full rounded-lg mr-9"
          style={{ aspectRatio: "1/1" }}
        >
          <Image
            className="h-full w-full rounded-lg"
            src={`https://mc-heads.net/avatar/${data?.id}`}
            alt="profile-head"
          />
        </div>
        <div className="w-full h-full flex flex-col text-white font-bold">
          <p className="text-2xl mb-4">{data?.name}</p>
          <span className="text-sm flex items-center">
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
