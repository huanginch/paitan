import { CircularProgress } from "@mui/material";

function Loading({isLoading}: {isLoading: boolean}) {
  if (!isLoading) return null;
  return (
    <div className="fixed z-[1000] w-screen h-screen bg-black opacity-70">
      <div className="fixed z-[1001] w-full h-full flex justify-center items-center">
        <CircularProgress sx={{color: '#FFB800'}} />
      </div>
    </div>
  )
}
export default Loading;