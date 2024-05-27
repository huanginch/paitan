import { CircularProgress } from "@mui/material";

function Loading({isLoading}: {isLoading: boolean}) {
  if (!isLoading) return null;
  return (
    <div className="fixed z-[1000] w-screen h-screen bg-black opacity-70">
      <div className="fixed z-[1001] w-full h-full flex flex-col justify-center items-center">
        <p className="text-white text-2xl">首次載入會花費較多時間，請耐心等候</p>
        <CircularProgress sx={{ color: '#FFB800' }} />
      </div>
    </div>
  )
}
export default Loading;