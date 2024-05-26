import opening from '../assets/opening.gif';

function Loading({isLoading}: {isLoading: boolean}) {
  if (!isLoading) return null;
  return (
    <div className="fixed z-[1000] w-screen h-screen">
      <img className="w-full h-full" src={opening} alt="loading" />
    </div>
  )
}
export default Loading;