
export const Footer = () => {
  return (
    <div className="mt-8 w-full bg-black md:px-[500px] flex md:flex-row flex-col items-start space-y-4 md:sapce-y-0 justify-between text-sm md:text-md py-8 ">
      <div className="flex flex-col text-white">
        <p>Featured Blogs</p>
        <p>Most viwed</p>
        <p>Reader choice</p>

      </div>
      <div className="flex flex-col text-white">
        <p>Forum </p>
        <p>Suport</p>
        <p> Recent Post</p>

      </div>
      <div className="flex flex-col text-white">
        <p>Privacy Policy </p>
        <p>About us</p>
        <p>  Terms & Conditons </p>
        <p>Terms of Services</p>

      </div>
    </div>
  )
}
