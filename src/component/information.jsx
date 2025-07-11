import grade_point from '../assets/kct_grade_point.jpg'
import semester_detail from '../assets/semester_detail.jpg'
export default function Information()
{
    return(
        <>
        <section id='details' className='bg-primary pb-5 font-hero-font font-bold '>
            <div className='md:flex'>

<div class="w-full overflow-x-auto px-2 md:px-10">
  <table class="w-full min-w-max table-auto border border-collapse border-gray-400 text-center text-sm md:text-base">
    <caption class="text-2xl md:p-3 font-bold text-gray-800 mb-4 mt-2">Course Details</caption>
    
    <thead class="bg-gray-200">
      <tr>
        <th class="border border-gray-400 px-4 py-2">S.No</th>
        <th class="border border-gray-400 px-4 py-2">Course Code</th>
        <th class="border border-gray-400 px-4 py-2">Course Title</th>
        <th class="border border-gray-400 px-4 py-2">Course Mode</th>
        <th class="border border-gray-400 px-4 py-2">Credits</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td class="border px-4 py-2">1</td>
        <td class="border px-4 py-2">U18MAI4201</td>
        <td class="border px-4 py-2">Probability and Statistics</td>
        <td class="border px-4 py-2">Embedded - Theory & Lab</td>
        <td class="border px-4 py-2">4</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">2</td>
        <td class="border px-4 py-2">U18ITT4001</td>
        <td class="border px-4 py-2">Operating Systems</td>
        <td class="border px-4 py-2">Theory</td>
        <td class="border px-4 py-2">3</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">3</td>
        <td class="border px-4 py-2">U18ITI4204</td>
        <td class="border px-4 py-2">Computer Networks</td>
        <td class="border px-4 py-2">Embedded - Theory & Lab</td>
        <td class="border px-4 py-2">4</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">4</td>
        <td class="border px-4 py-2">U18ITI6203</td>
        <td class="border px-4 py-2">Web Technology</td>
        <td class="border px-4 py-2">Embedded – Theory & Lab</td>
        <td class="border px-4 py-2">4</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">5</td>
        <td class="border px-4 py-2">U18ITI7202</td>
        <td class="border px-4 py-2">Cloud Computing</td>
        <td class="border px-4 py-2">Embedded – Theory and Lab</td>
        <td class="border px-4 py-2">3</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">6</td>
        <td class="border px-4 py-2">U18INI4600</td>
        <td class="border px-4 py-2">Engineering Clinic IV</td>
        <td class="border px-4 py-2">Embedded - Lab & Project</td>
        <td class="border px-4 py-2">3</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">7</td>
        <td class="border px-4 py-2">U18VET4101</td>
        <td class="border px-4 py-2">Universal Human Values 2</td>
        <td class="border px-4 py-2">Theory</td>
        <td class="border px-4 py-2">3</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">8</td>
        <td class="border px-4 py-2">U18CHT4000</td>
        <td class="border px-4 py-2">Environmental Science & Engineering</td>
        <td class="border px-4 py-2">Theory</td>
        <td class="border px-4 py-2">0</td>
      </tr>
    </tbody>

    <tfoot>
      <tr class="font-bold bg-gray-100">
        <td colspan="4" class="text-right border px-4 py-2">Total Credits</td>
        <td class="border px-4 py-2">24</td>
      </tr>
    </tfoot>
  </table>
</div>
                
       </div>


       

<div class="md:w-1/2 mx-auto overflow-x-auto px-2">
  <table class="min-w-full table-auto border border-collapse border-gray-400 text-center">
    <caption class="text-2xl p-3 m-5 font-bold text-gray-800 mb-2">KCT Grade Points</caption>
    <thead class="bg-gray-100 text-black">
      <tr>
        <th class="border border-gray-400 px-4 py-2">Range of Marks</th>
        <th class="border border-gray-400 px-4 py-2">Grade</th>
        <th class="border border-gray-400 px-4 py-2">Grade Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border px-4 py-2">91 - 100</td>
        <td class="border px-4 py-2">O</td>
        <td class="border px-4 py-2">10</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">81 - 90</td>
        <td class="border px-4 py-2">A+</td>
        <td class="border px-4 py-2">9</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">71 - 80</td>
        <td class="border px-4 py-2">A</td>
        <td class="border px-4 py-2">8</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">61 - 70</td>
        <td class="border px-4 py-2">B+</td>
        <td class="border px-4 py-2">7</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">56 - 60</td>
        <td class="border px-4 py-2">B</td>
        <td class="border px-4 py-2">6</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">51 - 55</td>
        <td class="border px-4 py-2">C</td>
        <td class="border px-4 py-2">5</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">&lt; 50</td>
        <td class="border px-4 py-2">F</td>
        <td class="border px-4 py-2">0</td>
      </tr>
    </tbody>
  </table>
</div>
     

        </section>
        </>
    )
}