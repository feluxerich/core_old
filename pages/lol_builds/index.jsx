import Image from "next/image";

function LOL() {
  return (
    <div className="w-full text-center">
      <Image
        src="/lol_builds/mask.png"
        height="500px"
        width="500px"
        alt="mask"
      />
    </div>
  );
}

export default LOL;
