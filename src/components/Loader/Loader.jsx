import { ProgressBar } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { loaderSelector } from 'store/contacts/selectors';
import css from './Loader.module.css';

const Loader = () => {
  const isLoading = useSelector(loaderSelector);

  return (
    isLoading && (
      <div className={css.container}>
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      </div>
    )
  );
};

export default Loader;
