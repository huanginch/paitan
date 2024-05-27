function Loading({isLoading}: {isLoading: boolean}) {
  if (!isLoading) return null;
  return (
    <div className="fixed z-[1000] w-screen h-screen bg-black opacity-70">
      <div className="fixed z-[1001] w-full h-full flex justify-center items-center">
        <div className="w-[100px] h-[100px] border-4 border-primary rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
export default Loading;