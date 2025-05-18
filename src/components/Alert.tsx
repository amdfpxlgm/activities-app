// Alert component

export interface AlertProps {
  type: 'info' | 'error';
  text: string | undefined;
}

export const Alert = (props: AlertProps) => {
  let color = '';
  const { type, text } = props;

  // Set text color based on type
  switch (type) {
    case 'error':
      color = 'text-red-600';
      break;
    default:
      color = 'text-black';
  }

  return text && <p className={`${color} mt-5 text-lg`}>{text}</p>;
};
