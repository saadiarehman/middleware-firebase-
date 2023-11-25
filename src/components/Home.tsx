

function Home(props) {
  return (
        
        <div className="w-screen h-screen bg-purple-400 flex justify-center items-center">
          <div className="w-1/3 h-3/4 bg-white rounded-md flex justify-center">
            <div className="p-10 text-2xl font-bold font-serif">
              <p>{ props.name ? `Welcome - ${props.name}` : "Login Please"}</p>
            </div>
          </div>
        </div>
  )
}

export default Home