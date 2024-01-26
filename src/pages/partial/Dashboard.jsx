import Sidenav from '../../Components/Header-Footer/Sidenav'
import Header from '../../Components/Header-Footer/Header'


export const Dashboard = () => {
  return (
    <div className='h-screen grid grid-cols-[auto,1fr]'>
      <Sidenav />
      <div className="grid grid-rows-[auto,1fr]">

        <Header />
        <div className=" bg-black w-[1358px] p-6 ">
          {/* //grid start here */}
          <div className="grid grid-cols-4 gap-5 h-[600px] w-[1200px] mx-[20px] mb-[20px] p-[20px]">
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Best Seller</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Family Meals</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Breakfast</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Chickenjoy</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Burgers</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Jolly Spaghetti</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Burger steak</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Super Meals</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Chicken Sandwhich</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Spaghetti</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Desserts</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Beverages</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
