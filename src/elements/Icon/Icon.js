export const Icon = ({ name }) => {
  return (
    <svg className={`icon icon-${name}`}>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};
