import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export default function UnstyledLink({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={clsx(className, 'cursor-newtab')}
      {...rest}
    >
      {children}
    </Link>
  );
}
