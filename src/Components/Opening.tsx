function Opening({isLoading, img}: {isLoading: boolean, img: string}) {

  if (!isLoading) return null;
  return (
    <div className="fixed z-[1000] w-screen h-screen">
      <img className="w-full h-full" src={img} alt="loading" />
    </div>
  )
}
export default Opening;