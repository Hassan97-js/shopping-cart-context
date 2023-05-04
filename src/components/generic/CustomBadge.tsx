type CustomBadgeProps = {
  position: string;
  start: string;
  translate: string;
  backgroundColor: string;
  text: string;
  badgeClassName: string;
};

const CustomBadge: React.FC<CustomBadgeProps> = ({
  badgeClassName,
  position,
  start,
  translate,
  backgroundColor,
  text
}) => {
  return (
    <span
      className={`${badgeClassName} position-absolute ${position} ${start} ${translate} rounded-pill bg-${backgroundColor}`}>
      {text}
    </span>
  );
};

export default CustomBadge;
