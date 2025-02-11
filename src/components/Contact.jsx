import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1200px] mx-auto sm:py-py-20 p-5'>
   
   
   <div className=' mx-auto'>

        <div class="mt-6 primary-color w-[100%] rounded-md">
            <div class="p-10">

            <form action="https://getform.io/f/bwnndrla" method="POST">
  <div className='text-center'>
    <h2 className='pb-8 text-4xl font-bold leading-tight font-serif animate-wiggle'>Contact Me</h2>
  
  </div>
              <div class="grid grid-col-1 sm:grid-col-2 gap-x-5 gap-y-4">
                <div>
                  <div class="mt-2.5">
                    <input type="text" name="name" placeholder="Name"
                     class="bg-gray w-full px-4 py-4 border border-black-700 rounded-md focus:outline-none focus:border-pint-600" />
                  </div>
                </div> 

                <div>
                  <div class="mt-2.5">
                    <input type="email" name="email" id="" placeholder="Email address"
                     class="bg-gray w-full px-4 py-4 border border-black-700 rounded-md focus:outline-none focus:border-pint-600" />
                  </div>
               </div>
              </div>

              <div class="sm:col-span-2">
                  <div class="mt-2.5">
                      <textarea name="message" id="" placeholder="Message"
                       class="bg-gray w-full px-4 py-4 border border-black-700 rounded-md focus:outline-none focus:border-pint-600"
                       rows="4" >
                      </textarea>
                  </div>
              </div> 

              <div class=" mt-5">
                  <button type="submit"
                        class="text-xl w-[120px] ml-[40%] bg-white border-2 border-gray-300 p-4 mt-2 rounded-lg hover:bg-gray-600 hover:text-white font-extrabold text-gray-800 transition-colors duration-200">
                          Submit
                        </button>
              </div>
            </form>
            
            
            </div>


        </div>
   
    </div>
   </div>

  )
}

export default Contact
