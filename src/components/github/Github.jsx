import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data=useLoaderData()
    //const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/arpiiit')
    //     .then(respnse=>respnse.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

  return (
    <div className='m-10  rounded-md flex gap-[40rem] items-center text-center bg-gray-200 text-white p-4 text-3xl'>
      <img className='rounded-md hover:opacity-70 cursor-pointer' src={data.avatar_url} alt="" />
    <div className=''>
    Account Name: {data.name}
    <hr />
      Github Bio: {data.bio}
      <hr />
      Github Url: {data.html_url}
      </div>

    </div>
  )
}

export const githubLoader=async()=>{
   const responce= await fetch('https://api.github.com/users/arpiiit');
   return responce.json()
}