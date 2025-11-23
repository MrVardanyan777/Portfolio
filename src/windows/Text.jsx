import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import useWindowStore from "#store/window.js";
import clsx from "clsx";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name || "Text File"}</h2>
      </div>

      <div className={clsx("p-4", "bg-white", "max-w-[520px]", "min-w-[360px]")}> 
        {image && (
          <img
            src={image}
            alt={name || "text file image"}
            className="w-full h-auto rounded mb-3"
          />
        )}

        {subtitle && (
          <h3 className="text-base font-medium text-gray-700 mb-2">{subtitle}</h3>
        )}

        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-2 text-sm leading-relaxed text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
