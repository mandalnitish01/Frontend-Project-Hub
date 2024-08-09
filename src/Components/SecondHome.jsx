import React from 'react'

const SecondHome = () => {
  return (
    <div className='flex justify-evenly items-center bg-gray-300 mt-20 text-black'>
      <div className='w-[600px] h-600px] p-9'>
        <h1 className='font-bold text-2xl'>Learn About AI</h1>
        <p>AI tools are revolutionizing various industries by enhancing efficiency, accuracy, and innovation. These tools leverage machine learning, natural language processing, and computer vision to perform tasks that traditionally required human intelligence. Here are some key areas where AI tools are making a significant impact:</p>
        <p><span className='font-semibold'>Automation:</span> <br />AI-powered automation tools can handle repetitive and mundane tasks, freeing up human workers to focus on more complex and creative endeavors. This includes everything from automated email responses to r   obotic process automation in manufacturing.</p>
        <p><span className='font-semibold'>Image and Video Analysis:</span> <br /> AI tools can analyze visual data to recognize objects, detect anomalies, and even create art. Applications range from security surveillance to automated content moderation on social media platforms.</p>
        <p><span className='font-semibold'>Educational Tools:</span> <br /> AI-driven educational platforms can provide personalized learning experiences, adapting to the needs and pace of individual students. This helps in identifying learning gaps and providing targeted interventions.</p>
      </div>
      <div className='py-8'>
        <img  src="https://www.ssl2buy.com/wp-content/uploads/2023/08/discover-the-best-al-tools-best-practices-to-use-it-safely.jpg" className='w-[500px] cursor-pointer rounded-lg hover:shadow-lg transition-all'  alt="" />
      </div>
    </div>
  )
}

export default SecondHome