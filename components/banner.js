 const Banner = () => {
    return(
        <>
        <div className="flex justify-center">
            <div className="pt-28">
                <div className="flex gap-2"> <h1 className="text-4xl text-blue-700 font-bold">Coffee</h1><h1 className="text-4xl text-sky-400 font-bold">Delight</h1></div>
                    <p className="py-2 font-bold ">Diacover your local coffee-shops!</p>
                    <button className="bg-sky-400 px-4 py-2 text-white font-bold rounded-lg">View stores nearby</button>
            </div>
            <div className="pt-12 pl-8"><img style = {{height:300}}src="coffee.png" alt=""/></div>
        </div>
        </>

    )
 };

 export default Banner;