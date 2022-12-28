import { ErrorMessage } from "./ErrorMessage";

export const FormInput = ({
  id,
  label,
  register,
  type = "text",
  required,
  autoComplete = "off",
  placeholder = "",
  errors,
}) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor={id}
        >
          {label}
          {required && "*"}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="form-input bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-600 invalid:border-pink-500"
          id={id}
          name={id}
          type={type}
          data-testid={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(id, {
            required,
          })}
        />
        {errors[id] && <ErrorMessage message={errors[id]?.message} />}
      </div>
    </div>
  );
};
