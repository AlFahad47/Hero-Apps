
import logo from '../../assets/logo.png'
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="text-4xl flex">
          <div>L</div>
          <img className='h-10 w-10 animate-spin' src={logo} alt="" />
          <div>ading</div>
        </div>
        <div className="mt-4 text-xl text-gray-700"></div>
      </div>
    </div>
  );
};
export default Loading;
