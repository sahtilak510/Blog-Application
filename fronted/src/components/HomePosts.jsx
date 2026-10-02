
export const HomePost = () => {
  return (
    <div className="w-full flex items-start gap-4 md:gap-6 mt-8 px-4 md:px-[200px]">
      {/* left */}
      <div className="w-[35%] shrink-0">
          <img src="/image/1.jpg" alt="Post" className="w-full h-full md:h-[200px] object-cover rounded-lg"/>
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%] min-w-0">
        <h1 className="text-lg md:text-2xl font-bold md:mb-2 break-words">
          10 Uses of Artifical Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 md:mb-4 text-xs md:text-sm font-semibold text-gray-500 items-center justify-between gap-2">
            <p className="truncate">@Tilak Kumar  Sah</p>
            <div className="flex gap-2 md:space-x-3 shrink-0 whitespace-nowrap">
              <p>16/06/2026</p>
              <p>16:45</p>
            </div>
        </div>
          <p className="text-sm md:text-lg leading-relaxed">Prominent examples of AI software used in everyday life include voice assistants, image recognition for face unlock in mobile phones, and ML-based financial fraud detection. AI software usually involves just downloading software with AI capabilities from an online store and requires no peripheral devices.</p>
      </div>
    </div>
  )
}
