import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

interface ContainerProps extends ComponentProps<'div'> {
  size?: number;
  fluid?: boolean;
  className?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  size = 800,
  fluid = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={clsx(
        'bg-gray-800 text-white rounded-lg py-8 px-8 mx-auto',
        !fluid && 'w-full',
        className,
      )}
      style={!fluid ? { maxWidth: size } : undefined}
      {...props}
    >
      {children}
    </div>
  );
};
