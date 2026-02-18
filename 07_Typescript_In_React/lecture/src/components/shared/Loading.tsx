type LoadingComponentProps = {
  message?: string
}

const Loading = ({ message = 'Loading...' }: LoadingComponentProps) => {
  return (
    <div className='flex gap-3 items-center justify-center fixed inset-0 z-50'>
      <span className='loading loading-spinner loading-xl'></span>
      <p className='text-primary text-lg font-semibold'>{message}</p>
    </div>
  );
};

export default Loading;
