import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import useWindowStore from "#store/window.js";
import clsx from "clsx";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name || "Image"}</h2>
      </div>

      <div className={clsx("p-4", "bg-white", "max-w-[720px]", "min-w-[360px]")}> 
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name || "image file"}
            className="w-full h-auto rounded"
          />
        ) : (
          <p className="text-sm text-gray-600">No image available.</p>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageWindow;
