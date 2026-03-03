import * as React from 'react';

import CustomLink from '@/components/links/CustomLink';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex min-h-[60vh] flex-col items-center justify-center gap-4'>
          <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
            Something went wrong
          </h1>
          <p className='text-gray-600 dark:text-gray-300'>
            An unexpected error occurred.
          </p>
          <CustomLink
            href='/'
            onClick={() => this.setState({ hasError: false })}
          >
            Back to Home
          </CustomLink>
        </div>
      );
    }

    return this.props.children;
  }
}
