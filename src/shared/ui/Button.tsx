import { ComponentProps, FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ComponentProps<'button'> {
  size?: 'xs' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'secondary';
  variant?:
    | 'default'
    | 'filled'
    | 'outline'
    | 'light'
    | 'subtle'
    | 'transparent';
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  loading?: boolean;
}

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
  const btnSize = {
    xs: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5.5 py-3 text-lg',
    xl: 'px-6.5 py-4 text-xl',
  };
  const colorStyles = {
    default: {
      base: 'text-sky-500 border-sky-500',
      bg: 'bg-black',
      hover: 'hover:bg-sky-500/75',
      light: 'bg-sky-100 text-sky-700 hover:bg-sky-200',
      subtle: 'bg-sky-950/20 text-sky-300 hover:bg-sky-800/40',
    },
    secondary: {
      base: 'text-orange-500 border-orange-500',
      bg: 'bg-black',
      hover: 'hover:bg-orange-500/75',
      light: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
      subtle: 'bg-orange-950/20 text-orange-300 hover:bg-orange-800/40',
    },
  };
  const btnVariant = {
    default: `${colorStyles[color].base} ${colorStyles[color].bg} ${colorStyles[color].hover}`,
    filled: `${colorStyles[color].base.replace('text-', 'text-white ')} ${colorStyles[color].base.replace('text-', 'bg-')} hover:opacity-80`,
    outline: `border-2 ${colorStyles[color].base} bg-transparent hover:${colorStyles[color].base.split(' ')[0]}/20`,
    light: `${colorStyles[color].light}`,
    subtle: `${colorStyles[color].subtle}`,
    transparent: `bg-transparent text-${color === 'default' ? 'sky' : 'orange'}-500 hover:bg-${color === 'default' ? 'sky' : 'orange'}-500/10`,
  };

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-md border transition',
        btnSize[size],
        btnVariant[variant],
        (loading || disabled) && 'opacity-60 cursor-not-allowed',
      )}
      {...props}
    >
      {loading ? (
        <span
          className={clsx(
            'w-5 h-5 border-2 border-t-transparent rounded-full animate-spin',
            color === 'secondary' ? 'border-orange-500' : 'border-sky-500',
          )}
        />
      ) : (
        <>
          {leftSection && (
            <span className="flex items-center">{leftSection}</span>
          )}
          <span>{children}</span>
          {rightSection && (
            <span className="flex items-center">{rightSection}</span>
          )}
        </>
      )}
    </button>
  );
};
