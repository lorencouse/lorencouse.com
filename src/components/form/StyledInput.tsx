import clsx from 'clsx';
import * as React from 'react';

type StyledInputProps = {
  label?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function StyledInput({
  label,
  className,
  id,
  ...rest
}: StyledInputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className='mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300'
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          className,
          'w-full rounded-md dark:bg-dark',
          'border border-gray-300 dark:border-gray-600',
          'focus:border-primary-300 focus:outline-none focus:ring-0 dark:focus:border-primary-300'
        )}
        {...rest}
      />
    </div>
  );
}
