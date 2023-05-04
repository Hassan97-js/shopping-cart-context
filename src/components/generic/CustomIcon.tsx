import { IconContext } from 'react-icons';

type Props = {
  size?: string;
  style?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
};

const CustomIcon: React.FC<Props> = ({ size, style, className, icon }) => {
  return (
    <IconContext.Provider
      value={{
        size: size || '1.2em',
        style: style || { color: 'currentcolor' },
        className: className || ''
      }}>
      {icon || 'Icon'}
    </IconContext.Provider>
  );
};

export default CustomIcon;
