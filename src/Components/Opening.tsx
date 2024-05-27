import opening from '../assets/opening-large.gif';

function Opening({isLoading}: {isLoading: boolean}) {

  //preload the image
  // const img = new Image();
  // img.src = opening;

  if (!isLoading) return null;
  return (
    <div className="fixed z-[1000] w-screen h-screen">
      <img className="w-full h-full" src={opening} alt="loading" />
    </div>
  )
}
export default Opening;