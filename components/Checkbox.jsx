const Checkbox = ({
  value,
  name,
  handleCheckbox,
  isCheckboxSelected,
  text,
}) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name={name}
        value={value || ''}
        className="pointer-events-none hidden"
        id={name}
        checked={isCheckboxSelected}
        onChange={handleCheckbox}
      />
      <label
        htmlFor={name}
        className={`flex cursor-pointer items-center gap-3 text-base text-midnight-500 ${
          isCheckboxSelected ? 'reverse' : ''
        }`}
      >
        <svg
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5"
        >
          <rect
            x="1.26"
            y="1.26"
            width="47.48"
            height="47.48"
            strokeWidth="2.52"
            className="box"
          />
          <path
            d="M9.46674 27.4L18.4667 36.4L41.1334 13.7333"
            strokeWidth="3.36"
            className="check"
          />
        </svg>
        {text}
      </label>
    </div>
  )
}

export default Checkbox
