export default function InputField({
  placeholder = "Email address",
  id = "email",
  name = "email",
  type = "email",
}: {
  placeholder?: string;
  id?: string;
  name?: string;
  type?: string;
}) {
  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="text-sm leading-6 text-gray placeholder:text-gray font-inter w-full bg-white border border-[#B6C3C8] p-3 sm:p-4 focus:outline-0"
        required
      />
    </div>
  );
}