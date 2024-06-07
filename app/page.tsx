import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
 return (
   <main className={styles.main}>
     <div className={styles.center}>
         <p>
           Hello from Yaser!
         </p>


     </div>
     <div className={styles.center}>
       <p>
     <br/> ANSWER 1:
      <br/> 5 Most favourite support task:
      <p>
      <br/> 1.Work with engineering teams during incidents and provide updates to internal and external stakeholders
      <br/> 2.Work with 3rd party partners to track down a tricky situation for a joint customer
      <br/> 3.Analyze hundreds of support tickets to spot trends the product team can use
      <br/> 4. Identify, file (and, where possible, resolve) bugs in private and public Vercel Next.js repos on GitHub
      <br/> 5.Work with people to figure out if Vercel is suitable for their use case
      </p>
      </p>
      <p>
      <br/> 5 least favourite support task:
      <p>
      <br/> 1.Help resolve billing issues for customers
      <br/> 2.Create video tutorials to help teach users a specific feature or use case
      <br/> 3.Find and recruit teammates for the support team
      <br/> 4. Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites
      <br/> 5.Manage a support team
      </p>
      </p>

  
     </div>


     <div className={styles.center}>
     <a
           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
           target="_blank"
           rel="noopener noreferrer"
         >
           By{' '}
     <Image
       src="/vercel.svg"
       alt="Vercel Logo"
       className={styles.vercelLogo}
       width={100}
       height={24}
       priority
       />
       </a>
     </div>
   </main>
 )
}
