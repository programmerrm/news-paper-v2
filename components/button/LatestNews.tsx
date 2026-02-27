type LatestNewsButtonProps = {
  id: string;
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const LatestNewsButton = ({
  id,
  name,
  label,
  defaultChecked = false,
}: LatestNewsButtonProps) => {
  return (
    <div className="w-1/2 flex items-center justify-center">
      <input
        type="radio"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        className="peer hidden"
      />

      <label
        htmlFor={id}
        className="
          w-full text-center py-2 cursor-pointer border-b transition-all
          border-[#A1A1A1] text-gray-500
          peer-checked:border-red-500
          peer-checked:text-red-500
          peer-checked:font-semibold
        "
      >
        {label}
      </label>
    </div>
  );
};

export default LatestNewsButton;