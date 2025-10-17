import { ComponentProps, FC, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonSize = 'xs' | 'md' | 'lg' | 'xl';

type ButtonVariant =
  | 'default'
  | 'filled'
  | 'outline'
  | 'light'
  | 'subtle'
  | 'transparent';

type ButtonColor = 'default' | 'secondary';

interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  loading?: boolean;
}

const SIZES = {
  xs: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5.5 py-3 text-lg',
  xl: 'px-6.5 py-4 text-xl',
};

const COLOR = {
  default: '',
  secondary: 'btn-secondary',
};

const VARIANT = {
  default:
    'text-white bg-transparent border border-gray-600/75 text-inherit hover:bg-transparent',

  filled: `
    text-white bg-gray-700 hover:bg-gray-600 border border-gray-600
    [&.btn-secondary]:text-white [&.btn-secondary]:bg-orange-500 [&.btn-secondary]:hover:bg-orange-600 [&.btn-secondary]:border-orange-600
  `,

  outline: `
    text-gray-300 border border-gray-500 bg-transparent hover:bg-gray-700
    [&.btn-secondary]:text-orange-500 [&.btn-secondary]:border-orange-500 [&.btn-secondary]:hover:bg-orange-500/20
  `,

  light: `
    text-gray-200 bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600/50
    [&.btn-secondary]:text-orange-200 [&.btn-secondary]:bg-orange-500/20 [&.btn-secondary]:hover:bg-orange-500/30 [&.btn-secondary]:border-transparent
  `,

  subtle: `
    text-gray-300 bg-transparent hover:bg-gray-700/60 border border-transparent
    [&.btn-secondary]:text-orange-400 [&.btn-secondary]:bg-transparent [&.btn-secondary]:hover:bg-orange-500/20
  `,

  transparent: `
    text-gray-300 bg-transparent border border-transparent
    [&.btn-secondary]:text-orange-400
  `,
};

export const Button: FC<ButtonProps> = ({
  children,
  size = 'xs',
  color = 'default',
  variant = 'default',
  leftSection,
  rightSection,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'relative inline-flex items-center justify-center gap-2 rounded-md transition cursor-pointer select-none overflow-hidden',
        SIZES[size],
        VARIANT[variant],
        COLOR[color],
        (loading || disabled) && 'opacity-60 cursor-not-allowed',
      )}
      disabled={disabled || loading}
      {...props}
    >
      <span
        className={clsx(
          'flex items-center justify-center transition-all duration-200',
          loading
            ? 'opacity-0 translate-y-[-10%]'
            : 'opacity-100 translate-y-0',
        )}
      >
        {leftSection && (
          <span className="flex items-center">{leftSection}</span>
        )}
        <span>{children}</span>
        {rightSection && (
          <span className="flex items-center">{rightSection}</span>
        )}
      </span>
      {loading && (
        <span
          className={clsx(
            'absolute inset-0 flex items-center justify-center transition-all duration-200',
            loading ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
          )}
        >
          <span
            className={clsx(
              'w-5 h-5 border-2 border-t-transparent rounded-full animate-spin',
              variant === 'filled' ? 'border-white' : 'border-gray-600/75',
              color === 'secondary' &&
                variant !== 'filled' &&
                'border-orange-500',
            )}
          />
        </span>
      )}
    </button>
  );
};
